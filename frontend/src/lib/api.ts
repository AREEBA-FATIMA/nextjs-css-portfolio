import {
  FALLBACK_PROFILE,
  FALLBACK_HERO_SLIDES,
  FALLBACK_SERVICES,
  FALLBACK_SKILLS,
  FALLBACK_PROJECTS,
} from './fallbackData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Profile {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin_url?: string;
  profile_image?: string;
  about_text_1: string;
  about_text_2?: string;
  vision_text?: string;
  current_focus?: string;
}

export interface HeroSlide {
  id: number;
  heading: string;
  sub_heading: string;
  paragraph: string;
  button_text: string;
  target_section: string;
  order: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon_name: string;
  icon_library: string;
  color_class: string;
  order: number;
}

export interface Skill {
  id: number;
  name: string;
  percentage: number;
  percentage_display: string;
  color_class: string;
  order: number;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  live_demo_url?: string;
  github_url?: string;
  image?: string;
  image_url?: string;
  project_type: string;
  order: number;
}

export interface ContactMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API Functions with fallback data
export async function getProfile(): Promise<Profile | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/profile/active/`, {
      cache: 'no-store' // Always fetch fresh data
    });
    if (!response.ok) {
      console.warn('API unavailable, using fallback profile data');
      return FALLBACK_PROFILE;
    }
    const data = await response.json();
    return data || FALLBACK_PROFILE;
  } catch (error) {
    console.error('Error fetching profile, using fallback:', error);
    return FALLBACK_PROFILE;
  }
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/hero-slides/`, {
      cache: 'no-store' // Always fetch fresh data
    });
    if (!response.ok) {
      console.warn('API unavailable, using fallback hero slides');
      return FALLBACK_HERO_SLIDES;
    }
    const data = await response.json();
    const slides = Array.isArray(data) ? data : data.results || [];
    return slides.length > 0 ? slides : FALLBACK_HERO_SLIDES;
  } catch (error) {
    console.error('Error fetching hero slides, using fallback:', error);
    return FALLBACK_HERO_SLIDES;
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/`, {
      cache: 'no-store' // Always fetch fresh data
    });
    if (!response.ok) {
      console.warn('API unavailable, using fallback services');
      return FALLBACK_SERVICES;
    }
    const data = await response.json();
    const services = Array.isArray(data) ? data : data.results || [];
    return services.length > 0 ? services : FALLBACK_SERVICES;
  } catch (error) {
    console.error('Error fetching services, using fallback:', error);
    return FALLBACK_SERVICES;
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`, {
      cache: 'no-store' // Always fetch fresh data
    });
    if (!response.ok) {
      console.warn('API unavailable, using fallback skills');
      return FALLBACK_SKILLS;
    }
    const data = await response.json();
    const skills = Array.isArray(data) ? data : data.results || [];
    return skills.length > 0 ? skills : FALLBACK_SKILLS;
  } catch (error) {
    console.error('Error fetching skills, using fallback:', error);
    return FALLBACK_SKILLS;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/`, {
      cache: 'no-store' // Always fetch fresh data
    });
    if (!response.ok) {
      console.warn('API unavailable, using fallback projects');
      return FALLBACK_PROJECTS;
    }
    const data = await response.json();
    const projects = Array.isArray(data) ? data : data.results || [];
    return projects.length > 0 ? projects : FALLBACK_PROJECTS;
  } catch (error) {
    console.error('Error fetching projects, using fallback:', error);
    return FALLBACK_PROJECTS;
  }
}

export async function sendContactMessage(data: ContactMessageData): Promise<{ message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
}

