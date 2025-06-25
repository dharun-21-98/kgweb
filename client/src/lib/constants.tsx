import { Product, ClientLogo, Statistic } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Precision Ball Bearings",
    description: "High-performance ball bearings for demanding industrial applications",
    fullDescription: "Our precision ball bearings are engineered for the most demanding industrial applications, featuring advanced materials and manufacturing processes that ensure superior performance, longevity, and reliability. These bearings are designed to handle high speeds, heavy loads, and extreme operating conditions while maintaining exceptional precision and smooth operation.",
    image: "https://i.postimg.cc/LXX2kr0p/rafael-juarez-h-TUd-Xgbhd3o-unsplash.jpg",
    specs: {
      material: "Chrome Steel",
      loadRating: "12000N",
      temperature: "-40°C to 180°C",
      precision: "ABEC-9"
    },
    category: "ball-bearings"
  },
  {
    id: 2,
    name: "Roller Bearings",
    description: "Heavy-duty roller bearings for high-load applications",
    fullDescription: "Our roller bearings are specifically designed for heavy-duty applications where high radial loads and moderate speeds are encountered. These bearings feature optimized internal geometry and advanced heat treatment processes that provide exceptional load capacity and extended service life.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    specs: {
      material: "Alloy Steel",
      loadRating: "25000N",
      temperature: "-30°C to 200°C",
      precision: "P6"
    },
    category: "roller-bearings"
  },
  {
    id: 3,
    name: "Automotive Bearings",
    description: "Specialized bearings for automotive applications",
    fullDescription: "Our automotive bearings are engineered to meet the stringent requirements of modern vehicles, providing reliable performance under varying operating conditions. These bearings are designed for easy installation and maintenance while delivering optimal performance throughout the vehicle's lifecycle.",
    image: "https://i.postimg.cc/tJsRbLh5/clayton-cardinalli-hk-JNx0-EDbj-E-unsplash.jpg",
    specs: {
      material: "Stainless Steel",
      loadRating: "8000N",
      temperature: "-20°C to 120°C",
      precision: "P5"
    },
    category: "automotive"
  },
  {
    id: 4,
    name: "Thrust Bearings",
    description: "Axial load bearings for specialized machinery",
    fullDescription: "Our thrust bearings are designed to handle pure axial loads and combined axial-radial loads in various industrial applications. These bearings feature advanced cage designs and optimized contact angles that provide superior performance and reliability.",
    image: "https://i.postimg.cc/RVzstwYS/minku-kang-a-Cni-NTi-IFd8-unsplash.jpg",
    specs: {
      material: "Ceramic Hybrid",
      loadRating: "15000N",
      temperature: "-50°C to 250°C",
      precision: "P4"
    },
    category: "thrust-bearings"
  },
  {
    id: 5,
    name: "Needle Bearings",
    description: "Compact bearings for space-constrained applications",
    fullDescription: "Our needle bearings provide exceptional load capacity in minimal space, making them ideal for applications where space is limited but high performance is required. These bearings feature precision-manufactured needle rollers and high-quality cage materials.",
    image: "https://i.postimg.cc/XJSFPkdX/testalize-me-9x-Hs-Wmh3m-4-unsplash-1.jpg",
    specs: {
      material: "Bearing Steel",
      loadRating: "6000N",
      temperature: "-10°C to 150°C",
      precision: "P6"
    },
    category: "needle-bearings"
  },
  {
    id: 6,
    name: "Spherical Bearings",
    description: "Self-aligning bearings for misalignment compensation",
    fullDescription: "Our spherical bearings are designed to accommodate misalignment while maintaining optimal performance. These bearings feature a spherical outer ring raceway that allows the bearing to self-align, reducing stress and extending service life.",
    image: "https://i.postimg.cc/vm9x5xky/morteza-mohammadi-P8j-Evcknd-SE-unsplash.jpg",
    specs: {
      material: "Carbon Steel",
      loadRating: "18000N",
      temperature: "-40°C to 200°C",
      precision: "P0"
    },
    category: "spherical-bearings"
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 1, name: "TechCorp", logo: "TECHCORP" },
  { id: 2, name: "IndusTech", logo: "INDUSTECH" },
  { id: 3, name: "ManufacturingPro", logo: "MANUFPRO" },
  { id: 4, name: "GlobalSystems", logo: "GLOBALSYS" },
  { id: 5, name: "PrecisionWorks", logo: "PRECISION" },
  { id: 6, name: "AutoMotive", logo: "AUTOMOTIVE" },
  { id: 7, name: "HeavyIndustry", logo: "HEAVYIND" },
  { id: 8, name: "MachineWorks", logo: "MACHINEWORKS" },
];

export const STATISTICS: Statistic[] = [
  { id: 1, value: "1000000", label: "Products Delivered", suffix: "+" },
  { id: 2, value: "5", label: "Global Locations", suffix: "+" },
  { id: 3, value: "10", label: "Years Experience", suffix: "+" },
  { id: 4, value: "80", label: "Enterprise Clients", suffix: "+" },
];

export const WHY_CHOOSE_US = [
  {
    id: 1,
    number: "01",
    title: "Precision Engineering",
    description: "Advanced manufacturing processes and quality control systems ensure every bearing meets the highest precision standards for critical industrial applications.",
    icon: "cogs"
  },
  {
    id: 2,
    number: "02",
    title: "Unmatched Reliability",
    description: "Rigorous testing and proven performance in demanding environments. Our bearings deliver consistent operation with extended service life and minimal maintenance.",
    icon: "shield"
  },
  {
    id: 3,
    number: "03",
    title: "Expert Support",
    description: "Dedicated technical support team with deep industry expertise. From selection to installation, we provide comprehensive guidance for optimal performance.",
    icon: "headphones"
  }
];
