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

// API Functions
export async function getProfile(): Promise<Profile | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/profile/active/`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/hero-slides/`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/services/`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/skills/`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
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

