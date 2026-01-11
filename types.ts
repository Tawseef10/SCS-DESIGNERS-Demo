import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  description?: string;
  gallery?: string[];
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  project: string;
}