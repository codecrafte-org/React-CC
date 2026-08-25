export const SERVICES_DATA = [
    //POS
  {
    id: "pos-systems",
    tagline: "INVENTORY // POS",
    heroTitle: "Manage Sales Smarter",
    heroDescription: "Fast, reliable, and easy-to-use Point of Sale system. Track your inventory, sales, and customers in real-time with zero lag.",
    pricingHeading: "Point Of Sale System Pricing",
    pricingSubheading: "Choose the right scale for your retail or restaurant business.",
    buttonText: "Buy Now",

    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter",
        name: "Starter Shop",
        price: "15,999",
        currency: "PKR",
        popular: false,
        features: [
          { text: "Single Terminal Setup", included: true, tag: "INC" },
          { text: "Inventory Management", included: true, tag: "INC" },
          { text: "Basic Sales Reports", included: true, tag: "FREE" },
          { text: "1 Month Maintenance", included: true, tag: "FREE" },
          { text: "Receipt Template", included: true, tag: "FREE" },
          { text: "Advanced Sales Report", included: false },
          { text: "Cloud Backup (Auto)", included: false },
          { text: "Custom Mobile App", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "pro",
        name: "Pro Retailer",
        price: "25,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        features: [
          { text: "Up to 3 Terminals", included: true, tag: "INC" },
          { text: "Sales & Reports", included: true, tag: "INC" },
          { text: "Advanced Stock Alerts", included: true, tag: "FREE" },
          { text: "6 Months Maintenance", included: true, tag: "FREE" },
          { text: "Cloud Backup", included: true, tag: "FREE" },
          { text: "Business Mail", included: true, tag: "FREE" },
          { text: "Receipt Template", included: true, tag: "FREE" },
          { text: "Custom Mobile App", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "89,999",
        currency: "PKR",
        popular: false,
        features: [
          { text: "Customize Terminals", included: true, tag: "INC" },
          { text: "Custom Mobile Admin App", included: true, tag: "FREE" },
          { text: "1 Year Maintenance", included: true, tag: "FREE" },
          { text: "API for E-commerce", included: true, tag: "FREE" },
          { text: "Advanced AI Analytics", included: true, tag: "FREE" },
          { text: "Business Mail", included: true, tag: "FREE" },
          { text: "Get 15% Discount on Every Purchase", included: true, tag: "FREE" },
          { text: "Data Backup", included: true, tag: "FREE" },
          { text: "Custom Mobile App", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      }
    ],

    // You May Like This Section (4 Cards)
    similarServices: [
      {
        id: "management-systems",
        title: "Management Systems",
        description: "Track your stock levels in real-time and get automated alerts when items are low.",
        icon: "package",
        link: "/services/management-systems"
      },
      {
        id: "web-development",
        title: "Web Development",
        description: "Get more customers and clients via custom, high-converting websites.",
        icon: "globe",
        link: "/services/web-development"
      },
      {
        id: "sales-analytics",
        title: "Sales Analytics",
        description: "Detailed daily, weekly, and monthly reports to help you understand profit margins.",
        icon: "bar-chart-3",
        link: "/services/sales-analytics"
      },
      {
        id: "app-development",
        title: "App Development",
        description: "Get your own iOS & Android mobile application in just a few days.",
        icon: "smartphone",
        link: "/services/app-development"
      }
    ]
  },
  //AI
  {
    id: "ai-automation",
    tagline: "AI // FUTURE OF WORK",
    heroTitle: "Smarter Workflows With AI",
    heroDescription: "Deploy 24/7 AI Agents and Custom Automations in your business. Eliminate manual repetitive tasks and scale your business effortlessly.",
    pricingHeading: "AI Automation Plans",
    pricingSubheading: "Save hundreds of hours every month with our custom AI workflows.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "basic-automate",
        name: "Basic Automate",
        price: "29,999",
        currency: "PKR",
        popular: false,
        buttonText: "Start Saving Time",
        features: [
          { text: "5 Automated Workflows", included: true, tag: "INC" },
          { text: "Zapier/Make Integration", included: true, tag: "FREE" },
          { text: "Auto Email Responder", included: true, tag: "FREE" },
          { text: "1 Month Maintenance", included: true, tag: "INC" },
          { text: "Basic Data Scraping", included: true, tag: "FREE" },
          { text: "Custom AI Chatbot", included: false },
          { text: "AI Voice Agents", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "business-ai",
        name: "Business AI",
        price: "54,999",
        currency: "PKR",
        popular: true,
        popularBadge: "BEST ROI",
        buttonText: "Go Pro AI",
        features: [
          { text: "15 Automated Workflows", included: true, tag: "INC" },
          { text: "Custom ChatGPT Bot", included: true, tag: "FREE" },
          { text: "CRM & Lead Automation", included: true, tag: "FREE" },
          { text: "3 Months Maintenance", included: true, tag: "INC" },
          { text: "AI Content Generator", included: true, tag: "FREE" },
          { text: "Social Media Auto-Post", included: true, tag: "FREE" },
          { text: "Advanced AI Agents", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "enterprise-ai",
        name: "Enterprise AI",
        price: "99,999+",
        currency: "PKR",
        popular: false,
        buttonText: "Scale Today",
        features: [
          { text: "Unlimited Automations", included: true, tag: "INC" },
          { text: "Autonomous AI Agents", included: true, tag: "FREE" },
          { text: "Custom LLM Training", included: true, tag: "FREE" },
          { text: "AI Voice Call Agents", included: true, tag: "FREE" },
          { text: "6 Months Maintenance", included: true, tag: "FREE" },
          { text: "API Integration (Any App)", included: true, tag: "FREE" },
          { text: "24/7 VIP Support", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      }
    ],

    // You May Like This Section (4 Cards)
    similarServices: [
      {
        id: "pos-system",
        title: "Point Of Sale (POS)",
        description: "Manage inventory, daily sales, and billing in real-time.",
        icon: "shopping-cart",
        link: "/services/pos-systems"
      },
      {
        id: "web-development",
        title: "Web Development",
        description: "Get modern, high-converting websites for your business.",
        icon: "globe",
        link: "/services/web-development"
      },
      {
        id: "custom-crm",
        title: "Custom CRM & PMS",
        description: "Manage your leads, team, and clients from one dashboard.",
        icon: "users",
        link: "/services/crm-development"
      },
      {
        id: "app-development",
        title: "App Development",
        description: "Custom mobile apps tailored for iOS and Android.",
        icon: "smartphone",
        link: "/services/app-development"
      }
    ]
  },
  // APP
  {
    id: "app-development",
    tagline: "APPS // IOS & ANDROID",
    heroTitle: "Build Powerful Mobile Apps",
    heroDescription: "Custom native and cross-platform mobile applications that offer seamless user experiences. We transform your ideas into scalable digital products.",
    pricingHeading: "Select Your Mobile App Plan",
    pricingSubheading: "Get premium app features along with high-value free services.",
    //buttonText: "Buy Now",

    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "19,000",
        currency: "PKR",
        popular: false,
        buttonText: "Start Monthly",

        features: [
          { text: "5 Pages Design", included: true, tag: "INC" },
          { text: "Social Media Links", included: true, tag: "INC" },
          { text: "SSL Security Setup", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "1 Month Maintenance", included: true, tag: "FREE" },
          { text: "Business Email Setup", included: false },
          { text: "Google Search Console Setup", included: false },
          { text: "Google Analytics", included: false },
          { text: "AI Integration", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "professional",
        name: "Professional",
        price: "24,999",
        currency: "PKR",
        popular: true,
        popularBadge: "RECOMMENDED",
        buttonText: "Get Started",
        features: [
          { text: "10 Pages Design", included: true, tag: "INC" },
          { text: "Social Media Links", included: true, tag: "INC" },
          { text: "SSL Security Setup", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "Professional Email", included: true, tag: "FREE" },
          { text: "Google Analytics Setup", included: true, tag: "FREE" },
          { text: "3 Months Maintenance", included: true, tag: "FREE" },
          { text: "Google Search Console Setup", included: true, tag: "FREE" },
          { text: "AI Integration (5 Year)", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "44,999",
        currency: "PKR",
        popular: false,
        buttonText: "Contact Us",
        features: [
          { text: "15+ Pages Design", included: true, tag: "INC" },
          { text: "Social Media Links", included: true, tag: "INC" },
          { text: "Premium SSL Security", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "3 Professional Emails", included: true, tag: "FREE" },
          { text: "Advanced Google Analytics", included: true, tag: "FREE" },
          { text: "AI Integration (5 Years)", included: true, tag: "FREE" },
          { text: "1 Year Maintenance", included: true, tag: "FREE" },
          { text: "Google Search Console Setup", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      }
    ],

    // You May Like This Section (4 Cards)
    similarServices: [
      {
        id: "seo-ranking",
        title: "SAAS Applocation",
        description: "Get your Own page and bring organic traffic to your new website.",
        icon: "bar-chart-2",
        link: "/services/saas-application"
      },
      {
        id: "smm",
        title: "Social Media Marketing",
        description: "Run targeted ads and manage your social profiles to get more sales.",
        icon: "megaphone",
        link: "/services/social-media-marketing"
      },
      {
        id: "logo-branding",
        title: "Logo & Branding",
        description: "Stand out with a professional logo, business cards, and brand identity.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "custom-web-apps",
        title: "Custom Web Apps",
        description: "Upgrade to complex E-commerce stores or custom management portals.",
        icon: "layout",
        link: "/services/web-development"
      }
    ]
  },
  //BUSNIESS APP
  {
    id: "business-applications",
    tagline: "SOFTWARE // BUSINESS MANAGEMENT",
    heroTitle: "Streamline Your Business Operations",
    heroDescription: "All-in-one custom software and web applications built to digitize your daily operations, track growth, and scale smoothly.",
    pricingHeading: "Business App Pricing",
    pricingSubheading: "Essential tools and tailored solutions for your business ecosystem.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter-app",
        name: "Starter App",
        price: "34,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Inventory Management", included: true, tag: "INC" },
          { text: "Sales Reports", included: true, tag: "INC" },
          { text: "Professional Business Email", included: true, tag: "FREE" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "WhatsApp Alerts", included: true, tag: "FREE" },
          { text: "Multi-User Login", included: false },
          { text: "Mobile App Sync", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "business-pro",
        name: "Business Pro",
        price: "64,999",
        currency: "PKR",
        popular: true,
        popularBadge: "BEST SELLER",
        buttonText: "Buy Now",
        features: [
          { text: "Full CRM System", included: true, tag: "INC" },
          { text: "Multi-User Roles", included: true, tag: "INC" },
          { text: "5 Business Emails", included: true, tag: "FREE" },
          { text: "High-Speed Hosting", included: true, tag: "FREE" },
          { text: "Automated Invoicing", included: true, tag: "FREE" },
          { text: "AI Data Insights", included: true, tag: "FREE" },
          { text: "3 Months Support", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "99,999+",
        currency: "PKR",
        popular: false,
        buttonText: "Contact Us",
        features: [
          { text: "Custom Workflow", included: true, tag: "INC" },
          { text: "ERP Integration", included: true, tag: "INC" },
          { text: "Unlimited Emails", included: true, tag: "FREE" },
          { text: "Dedicated Server", included: true, tag: "FREE" },
          { text: "1 Year Maintenance", included: true, tag: "FREE" },
          { text: "Source Code Access", included: true, tag: "FREE" },
          { text: "Mobile App (Android)", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      }
    ],

    // You May Like This Section (4 Cards)
    similarServices: [
      {
        id: "crm-systems",
        title: "CRM Systems",
        description: "Customer data aur sales pipelines ko manage karne ke liye.",
        icon: "users",
        link: "/services/crm-development"
      },
      {
        id: "pos-system",
        title: "Inventory & POS",
        description: "Stock tracking aur billing solutions business scale karne ke liye.",
        icon: "package",
        link: "/services/pos-systems"
      },
      {
        id: "ai-automation",
        title: "AI Automation",
        description: "Faltu kamo ko auto par lagayein aur smart insights payein.",
        icon: "brain-circuit",
        link: "/services/ai-automation"
      },
      {
        id: "app-development",
        title: "Mobile App Sync",
        description: "Apne business dashboard ko mobile par kahin bhi access karein.",
        icon: "smartphone",
        link: "/services/app-development"
      }
    ]
  },
  //CRM
  {
    id: "crm-development",
    tagline: "SOFTWARE // CRM & LEAD MANAGEMENT",
    heroTitle: "Manage Leads, Clients, And Sales Smarter",
    heroDescription: "Scale your sales pipeline with our custom CRM solutions. Manage leads, track client interactions, and analyze sales performance from one unified dashboard.",
    pricingHeading: "Choose Your CRM Plan",
    pricingSubheading: "Manage leads, clients, and sales with powerful tools and premium free add-ons.",
    
    // Pricing Plans (2 Cards - Monthly & One-Time)
    plans: [
      {
        id: "monthly",
        name: "Monthly Subscription",
        price: "23,999",
        currency: "PKR",
        popular: false,
        priceSubtext: "Setup + 1st Month (Then 7,000 PKR / month)",
        buttonText: "Start Monthly",
        features: [
          { text: "Basic Dashboard & Sales Analytics", included: true, tag: "INC" },
          { text: "Unlimited User Roles & Leads", included: true, tag: "INC" },
          { text: "Client Management System", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "Excel/PDF Reports Download", included: true, tag: "FREE" },
          { text: "Invoice Design Setup", included: true, tag: "FREE" },
          { text: "Free Business Logo Design", included: true, tag: "FREE" },
          { text: "Free Business Mail", included: true, tag: "FREE" },
          { text: "Automated WhatsApp Alerts", included: false },
          { text: "Cloud Data Backup Security", included: false }
        ],
        buyUrl: "/contact",
      },
      {
        id: "lifetime",
        name: "One-Time Purchase",
        price: "79,999",
        currency: "PKR",
        popular: true, // Making this card have the popular styling based on "LIFETIME DEAL"
        popularBadge: "LIFETIME DEAL",
        priceSubtext: "Pay Once, Own It Forever (No Monthly Fees)",
        buttonText: "Buy Lifetime Access",
        features: [
          { text: "Advanced CRM & Sales Analytics", included: true, tag: "INC" },
          { text: "Unlimited User Roles & Leads", included: true, tag: "INC" },
          { text: "Client Management System", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "Excel/PDF Reports Download", included: true, tag: "FREE" },
          { text: "Premium Invoice Design Setup", included: true, tag: "FREE" },
          { text: "Free Business Logo Design", included: true, tag: "FREE" },
          { text: "Automated WhatsApp Alerts", included: true, tag: "FREE" },
          { text: "Cloud Data Backup Security", included: true, tag: "FREE" },
          { text: "Free Business Mail", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
      }
    ],

    // You May Like This Section (5 Cards for CRM Extra Services)
    similarServices: [
      {
        id: "app-development",
        title: "App Dev",
        description: "Get a native mobile app version so your team can manage leads on the go.",
        icon: "smartphone",
        link: "/services/app-development"
      },
      {
        id: "sales-analytics",
        title: "Data Analytics & Insights",
        description: "Transform your CRM data into powerful visual dashboards.",
        icon: "bar-chart-4",
        link: "/services/data-analytics"
      },
      {
        id: "ai-automation",
        title: "AI Automation",
        description: "Automate lead follow-ups, email marketing, and data entry inside your CRM.",
        icon: "bot",
        link: "/services/ai-automation"
      },
      {
        id: "meta-ads",
        title: "Meta Ads",
        description: "Fresh, quality leads directly pumped into your CRM from Facebook & Instagram.",
        icon: "megaphone",
        link: "/services/meta-ads"
      },
      {
        id: "custom-software",
        title: "Custom Software",
        description: "Custom API integrations and modules specifically for your workflow.",
        icon: "code",
        link: "/services/custom-software"
      }
    ]
  },
  // SOftware development
  {
    id: "custom-software",
    tagline: "SOFTWARE // CUSTOM SOLUTIONS",
    heroTitle: "Smarter Software. Faster Growth.",
    heroDescription: "We engineer scalable, high-performance custom software solutions tailored specifically to optimize your business workflows and maximize efficiency.",
    pricingHeading: "Software Development Plans",
    pricingSubheading: "Scalable solutions for every stage of your business.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "gold",
        name: "Gold",
        price: "19,999",
        currency: "PKR",
        popular: false,
        buttonText: "Get Started",
        features: [
          { text: "Custom Dashboard", included: true, tag: "INC" },
          { text: "User Authentication", included: true, tag: "INC" },
          { text: "Database Setup (SQL/NoSQL)", included: true, tag: "INC" },
          { text: "Professional Business Email", included: true, tag: "FREE" },
          { text: "Professional Business Logo", included: true, tag: "FREE" },
          { text: "API Integration", included: true, tag: "FREE" },
          { text: "Basic SEO Setup", included: true, tag: "FREE" },
          { text: "Mobile App Version", included: false },
          { text: "Include source code", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "business-pro",
        name: "Business Pro",
        price: "89,999",
        currency: "PKR",
        popular: true,
        popularBadge: "BEST FOR BUSINESS",
        buttonText: "Select Plan",
        features: [
          { text: "Advanced Logic & Workflows", included: true, tag: "INC" },
          { text: "Payment Gateway Integration", included: true, tag: "INC" },
          { text: "Admin Panel & Analytics", included: true, tag: "INC" },
          { text: "2 Business Emails", included: true, tag: "FREE" },
          { text: "High-Performance Hosting", included: true, tag: "FREE" },
          { text: "Third-Party API Sync", included: true, tag: "FREE" },
          { text: "6 Months Tech Support", included: true, tag: "FREE" },
          { text: "Automated Backups", included: true, tag: "FREE" },
          { text: "Performance Audit", included: true, tag: "FREE" },
          { text: "Mobile App Version", included: true, tag: "FREE" },
          { text: "Include source code", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "149,999+",
        currency: "PKR",
        popular: false,
        buttonText: "Consult Now",
        features: [
          { text: "Complete Digital Ecosystem", included: true, tag: "INC" },
          { text: "Microservices Architecture", included: true, tag: "INC" },
          { text: "Unlimited Business Emails", included: true, tag: "FREE" },
          { text: "Lifetime Server Migration", included: true, tag: "FREE" },
          { text: "Multi-Platform Support", included: true, tag: "FREE" },
          { text: "Dedicated Project Manager", included: true, tag: "FREE" },
          { text: "1 Year Maintenance", included: true, tag: "FREE" },
          { text: "Source Code Ownership", included: true, tag: "FREE" },
          { text: "Mobile App Version", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      }
    ],

    // You May Like This Section (4 Cards)
    similarServices: [
      {
        id: "management-systems",
        title: "Management Systems",
        description: "Custom portals to manage your internal business data.",
        icon: "layout-template",
        link: "/services/management-systems"
      },
      {
        id: "crm-erp",
        title: "CRM & ERP",
        description: "Scalable solutions for customer & resource management.",
        icon: "database",
        link: "/services/crm-erp"
      },
      {
        id: "pos-systems",
        title: "POS Systems",
        description: "Advanced Point of Sale software for retail & inventory.",
        icon: "shopping-cart",
        link: "/services/pos-systems"
      },
      {
        id: "saas-apps",
        title: "SaaS Apps",
        description: "Build and scale your own Software as a Service platform.",
        icon: "layers",
        link: "/services/saas-apps"
      }
    ]
  },
  //E-Com
  {
    id: "ecommerce-stores",
    tagline: "E-COMMERCE // ONLINE STORE",
    heroTitle: "Launch Your Online Store",
    heroDescription: "Start selling your products online with our high-converting, scalable E-commerce packages designed to maximize your digital sales.",
    pricingHeading: "Launch Your Online Store",
    pricingSubheading: "Start selling your products online with our powerful E-commerce packages.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter-store",
        name: "Starter Store",
        price: "15,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "E-commerce Store Design", included: true, tag: "INC" },
          { text: "Unlimited Products (During Dev)", included: true, tag: "INC" },
          { text: "Direct WhatsApp Ordering", included: true, tag: "INC" },
          { text: "1 Year Free Domain", included: true, tag: "FREE" },
          { text: "2 Months Free Hosting", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "1 Month Maintenance", included: true, tag: "FREE" },
          { text: "Online Payment Gateway", included: false },
          { text: "Advanced Data Analytics", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "standard-store",
        name: "Standard Store",
        price: "29,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "Advanced Store Design", included: true, tag: "INC" },
          { text: "Unlimited Products", included: true, tag: "INC" },
          { text: "Direct WhatsApp Ordering", included: true, tag: "INC" },
          { text: "1 Year Free Domain", included: true, tag: "FREE" },
          { text: "6 Months Free Hosting", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "6 Months Maintenance", included: true, tag: "FREE" },
          { text: "Advanced Data Analytics", included: false }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      },
      {
        id: "premium-business",
        name: "Premium Business",
        price: "39,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Custom Store Design", included: true, tag: "INC" },
          { text: "Advanced Data Analytics", included: true, tag: "INC" },
          { text: "Payment Gateway Integration", included: true, tag: "INC" },
          { text: "Adv. Inventory & Dashboard", included: true, tag: "INC" },
          { text: "1 Year Free Domain", included: true, tag: "FREE" },
          { text: "1 Year Free Premium Hosting", included: true, tag: "FREE" },
          { text: "WhatsApp & Email Alerts", included: true, tag: "FREE" },
          { text: "1 Year Free Maintenance", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact",
        discountUrl: "/game-discount"
      }
    ],

    // You May Like This Section (5 Cards)
    similarServices: [
      {
        id: "meta-ads",
        title: "Meta Ads",
        description: "Run highly targeted Facebook and Instagram ad campaigns to drive instant sales and traffic.",
        icon: "megaphone",
        link: "/services/meta-ads"
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Get professional product retouching, attractive promotional banners, and scroll-stopping ad creatives.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "app-development",
        title: "App Dev",
        description: "Turn your E-commerce store into a native iOS and Android app to increase customer loyalty.",
        icon: "smartphone",
        link: "/services/app-development"
      },
      {
        id: "ai-automation",
        title: "AI Automation",
        description: "Recover abandoned carts automatically via WhatsApp and handle customer queries 24/7 with AI bots.",
        icon: "bot",
        link: "/services/ai-automation"
      }
    ]
  },
  //ERP
  {
    id: "erp-systems",
    tagline: "SOFTWARE // ERP SYSTEMS",
    heroTitle: "Centralize Your Business Operations",
    heroDescription: "Scalable, secure, and centralized ERP software solutions designed to streamline business workflows, management, and resource allocation.",
    pricingHeading: "ERP System Packages",
    pricingSubheading: "Scalable, secure, and centralized software solutions for businesses of all sizes.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "core-engine",
        name: "Core Engine",
        price: "24,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "2 Core Modules (e.g. CRM & Inv)", included: true, tag: "INC" },
          { text: "Standard Admin Dashboard", included: true, tag: "INC" },
          { text: "Up to 10 Employee Accounts", included: true, tag: "INC" },
          { text: "2 Pages Screen", included: true, tag: "INC" },
          { text: "1 Month Tech Support", included: true, tag: "FREE" },
          { text: "1 Year domain", included: true, tag: "FREE" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "3 Days Delivery", included: true, tag: "FREE" },
          { text: "UI/UX Design", included: true, tag: "FREE" },
          { text: "Custom API Integrations", included: false },
          { text: "Payroll & Finance Logic", included: false },
          { text: "Dedicated Mobile App", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "corporate-suite",
        name: "Corporate Suite",
        price: "85,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "4 Core Modules (Dash,Inv,Sales,Report)", included: true, tag: "INC" },
          { text: "Custom Role-Based Access", included: true, tag: "INC" },
          { text: "Advanced Reporting & Charts", included: true, tag: "INC" },
          { text: "Upto 5 pages", included: true, tag: "INC" },
          { text: "1 Year domain", included: true, tag: "FREE" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "7 Days Delivery", included: true, tag: "FREE" },
          { text: "UI/UX Design", included: true, tag: "FREE" },
          { text: "Automated Backup System", included: true, tag: "FREE" },
          { text: "3 Months VIP Support", included: true, tag: "FREE" },
          { text: "Payment Gateway Integration", included: true, tag: "FREE" },
          { text: "Email/SMS Alerts Setup", included: true, tag: "FREE" },
          { text: "Dedicated Mobile App", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "enterprise-custom",
        name: "Enterprise Custom",
        price: "299,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Customize Modules", included: true, tag: "INC" },
          { text: "Complex Workflow Automation", included: true, tag: "INC" },
          { text: "Third-Party API Sync", included: true, tag: "INC" },
          { text: "Unlimited User Accounts", included: true, tag: "INC" },
          { text: "1 Year domain", included: true, tag: "FREE" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "13 Days Delivery", included: true, tag: "FREE" },
          { text: "UI/UX Design", included: true, tag: "FREE" },
          { text: "11 Months Enterprise Support", included: true, tag: "FREE" },
          { text: "Free White-labeling", included: true, tag: "FREE" },
          { text: "Priority Development Queue", included: true, tag: "FREE" },
          { text: "Dedicated Mobile App", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Complete Your Ecosystem Section (5 Cards)
    similarServices: [
      {
        id: "custom-software",
        title: "Custom Software Development",
        description: "Deploy your ERP on fast, secure, and scalable AWS or DigitalOcean cloud servers.",
        icon: "cloud",
        link: "/services/custom-software"
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Custom, intuitive dashboard designs that your employees will actually love using.",
        icon: "layout",
        link: "/services/ui-ux-design"
      },
      {
        id: "app-development",
        title: "App Development",
        description: "Give your team on-the-go access with a dedicated mobile app connected to your ERP.",
        icon: "smartphone",
        link: "/services/app-development"
      },
      {
        id: "web-development",
        title: "Web Development",
        description: "Connect your internal inventory and CRM directly to your public-facing website.",
        icon: "globe",
        link: "/services/web-development"
      },
      {
        id: "crm-systems",
        title: "CRM",
        description: "Monthly retainers for bug fixes, database optimizations, and ongoing feature updates.",
        icon: "shield-check",
        link: "/services/crm-systems"
      }
    ]
  },
  //Ghraphic Design
  {
    id: "graphic-design",
    tagline: "DESIGN // BRANDING & CREATIVES",
    heroTitle: "Elevate Your Brand Visuals",
    heroDescription: "Stand out with high-quality graphic design, branding, and visual content built to captivate your audience.",
    pricingHeading: "Design Packages",
    pricingSubheading: "Premium visual solutions for your brand's identity.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "visual-starter",
        name: "Visual Starter",
        price: "6,999",
        currency: "PKR",
        popular: false,
        buttonText: "Start Designing",
        features: [
          { text: "6 Social Media Posts", included: true, tag: "INC" },
          { text: "Basic Logo Design", included: true, tag: "FREE" },
          { text: "Vector Source Files", included: true, tag: "FREE" },
          { text: "2 Revision Rounds", included: true, tag: "INC" },
          { text: "High-Res Export", included: true, tag: "FREE" },
          { text: "Brand Style Guide", included: false },
          { text: "Print-Ready Stationary", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "brand-pro",
        name: "Brand Pro",
        price: "18,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Go Pro",
        features: [
          { text: "10 Social Media Posts", included: true, tag: "INC" },
          { text: "Premium Logo Concept", included: true, tag: "FREE" },
          { text: "Brand Style Guide", included: true, tag: "FREE" },
          { text: "Business Card Design", included: true, tag: "INC" },
          { text: "Unlimited Revisions", included: true, tag: "FREE" },
          { text: "Commercial Use License", included: true, tag: "FREE" },
          { text: "Website UI Design", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "agency-elite",
        name: "Agency Elite",
        price: "34,999",
        currency: "PKR",
        popular: false,
        buttonText: "Contact Us",
        features: [
          { text: "Full Monthly Graphics", included: true, tag: "INC" },
          { text: "3 Logo Variations", included: true, tag: "FREE" },
          { text: "Pitch Deck / Presentation", included: true, tag: "FREE" },
          { text: "Print & Digital Kit", included: true, tag: "FREE" },
          { text: "UI/UX Website Layout", included: true, tag: "FREE" },
          { text: "Priority Support", included: true, tag: "FREE" },
          { text: "Fast 24h Delivery", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // What Else You Might Need Section (4 Cards)
    similarServices: [
      {
        id: "web-development",
        title: "Web Development",
        description: "We turn your brand's new design into a high-performing, responsive website.",
        icon: "layout",
        link: "/services/web-development"
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Managing your social profiles and growing your audience with strategic content.",
        icon: "share-2",
        link: "/services/social-media-marketing"
      },
      {
        id: "meta-ads",
        title: "Meta Ads",
        description: "Targeted Facebook & Instagram ads to bring more sales and leads to your door.",
        icon: "megaphone",
        link: "/services/meta-ads"
      },
      {
        id: "video-editing",
        title: "Video Editing",
        description: "Professional video editing for Reels, YouTube, and Ads to keep your brand moving.",
        icon: "play-circle",
        link: "/services/video-editing"
      }
    ]
  },
  //Meta -ads
  {
    id: "meta-ads",
    tagline: "MARKETING // META ADS & LEADS",
    heroTitle: "Maximize ROAS With Precision Meta Ads",
    heroDescription: "Scale your revenue with targeted Facebook and Instagram ad campaigns engineered to bring high-intent buyers directly to your business.",
    pricingHeading: "Meta Ads Packages",
    pricingSubheading: "Choose a plan that fits your business goals and budget.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter-growth",
        name: "Starter Growth",
        price: "14,999",
        currency: "PKR/mo",
        popular: false,
        buttonText: "Start Campaign",
        features: [
          { text: "10-15 active Ad Campaigns", included: true, tag: "INC" },
          { text: "Basic Audience Research", included: true, tag: "FREE" },
          { text: "Ad Copywriting", included: true, tag: "FREE" },
          { text: "Weekly Performance Report", included: true, tag: "INC" },
          { text: "Pixel Setup", included: true, tag: "FREE" },
          { text: "Competitor Analysis", included: false },
          { text: "Sales Funnel Strategy", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "business-scale",
        name: "Business Scale",
        price: "24,999",
        currency: "PKR/mo",
        popular: true,
        popularBadge: "BEST ROI",
        buttonText: "Scale Now",
        features: [
          { text: "15-20 Active Ad Campaigns", included: true, tag: "INC" },
          { text: "Advanced Retargeting (LAL)", included: true, tag: "FREE" },
          { text: "Instagram Setup", included: true, tag: "FREE" },
          { text: "Competitor Ad Tracking", included: true, tag: "INC" },
          { text: "Facebook Account Setup", included: true, tag: "FREE" },
          { text: "Monthly Strategy Call", included: true, tag: "FREE" },
          { text: "Custom Video Production", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "agency-elite",
        name: "Agency Elite",
        price: "34,999",
        currency: "PKR/mo",
        popular: false,
        buttonText: "Contact Agency",
        features: [
          { text: "Unlimited Campaigns", included: true, tag: "INC" },
          { text: "Complete Sales Funnel", included: true, tag: "FREE" },
          { text: "Influencer Whitelisting", included: true, tag: "FREE" },
          { text: "High-ROAS Optimization", included: true, tag: "FREE" },
          { text: "Dedicated Account Manager", included: true, tag: "FREE" },
          { text: "24/7 Priority Support", included: true, tag: "FREE" },
          { text: "CRM Integration", included: true, tag: "FREE" },
          { text: "Facebook setup", included: true, tag: "FREE" },
          { text: "Instagram setup", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // What Else You Might Need Section (Auto-generated relevant cards)
    similarServices: [
      {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Eye-catching ad creatives and promotional banners that increase click-through rates.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "video-editing",
        title: "Video Editing",
        description: "High-converting video ads, Reels, and TikTok clips designed for maximum engagement.",
        icon: "play-circle",
        link: "/services/video-editing"
      },
      {
        id: "e-commerce",
        title: "E-Commerce Store",
        description: "High-converting online store to capture traffic and sales from your Meta Ads.",
        icon: "shopping-bag",
        link: "/services/ecommerce-stores"
      },
      {
        id: "crm-systems",
        title: "CRM Systems",
        description: "Capture and convert incoming ad leads automatically with a structured sales CRM.",
        icon: "database",
        link: "/services/crm-development"
      }
    ]
  },
  //Web Management-system
  {
    id: "management-systems",
    tagline: "SOFTWARE // WEB-BASED SYSTEMS",
    heroTitle: "Streamline Operations With Smart Web Portals",
    heroDescription: "Automate workflows, manage data securely, and scale your business with custom web-based management systems tailored to your needs.",
    pricingHeading: "Web-Based Management Systems",
    pricingSubheading: "Automate your business with our smart portals and get massive premium add-ons for free.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "core-system",
        name: "Core System",
        price: "19,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Custom Dashboard", included: true, tag: "INC" },
          { text: "Up to 2 User Roles (Admin/Staff)", included: true, tag: "INC" },
          { text: "48-Hours Delivery", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "Invoice/Bill Design Setup", included: true, tag: "FREE" },
          { text: "1 Month Maintenance", included: true, tag: "FREE" },
          { text: "Free Business Logo", included: true, tag: "FREE" },
          { text: "Free Business Mail", included: true, tag: "FREE" },
          { text: "Data Backup", included: false },
          { text: "PDF/Excel Reports Export", included: false },
          { text: "Automated Email/WhatsApp Alerts", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "advanced-portal",
        name: "Advanced Portal",
        price: "29,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "Advanced Dashboard", included: true, tag: "INC" },
          { text: "Up to 5 User Roles", included: true, tag: "INC" },
          { text: "PDF/Excel Reports Export", included: true, tag: "INC" },
          { text: "4-5 Days Delivery", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "Custom Invoice/Bill Design", included: true, tag: "FREE" },
          { text: "Free Business Logo", included: true, tag: "FREE" },
          { text: "3 Months Maintenance", included: true, tag: "FREE" },
          { text: "Free Business Mail", included: true, tag: "FREE" },
          { text: "Up to 500+ Management of Data", included: true, tag: "FREE" },
          { text: "Automated Email/WhatsApp Alerts", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "enterprise-system",
        name: "Enterprise",
        price: "44,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Full Scale System", included: true, tag: "INC" },
          { text: "Customize User Roles", included: true, tag: "INC" },
          { text: "Advanced Custom Analytics", included: true, tag: "INC" },
          { text: "1 week Delivery", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "Custom Invoice/Bill Design", included: true, tag: "FREE" },
          { text: "Free Premium Business Logo", included: true, tag: "FREE" },
          { text: "6 Months Maintenance", included: true, tag: "FREE" },
          { text: "Cloud Backup Security Setup", included: true, tag: "FREE" },
          { text: "Free Business Mail", included: true, tag: "FREE" },
          { text: "WhatsApp/Email Alerts Setup", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Our Core Tech Services Section (5 Cards)
    similarServices: [
      {
        id: "crm-systems",
        title: "CRM Systems",
        description: "Track leads, manage clients, and boost your sales with custom Customer Relationship Management.",
        icon: "users",
        link: "/services/crm-development"
      },
      {
        id: "pos-software",
        title: "POS Software",
        description: "Smart Point of Sale systems for retail and restaurants with easy billing and inventory.",
        icon: "shopping-cart",
        link: "/services/pos-systems"
      },
      {
        id: "custom-software",
        title: "Custom Software",
        description: "Tailor-made software development designed specifically for your unique business workflows.",
        icon: "code",
        link: "/services/custom-software"
      },
      {
        id: "erp-solutions",
        title: "ERP Solutions",
        description: "Enterprise Resource Planning to connect your HR, accounts, and supply chain in one place.",
        icon: "layers",
        link: "/services/erp-systems"
      },
      {
        id: "data-analysis",
        title: "Data Analysis",
        description: "Deep business intelligence, smart dashboards, and reporting to make data-driven decisions.",
        icon: "pie-chart",
        link: "/services/data-analytics"
      }
    ]
  },
  // Portflio
  {
    id: "portfolio-websites",
    tagline: "WEB DEVELOPMENT // PORTFOLIO WEBSITES",
    heroTitle: "Showcase Your Work With A Stunning Portfolio",
    heroDescription: "High-performing, visually engaging portfolio websites designed to help creatives, agencies, and professionals display their best work and win more clients.",
    pricingHeading: "Choose Your Plan",
    pricingSubheading: "Perfectly crafted portfolio website packages built to elevate your online presence.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter-portfolio",
        name: "Starter",
        price: "9,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "5 Pages Design", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "3 Month Maintenance", included: true, tag: "FREE" },
          { text: "Social Media Integration", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "Mobile Responsive", included: true, tag: "FREE" },
          { text: "AI Integration", included: false },
          { text: "Business Logo", included: false },
          { text: "Contact Form", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "business-portfolio",
        name: "Business",
        price: "14,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "Up to 5 Pages", included: true, tag: "INC" },
          { text: "2 Year Hosting", included: true, tag: "FREE" },
          { text: "9 Month Maintenance", included: true, tag: "FREE" },
          { text: "Social Media Integration", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "Contact Form", included: true, tag: "FREE" },
          { text: "Business Logo", included: true, tag: "FREE" },
          { text: "Mobile Responsive", included: true, tag: "FREE" },
          { text: "AI Integration", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "enterprise-portfolio",
        name: "Enterprise",
        price: "24,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Up to 10 Pages", included: true, tag: "INC" },
          { text: "3 Year Hosting", included: true, tag: "FREE" },
          { text: "12 Month Maintenance", included: true, tag: "FREE" },
          { text: "AI Integration", included: true, tag: "FREE" },
          { text: "Business Logo", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "Social Media Integration", included: true, tag: "FREE" },
          { text: "Contact Form", included: true, tag: "FREE" },
          { text: "Mobile Responsive", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Target Audience / Who Is This For Section (5 Cards)
    similarServices: [
      {
        id: "graphic-designers",
        title: "Graphic Designers",
        description: "Showcase your brand identities and social media designs.",
        icon: "palette",
        link: "/services/graphic-design"
      },
      {
        id: "video-editors",
        title: "Video Editors",
        description: "Display your reels and cinematic projects in one place.",
        icon: "play-circle",
        link: "/services/video-editing"
      }
    ]
  },
  // Presentation
  {
    id: "ppt-pitch-decks",
    tagline: "DESIGN // PRESENTATION & SLIDES",
    heroTitle: "Professional Slide Design & Pitch Decks",
    heroDescription: "Expert presentation designs that capture attention, communicate complex ideas clearly, and deliver your message with maximum visual impact.",
    pricingHeading: "Professional Slide Design",
    pricingSubheading: "Expert presentation designs that capture attention and deliver your message with impact.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "basic-pitch",
        name: "Basic Pitch",
        price: "2,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Up to 10 Slides", included: true, tag: "INC" },
          { text: "Custom Brand Design", included: true, tag: "INC" },
          { text: "PDF Export Format", included: true, tag: "FREE" },
          { text: "1 Design Revision", included: true, tag: "FREE" },
          { text: "Stock Image Research", included: true, tag: "FREE" },
          { text: "Editable Source File (PPTX)", included: false },
          { text: "Custom Infographics", included: false },
          { text: "Slide Animations", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "pro-business-pitch",
        name: "Pro Business",
        price: "4,999",
        currency: "PKR",
        popular: true,
        popularBadge: "RECOMMENDED",
        buttonText: "Buy Now",
        features: [
          { text: "Up to 25 Slides", included: true, tag: "INC" },
          { text: "Editable Source File (PPTX)", included: true, tag: "INC" },
          { text: "Custom Charts & Graphs", included: true, tag: "INC" },
          { text: "PDF & PPTX Formats", included: true, tag: "FREE" },
          { text: "3 Design Revisions", included: true, tag: "FREE" },
          { text: "Visual Storytelling Setup", included: true, tag: "FREE" },
          { text: "Custom Icon Set", included: true, tag: "FREE" },
          { text: "Slide Animations & Transitions", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "executive-suite",
        name: "Executive Suite",
        price: "5,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Up to 50 Slides", included: true, tag: "INC" },
          { text: "Source File & Master Slides", included: true, tag: "INC" },
          { text: "Custom Infographics", included: true, tag: "INC" },
          { text: "Professional Animations", included: true, tag: "INC" },
          { text: "Unlimited Revisions", included: true, tag: "FREE" },
          { text: "Video Export (MP4)", included: true, tag: "FREE" },
          { text: "Priority 24h Delivery", included: true, tag: "FREE" },
          { text: "Data Visualization Design", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Enhance Your Pitch / Complementary Services Section (5 Cards)
    similarServices: [
      {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Get matching business cards, company profiles, and brochures to hand out after your pitch.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "video-editing",
        title: "Video Editor",
        description: "Convert your pitch into a high-converting explainer video or add motion graphics to your slides.",
        icon: "video",
        link: "/services/video-editing"
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Pitching a digital product? We create stunning app and web mockups to showcase your vision.",
        icon: "layout",
        link: "/services/ui-ux-design"
      },
      {
        id: "portfolio-website",
        title: "Portfolio Website",
        description: "Direct your audience to a premium portfolio website that builds trust and closes the deal.",
        icon: "globe",
        link: "/services/portfolio-websites"
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Back up your claims with deep market research and solid data visualization dashboards.",
        icon: "pie-chart",
        link: "/services/data-analytics"
      }
    ]
  },
  // SAAS
  {
    id: "saas-application",
    tagline: "SOFTWARE // SAAS DEVELOPMENT",
    heroTitle: "Scalable SaaS Platform Development",
    heroDescription: "Build powerful, multi-tenant cloud applications with robust architectures, seamless subscription billing, and enterprise-grade security.",
    pricingHeading: "SaaS Pricing Plans",
    pricingSubheading: "Choose the right plan to launch and scale your Software-as-a-Service business.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "gold-saas",
        name: "Gold",
        price: "23,999",
        currency: "PKR",
        popular: false,
        buttonText: "Start Now",
        features: [
          { text: "Single Tenant Arch.", included: true, tag: "INC" },
          { text: "User Auth System", included: true, tag: "FREE" },
          { text: "Cloud Deployment", included: true, tag: "FREE" },
          { text: "1 Business Email", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      },
      {
        id: "saas-pro",
        name: "SaaS Pro",
        price: "89,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Get Started",
        features: [
          { text: "Multi-Tenant System", included: true, tag: "INC" },
          { text: "Stripe Integration", included: true, tag: "INC" },
          { text: "Admin Dashboard", included: true, tag: "FREE" },
          { text: "Subscription Logic", included: true, tag: "FREE" },
          { text: "3 Months Support", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      },
      {
        id: "enterprise-saas",
        name: "Enterprise",
        price: "209,999+",
        currency: "PKR",
        popular: false,
        buttonText: "Contact Us",
        features: [
          { text: "Microservices Setup", included: true, tag: "INC" },
          { text: "Unlimited Users", included: true, tag: "INC" },
          { text: "Dedicated Server", included: true, tag: "FREE" },
          { text: "Full Source Code", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // SaaS Ecosystem Add-ons / Complementary Services Section (4 Cards)
    similarServices: [
      {
        id: "cloud-devops",
        title: "Cloud DevOps",
        description: "AWS aur Azure par auto-scaling infrastructure setup karein.",
        icon: "cloud-cog",
        link: "/services/devops-engineering"
      },
       
      {
        id: "api-integration",
        title: "API Integration",
        description: "Apne SaaS ko 3rd party tools ke sath connect karein.",
        icon: "api",
        link: "/contact"
      },
      {
        id: "ai-features",
        title: "AI Features",
        description: "Smart automation aur AI modules apne software mein add karein.",
        icon: "sparkles",
        link: "/services/ai-automation"
      }
    ]
  },
  // SMM
  {
    id: "social-media-marketing",
    tagline: "MARKETING // SOCIAL MEDIA MANAGEMENT",
    heroTitle: "Social Media Marketing Plans",
    heroDescription: "Grow your followers, build your brand, and drive engagement with our tailored social media management and marketing packages.",
    pricingHeading: "Social Media Marketing Plans",
    pricingSubheading: "Grow your followers, build your brand, and drive engagement with our SMM packages.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter-social",
        name: "Starter Social",
        price: "14,999",
        currency: "PKR",
        billingCycle: "/mo",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "12 Custom Post Designs", included: true, tag: "INC" },
          { text: "2 Platforms (FB & Insta)", included: true, tag: "INC" },
          { text: "Basic Content Writing", included: true, tag: "INC" },
          { text: "FB/Insta Page Setup", included: true, tag: "FREE" },
          { text: "Targeted Hashtag Strategy", included: true, tag: "FREE" },
          { text: "Monthly Growth Report", included: true, tag: "FREE" },
          { text: "Video Reels / Shorts", included: false },
          { text: "Meta Ads Management", included: false },
          { text: "Competitor Analysis", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "brand-builder",
        name: "Brand Builder",
        price: "24,999",
        currency: "PKR",
        billingCycle: "/mo",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "20 Custom Post Designs", included: true, tag: "INC" },
          { text: "4 Video Reels / Shorts", included: true, tag: "INC" },
          { text: "3 Platforms (FB, IG, LinkedIn)", included: true, tag: "INC" },
          { text: "Profile SEO Optimization", included: true, tag: "FREE" },
          { text: "Competitor Analysis", included: true, tag: "FREE" },
          { text: "Story Highlights Cover Setup", included: true, tag: "FREE" },
          { text: "Bi-Weekly Growth Report", included: true, tag: "FREE" },
          { text: "Meta Ads Management", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "viral-growth",
        name: "Viral Growth",
        price: "39,999",
        currency: "PKR",
        billingCycle: "/mo",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "30 Post Designs (Daily)", included: true, tag: "INC" },
          { text: "8 Video Reels / Shorts", included: true, tag: "INC" },
          { text: "Meta Ads Management", included: true, tag: "INC" },
          { text: "All Major Platforms", included: true, tag: "INC" },
          { text: "Advanced Community Mgt.", included: true, tag: "FREE" },
          { text: "Priority DM & Comment Replies", included: true, tag: "FREE" },
          { text: "Custom Ad Creatives", included: true, tag: "FREE" },
          { text: "Weekly Strategy Calls", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Scale Your Social Impact / Complementary Services Section (5 Cards)
    similarServices: [
      {
        id: "video-editing",
        title: "Video Editing",
        description: "Viral content needs viral editing. Get professional Reels, TikToks, and YouTube Shorts.",
        icon: "video",
        link: "/services/video-editing"
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Upgrade your brand identity with custom logos, special campaign banners, and high-end graphics.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "meta-ads",
        title: "Meta Ads",
        description: "Combine organic growth with paid Facebook and Instagram ads to multiply your reach and sales.",
        icon: "megaphone",
        link: "/services/meta-ads"
      },
      {
        id: "ai-automation",
        title: "AI Automation",
        description: "Never miss a lead. Automate your DMs and comments with intelligent AI chatbots 24/7.",
        icon: "bot",
        link: "/services/ai-solutions"
      },
      {
        id: "web-development",
        title: "Web Development",
        description: "Direct your social media followers to a high-converting, professional website or landing page.",
        icon: "globe",
        link: "/services/web-development"
      }
    ]
  },
  // UI/UX
  {
    id: "ui-ux-design",
    tagline: "DESIGN // UI/UX & PRODUCT DESIGN",
    heroTitle: "UI/UX Design Plans",
    heroDescription: "Create intuitive, user-centered interfaces and engaging digital experiences with our professional UI/UX design solutions.",
    pricingHeading: "UI/UX Design Plans",
    pricingSubheading: "Choose the right plan to bring your product ideas to life with seamless interfaces and high-fidelity prototypes.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "basic-ui",
        name: "Basic UI",
        price: "9,999",
        currency: "PKR",
        popular: false,
        buttonText: "Order Design",
        features: [
          { text: "5 Pages UI Design", included: true, tag: "INC" },
          { text: "Basic Wireframes", included: true, tag: "FREE" },
          { text: "Clickable Prototype", included: true, tag: "FREE" },
          { text: "Mobile Responsive", included: true, tag: "INC" },
          { text: "2 Revision Rounds", included: true, tag: "FREE" },
          { text: "Complete Design System", included: false },
          { text: "Brand Identity Kit", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "standard-ux",
        name: "Standard UX",
        price: "19,999",
        currency: "PKR",
        popular: true,
        popularBadge: "BEST VALUE",
        buttonText: "Get Started",
        features: [
          { text: "10 Pages UI Design", included: true, tag: "INC" },
          { text: "User Flow & Wireframes", included: true, tag: "FREE" },
          { text: "Advanced Prototyping", included: true, tag: "FREE" },
          { text: "Design System (Basic)", included: true, tag: "INC" },
          { text: "Source File (Figma)", included: true, tag: "FREE" },
          { text: "5 Revision Rounds", included: true, tag: "FREE" },
          { text: "Complete Branding", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "premium-brand",
        name: "Premium Brand",
        price: "34,999",
        currency: "PKR",
        popular: false,
        buttonText: "Full Package",
        features: [
          { text: "20+ Pages UI/UX", included: true, tag: "INC" },
          { text: "Complete Design System", included: true, tag: "FREE" },
          { text: "Full Brand Identity", included: true, tag: "FREE" },
          { text: "Logo & Iconography", included: true, tag: "FREE" },
          { text: "High-Fidelity Prototype", included: true, tag: "FREE" },
          { text: "Unlimited Revisions", included: true, tag: "FREE" },
          { text: "Developer Handoff", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Extra Design Services / Complementary Services Section (4 Cards)
     similarServices: [
      {
        id: "ui-ux",
        title: "UI/UX",
        description: "Get Your website's UI first. then start development.",
        icon: "bar-chart-2",
        link: "/services/ui-ux-design"
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Run targeted ads and manage your social profiles to get more sales.",
        icon: "megaphone",
        link: "/services/social-media-marketing"
      },
      {
        id: "logo-branding",
        title: "Logo & Branding",
        description: "Stand out with a professional logo, business cards, and brand identity.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "custom-web-apps",
        title: "Custom Web Apps",
        description: "Upgrade to complex E-commerce stores or custom management portals.",
        icon: "layout",
        link: "/services/saas-application"
      }
    ]
  },
  // Video-Editing
  {
    id: "video-editing",
    tagline: "MEDIA // VIDEO EDITING & POST-PRODUCTION",
    heroTitle: "Editing Packages",
    heroDescription: "Professional post-production plans for creators and brands.",
    pricingHeading: "Editing Packages",
    pricingSubheading: "Professional post-production plans for creators and brands.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "social-starter",
        name: "Social Starter",
        price: "4,999",
        currency: "PKR",
        popular: false,
        buttonText: "Order Now",
        features: [
          { text: "Up to 1 Minute Video", included: true, tag: "INC" },
          { text: "Basic Color Correction", included: true, tag: "FREE" },
          { text: "Royalty Free Music", included: true, tag: "FREE" },
          { text: "1 Revision Round", included: true, tag: "INC" },
          { text: "Subtitles (Manual)", included: true, tag: "FREE" },
          { text: "4K Export", included: true, tag: "FREE" },
          { text: "Motion Graphics", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "content-pro",
        name: "Content Pro",
        price: "9,999",
        currency: "PKR",
        popular: true,
        popularBadge: "BEST SELLER",
        buttonText: "Get Pro Edit",
        features: [
          { text: "Up to 10 Minute Video", included: true, tag: "INC" },
          { text: "Advanced Color Grading", included: true, tag: "FREE" },
          { text: "Sound Design & Mixing", included: true, tag: "FREE" },
          { text: "Dynamic Motion Text", included: true, tag: "INC" },
          { text: "3 Revision Rounds", included: true, tag: "FREE" },
          { text: "4K High-Bitrate Export", included: true, tag: "FREE" },
          { text: "Cinematic VFX", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "cinematic-elite",
        name: "Cinematic Elite",
        price: "34,999+",
        currency: "PKR",
        popular: false,
        buttonText: "Elite Project",
        features: [
          { text: "Unlimited Duration", included: true, tag: "INC" },
          { text: "Full Cinematic VFX", included: true, tag: "FREE" },
          { text: "Multi-Cam Editing", included: true, tag: "FREE" },
          { text: "Premium Transitions", included: true, tag: "FREE" },
          { text: "Unlimited Revisions", included: true, tag: "FREE" },
          { text: "Source File Included", included: true, tag: "FREE" },
          { text: "24h Express Delivery", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Add-on Services / Complementary Services Section (4 Cards)
    similarServices: [
      {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Click-worthy thumbnails, channel art, and custom overlays to make your videos pop.",
        icon: "palette",
        link: "/services/graphic-design"
      },
      {
        id: "meta-ads",
        title: "Meta Ads",
        description: "Promote your video content on FB & Instagram to reach thousands of targeted viewers.",
        icon: "megaphone",
        link: "/services/meta-ads"
      },
      {
        id: "portfolio-design",
        title: "Portfolio Design",
        description: "A professional website to showcase your best video projects and attract high-paying clients.",
        icon: "layout",
        link: "/services/portfolio-websites"
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Complete management of your social profiles to grow your personal brand and engagement.",
        icon: "share-2",
        link: "/services/social-media-marketing"
      }
    ]
  },
  // web Dev
  {
    id: "web-development",
    tagline: "DEVELOPMENT // WEB DEVELOPMENT & DESIGN",
    heroTitle: "Web Development Plans",
    heroDescription: "Build fast, modern, and high-converting websites tailored to your business needs with complete technical setup.",
    pricingHeading: "Choose Your Plan",
    pricingSubheading: "Select the web development package that best fits your business goals and growth.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "starter-web",
        name: "Starter",
        price: "14,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "5 Pages", included: true, tag: "INC" },
          { text: "Social Media Integration", included: true, tag: "INC" },
          { text: "24-Hour Delivery", included: true, tag: "INC" },
          { text: "2 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "1 Month Maintenance", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "Google Search Console Setup", included: true, tag: "FREE" },
          { text: "AI Integration", included: false },
          { text: "Business Logo", included: false },
          { text: "Contact Form", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "business-web",
        name: "Business",
        price: "27,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "10 Pages", included: true, tag: "INC" },
          { text: "Social Media Integration", included: true, tag: "INC" },
          { text: "3 Days Delivery", included: true, tag: "INC" },
          { text: "1 Year Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "3 Month Maintenance", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "AI Integration (1 Year)", included: true, tag: "FREE" },
          { text: "Business Logo", included: true, tag: "FREE" },
          { text: "Contact Form (3 Year)", included: true, tag: "FREE" },
          { text: "Google Search Console Setup", included: true, tag: "FREE" },
          { text: "Google Analytics Setup", included: true, tag: "FREE" },
          { text: "Site Map Setup", included: false },
          { text: "SEO", included: false },
          { text: "Performance Test", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "enterprise-web",
        name: "Enterprise",
        price: "44,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "15+ Pages", included: true, tag: "INC" },
          { text: "Social Media Integration", included: true, tag: "INC" },
          { text: "Payment Integration", included: true, tag: "INC" },
          { text: "5-7 Days Delivery", included: true, tag: "INC" },
          { text: "1 Hosting", included: true, tag: "FREE" },
          { text: "1 Year Domain", included: true, tag: "FREE" },
          { text: "9 Month Maintenance", included: true, tag: "FREE" },
          { text: "WhatsApp Integration", included: true, tag: "FREE" },
          { text: "AI Integration (5 Year)", included: true, tag: "FREE" },
          { text: "Business Logo", included: true, tag: "FREE" },
          { text: "Contact Form", included: true, tag: "FREE" },
          { text: "Google Search Console Setup", included: true, tag: "FREE" },
          { text: "Google Analytics Setup", included: true, tag: "FREE" },
          { text: "Site Map Setup", included: true, tag: "FREE" },
          { text: "SEO", included: true, tag: "FREE" },
          { text: "Performance Test", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // What Else You Might Need / Complementary Services Section (4 Cards)
    similarServices: [
      {
        id: "ui-ux",
        title: "UI/UX",
        description: "Get Your website's UI first. then start development.",
        icon: "bar-chart-2",
        link: "/services/ui-ux-design"
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Run targeted ads and manage your social profiles to get more sales.",
        icon: "megaphone",
        link: "/services/social-media-marketing"
      },
      {
        id: "logo-branding",
        title: "Logo & Branding",
        description: "Stand out with a professional logo, business cards, and brand identity.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "custom-web-apps",
        title: "Custom Web Apps",
        description: "Upgrade to complex E-commerce stores or custom management portals.",
        icon: "layout",
        link: "/services/saas-application"
      }
    ]
  },
  // WordPress
  {
    id: "wordpress-architecture",
    tagline: "DEVELOPMENT // WORDPRESS & E-COMMERCE",
    heroTitle: "WordPress Packages",
    heroDescription: "From simple blogs to powerful WooCommerce stores, pick the right plan for your business.",
    pricingHeading: "WordPress Packages",
    pricingSubheading: "From simple blogs to powerful WooCommerce stores, pick the right plan for your business.",
    
    // Pricing Plans (3 Cards)
    plans: [
      {
        id: "landing-page-wp",
        name: "Landing Page",
        price: "13,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Up to 3 Pages Design", included: true, tag: "INC" },
          { text: "Mobile Responsive UI", included: true, tag: "INC" },
          { text: "Contact Form & WhatsApp", included: true, tag: "INC" },
          { text: "1 Year Free Domain", included: true, tag: "FREE" },
          { text: "1 month Maintenance", included: true, tag: "FREE" },
          { text: "Basic Speed Optimization", included: true, tag: "FREE" },
          { text: "WooCommerce / E-com", included: false },
          { text: "Custom Post Types", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "business-pro-wp",
        name: "Business Pro",
        price: "49,999",
        currency: "PKR",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Buy Now",
        features: [
          { text: "Up to 10 Pages Custom Design", included: true, tag: "INC" },
          { text: "Premium Theme Setup", included: true, tag: "INC" },
          { text: "Advanced Animations", included: true, tag: "INC" },
          { text: "1 Year Free Domain", included: true, tag: "FREE" },
          { text: "3 Months Free Hosting", included: true, tag: "FREE" },
          { text: "On-Page SEO Setup", included: true, tag: "FREE" },
          { text: "3 Month Maintenance", included: true, tag: "FREE" },
          { text: "Payment Gateway Setup", included: false }
        ],
        buyUrl: "/contact"
      },
      {
        id: "woocommerce-elite",
        name: "WooCommerce Elite",
        price: "89,999",
        currency: "PKR",
        popular: false,
        buttonText: "Buy Now",
        features: [
          { text: "Full E-Commerce Setup", included: true, tag: "INC" },
          { text: "Unlimited Products Logic", included: true, tag: "INC" },
          { text: "Payment Gateway (Stripe/PayFast)", included: true, tag: "INC" },
          { text: "Custom Cart & Checkout", included: true, tag: "INC" },
          { text: "1 Year Premium Hosting", included: true, tag: "FREE" },
          { text: "Advanced Security Setup", included: true, tag: "FREE" },
          { text: "Abandoned Cart Recovery", included: true, tag: "FREE" },
          { text: "6 Months Free Maintenance", included: true, tag: "FREE" }
        ],
        buyUrl: "/contact"
      }
    ],

    // Supercharge Your WP Site / Complementary Services Section (5 Cards)
    similarServices: [
      
      {
        id: "web-development",
        title: "Web Development",
        description: "We develop websites for your Business, also forms and Blogs.",
        icon: "file-text",
        link: "/services/web-development"
      },
      {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Custom logos, banners, and vector illustrations that make your website pop.",
        icon: "pen-tool",
        link: "/services/graphic-design"
      },
      {
        id: "app-development",
        title: "App Development",
        description: "Convert your WordPress or WooCommerce site into a fully native mobile app.",
        icon: "smartphone",
        link: "/services/app-development"
      },
      {
        id: "crm-maintenance",
        title: "CRM",
        description: "Monthly backups, plugin updates, security checks, and speed optimization.",
        icon: "server",
        link: "/services/crm-development"
      }
    ]
  },
  //Devops
  {
    id: "devops-engineering",
    tagline: "CLOUD & INFRASTRUCTURE",
    heroTitle: "DevOps & Cloud Engineering",
    heroDescription: "Streamline your development workflows, automate CI/CD pipelines, and scale your cloud infrastructure with enterprise-grade security.",
    pricingHeading: "DevOps & Cloud Plans",
    pricingSubheading: "Scalable cloud infrastructure & automation solutions tailored for your business.",
    plans: [
      {
        id: "devops-starter",
        name: "Cloud Setup",
        price: "₨ 85,000",
        currency: "/project",
        popular: false,
        buttonText: "Get Started",
        buyUrl: "/contact?service=devops-starter",
        features: [
          { text: "AWS/GCP Single Server Setup", included: true, tag: "STANDARD" },
          { text: "Basic CI/CD Pipeline Setup", included: true },
          { text: "SSL & Security Hardening", included: true, tag: "FREE" },
          { text: "Docker Containerization", included: true },
          { text: "24/7 Infrastructure Monitoring", included: false }
        ]
      },
      {
        id: "devops-pro",
        name: "Automation Pro",
        price: "₨ 220,000",
        currency: "/project",
        popular: true,
        popularBadge: "MOST POPULAR",
        buttonText: "Start DevOps Pro",
        buyUrl: "/contact?service=devops-pro",
        features: [
          { text: "Kubernetes Cluster Orchestration", included: true, tag: "FREE" },
          { text: "Multi-Environment CI/CD (Dev/Staging/Prod)", included: true },
          { text: "Terraform Infrastructure as Code (IaC)", included: true },
          { text: "Automated Backup & Disaster Recovery", included: true },
          { text: "24/7 Monitoring & Alerting Setup", included: true, tag: "FREE" }
        ]
      },
      {
        id: "devops-enterprise",
        name: "Enterprise Cloud",
        price: "₨ 450,000",
        currency: "/month",
        popular: false,
        buttonText: "Contact Sales",
        buyUrl: "/contact?service=devops-enterprise",
        features: [
          { text: "Multi-Cloud Architecture (AWS + Azure)", included: true },
          { text: "Dedicated Cloud Architect Team", included: true, tag: "FREE" },
          { text: "Zero-Downtime Migration & Scaling", included: true },
          { text: "SOC2 & Compliance Audits", included: true },
          { text: "1-Hour Incident Response SLA", included: true, tag: "FREE" }
        ]
      }
    ],
    /* Sirf Hamari Apni Existing Services linked hain */
    similarServices: [
      {
        id: "web-development",
        title: "Web Development",
        description: "Custom high-performance web applications built with modern frameworks and scalable backend technology.",
        icon: "Code",
        duration: "2-4 Wks",
        team: "3 Devs",
        level: "Enterprise",
        tags: ["React", "Node.js", "+5"],
        buttonText: "Start Project",
        link: "/services/web-development"
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        description: "Transform raw data into business intelligence with automated data pipelines and real-time KPI dashboards.",
        icon: "BarChart3",
        duration: "3-5 Wks",
        team: "2 Devs",
        level: "Advanced",
        tags: ["Python", "SQL", "+3"],
        buttonText: "Start Project",
        link: "/services/data-analytics"
      }
    ]
  },
  // Data-analyics
  {
    id: "data-analytics",
    tagline: "BUSINESS INTELLIGENCE & DATA",
    heroTitle: "Data Analytics & Engineering",
    heroDescription: "Transform raw data into actionable business intelligence with custom dashboards, automated data pipelines, and predictive analysis.",
    pricingHeading: "Data & BI Solutions",
    pricingSubheading: "Turn complex data into smart business decisions with clear pricing options.",
    plans: [
      {
        id: "analytics-starter",
        name: "BI Dashboard",
        price: "₨ 65,000",
        currency: "/project",
        popular: false,
        buttonText: "Build Dashboard",
        buyUrl: "/contact?service=analytics-starter",
        features: [
          { text: "Custom PowerBI / Tableau Dashboard", included: true, tag: "STANDARD" },
          { text: "Up to 3 Data Source Connectors", included: true },
          { text: "Automated Daily Data Refresh", included: true, tag: "FREE" },
          { text: "Basic KPI Tracking Setup", included: true },
          { text: "Real-time Streaming Analytics", included: false }
        ]
      },
      {
        id: "analytics-pro",
        name: "Data Pipeline Pro",
        price: "₨ 180,000",
        currency: "/project",
        popular: true,
        popularBadge: "RECOMMENDED",
        buttonText: "Start Analytics Pro",
        buyUrl: "/contact?service=analytics-pro",
        features: [
          { text: "ETL Data Warehouse Setup", included: true, tag: "FREE" },
          { text: "Unlimited Data Source Integrations", included: true },
          { text: "Real-time Analytics & Alerting", included: true },
          { text: "Executive Level Interactive BI Dashboards", included: true },
          { text: "Weekly Data Insights & Reporting", included: true, tag: "FREE" }
        ]
      },
      {
        id: "analytics-enterprise",
        name: "AI & Predictive",
        price: "₨ 380,000",
        currency: "/month",
        popular: false,
        buttonText: "Schedule Call",
        buyUrl: "/contact?service=analytics-enterprise",
        features: [
          { text: "Custom Machine Learning Models", included: true },
          { text: "Predictive Sales & Churn Forecasting", included: true, tag: "FREE" },
          { text: "Enterprise Big Data Infrastructure", included: true },
          { text: "Dedicated Data Scientist & BI Lead", included: true },
          { text: "Custom API & Warehouse Architecture", included: true, tag: "FREE" }
        ]
      }
    ],
    /* Sirf Hamari Apni Existing Services linked hain */
    similarServices: [
      {
        id: "wordpress-architecture",
        title: "WordPress Architecture",
        description: "Enterprise WordPress & WooCommerce solutions optimized for high speed, security, and large traffic.",
        icon: "Layout",
        duration: "1-3 Wks",
        team: "2 Devs",
        level: "Standard",
        tags: ["PHP", "WooCommerce", "+4"],
        buttonText: "Start Project",
        link: "/services/wordpress-architecture"
      },
      {
        id: "devops-engineering",
        title: "DevOps Engineering",
        description: "Automate CI/CD pipelines, containerize applications, and secure cloud infrastructure on AWS & GCP.",
        icon: "Server",
        duration: "2-4 Wks",
        team: "3 Devs",
        level: "Enterprise",
        tags: ["Docker", "AWS", "+4"],
        buttonText: "Start Project",
        link: "/services/devops-engineering"
      }
    ]
  }
];