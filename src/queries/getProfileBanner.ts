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
  url: '/Ravi.Palavai.pdf',
},


    // This powers the LinkedIn button in the banner
    linkedinLink: 'https://www.linkedin.com/in/ravi-palavai',

    // This is the short summary text in the hero section
    profileSummary: `
Full Stack Engineer with 7+ years of experience designing and delivering scalable enterprise and financial applications.
Specialized in building secure, cloud-native Java/Spring Boot microservices and dynamic front-end interfaces with React
and Angular. Skilled at modernizing legacy systems, improving performance, and driving automation across banking,
insurance, and investment domains. Passionate about writing clean, maintainable code that enhances system reliability and
user experience while aligning technology solutions with business needs.
`.trim(),

  };
}
