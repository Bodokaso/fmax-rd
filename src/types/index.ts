export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  image: string;
  date: string;
  location: string;
  title: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  period: string;
  featured: boolean;
  features: string[];
}

export interface BlogPost {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  projectType: string;
}
