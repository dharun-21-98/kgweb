import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.json({ success: true, id: contactRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact request" });
      }
    }
  });

  // Download brochure (mock endpoint)
  app.post("/api/download-brochure", async (req, res) => {
    try {
      const { email, name } = req.body;
      if (!email || !name) {
        return res.status(400).json({ message: "Email and name are required" });
      }
      
      // Create a contact request for brochure download
      await storage.createContactRequest({
        name,
        email,
        company: "",
        message: "Brochure download request",
        type: "brochure",
      });
      
      res.json({ 
        success: true, 
        message: "Brochure download link sent to your email",
        downloadUrl: "/api/files/kg-international-brochure.pdf" // Mock URL
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to process brochure request" });
    }
  });

  // Request quote
  app.post("/api/request-quote", async (req, res) => {
    try {
      const { email, name, company, message, productId } = req.body;
      if (!email || !name || !message) {
        return res.status(400).json({ message: "Email, name, and message are required" });
      }
      
      const contactRequest = await storage.createContactRequest({
        name,
        email,
        company: company || "",
        message,
        type: "quote",
        productId: productId || null,
      });
      
      res.json({ 
        success: true, 
        message: "Quote request submitted successfully. We'll get back to you within 24 hours.",
        id: contactRequest.id
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to submit quote request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
