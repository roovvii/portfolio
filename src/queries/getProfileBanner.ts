// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

// We no longer fetch from DatoCMS. Instead, we return static local content.
export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    backgroundImage: {
      // You can point this to a real image in /public later.
      // For now, keep it empty or use something like '/banner.jpg'
      url: '',
    },
    // This is the big main heading on the first screen after the intro
    headline: 'Ravi Palavai',

    // This is the "Resume" link in the banner buttons
    resumeLink: {
      // Replace with your actual resume URL later (Google Drive, etc.)
      url: '#',
    },

    // This powers the LinkedIn button in the banner
    linkedinLink: 'https://www.linkedin.com/in/ravi-palavai',

    // This is the short summary text in the hero section
    profileSummary:
      'Java Full Stack Developer with experience building scalable backend services and clean, modern web UIs.',
  };
}
