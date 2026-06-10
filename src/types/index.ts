export interface Project {
  id: string;
  title: string;
  description: { es: string; en: string };
  tech: string[];
  image?: string;
  demo?: string;
  repo?: string;
  status: "production" | "development" | "maintenance";
}

export interface Experience {
  id: string;
  role: { es: string; en: string };
  company: string;
  period: { start: string; end?: string };
  location: string;
  remote: boolean;
  description: { es: string; en: string };
  tech: string[];
  type: "fulltime" | "freelance" | "internship";
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "tools"
    | "ai"
    | "mobile"
    | "languages"
    | "devtools"
    | "productivity"
    | "os";
}