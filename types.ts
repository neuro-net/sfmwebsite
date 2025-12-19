export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Full content for the dedicated page
  category: 'Publication' | 'Award' | 'Event' | 'General';
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Tenure {
  role: string;
  period: string;
}

export interface Member {
  id: string;
  name: string;
  photoUrl: string;
  currentRole: 'PI' | 'Postdoc' | 'PhD Candidate' | 'MSc Student' | 'Alumni';
  researchTheme: string;
  tenureHistory: Tenure[]; // Supports multiple tenures
  shortBio: string;
  fullBio: string;
  email: string;
  scholarLink?: string;
  joinDate: string; // ISO date for sorting
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference';
  doi: string;
  abstract: string;
  theme: string;
  isSelected: boolean;
}

export interface GalleryItem {
  id: string;
  thumbnailUrl: string;
  fullUrl: string;
  title: string;
  date: string;
  description: string;
  peopleTagged: string[];
}