import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const mockData = {
  skills: [
    "React & Vite",
    "TailwindCSS",
    "JavaScript/TypeScript", 
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Data Analytics",
    "AI & GenAI",
    "Power BI",
    "Git & GitHub",
    "WordPress",
    "Bootstrap",
    "C/C++",
    "Java",
    "DSA"
  ],

  experience: [
    {
      title: "Software Engineer Intern",
      company: "Tech Company",
      period: "2025",
      description: "Contributed to building frontend components and integrating REST APIs for a cloud-based platform. Assisted in optimizing page load times and improving user interface consistency. Worked with React, TypeScript, and modern development practices.",
      technologies: ["React", "TypeScript", "REST APIs", "Performance Optimization", "UI/UX"]
    },
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      period: "2024–2025",
      description: "Designed and developed responsive websites for small businesses and personal brands, focusing on performance and SEO. Delivered end-to-end solutions including UI design, deployment, and hosting. Achieved 90+ PageSpeed scores across all projects.",
      technologies: ["React", "TailwindCSS", "WordPress", "SEO", "Performance Optimization", "Hosting"]
    }
  ],

  projects: [
    {
      title: "Personal Portfolio",
      description: "A modern developer portfolio built with React, Vite, and TailwindCSS. Fully responsive with smooth animations and optimized performance (LCP < 2s).",
      technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "Performance"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Commerce Web App",
      description: "Full-stack e-commerce platform with secure Stripe payment integration, inventory management, and intuitive admin dashboard. Handled 2,000+ test transactions.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Admin Dashboard"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive Power BI dashboard for business intelligence with real-time data visualization and automated reporting capabilities.",
      technologies: ["Power BI", "Python", "Data Analysis", "SQL", "Visualization"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "AI Chat Application",
      description: "GenAI-powered chat application with natural language processing capabilities and real-time conversation management.",
      technologies: ["React", "GenAI", "NLP", "Real-time", "Chat Interface"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "WordPress Business Site",
      description: "Custom WordPress theme development for business websites with SEO optimization and mobile-first design approach.",
      technologies: ["WordPress", "PHP", "SEO", "Mobile-First", "Custom Themes"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool for visualizing data structures and algorithms, helping students understand complex computational concepts.",
      technologies: ["JavaScript", "D3.js", "Algorithms", "Data Structures", "Education"],
      demoLink: "#",
      githubLink: "#"
    }
  ],

  certificates: [
    {
      name: "Tata Micro Internship",
      issuer: "Tata Consultancy Services",
      year: "2024",
      description: "Data Analyst with GenAI - Completed comprehensive training in data analysis techniques, machine learning, and generative AI applications in business contexts."
    },
    {
      name: "Google Full Stack Development",
      issuer: "Google",
      year: "2024", 
      description: "Full Stack Web Development - Mastered modern web development stack including frontend frameworks, backend services, and cloud deployment."
    },
    {
      name: "Data Structure and Algorithm",
      issuer: "Codio",
      year: "2024",
      description: "Advanced DSA concepts - Comprehensive understanding of algorithms, data structures, time complexity, and problem-solving techniques."
    },
    {
      name: "MasterClass of GenAI",
      issuer: "Outskill",
      year: "2024",
      description: "Generative AI Mastery - Deep dive into AI models, prompt engineering, and practical applications of generative artificial intelligence."
    },
    {
      name: "Soft Communication Skills",
      issuer: "GeeksforGeeks",
      year: "2024",
      description: "Professional Communication - Enhanced interpersonal skills, presentation abilities, and effective workplace communication strategies."
    }
  ],

  dashboards: [
    {
      title: "Sales Analytics Dashboard",
      description: "Comprehensive sales performance tracking with real-time KPIs, trend analysis, and forecasting capabilities. Features interactive visualizations and automated reporting.",
      metrics: ["Revenue Tracking", "Customer Analytics", "Performance KPIs", "Trend Analysis"]
    },
    {
      title: "Business Intelligence Suite",
      description: "Multi-dimensional business analytics platform with advanced data modeling, predictive analytics, and executive-level reporting dashboards.",
      metrics: ["Predictive Analytics", "Executive Reports", "Data Modeling", "Business Insights"]
    }
  ],

  contact: [
    {
      icon: Mail,
      label: "Email",
      value: "vikash.malviya2495@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9929691872"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sojat City, Rajasthan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vikashmalviya"
    }
  ]
};