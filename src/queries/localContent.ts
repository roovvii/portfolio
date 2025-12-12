// src/localContent.ts

export const heroContent = {
  name: 'Ravi Palavai',
  title: 'Java Full Stack Developer',
  tagline: "Building scalable backend services and clean, modern UIs.",
};

export const skillsContent = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'HTML',
  'CSS',
  'PostgreSQL',
  'Python',
];

export const experienceContent = [
  {
    company: 'Delphi Software House LLP',
    role: 'Java Developer',
    duration: 'Jan 2021 – May 2023',
    summary:
      'Worked on backend services and enterprise applications using Java and Spring Boot.',
  },
  {
    company: 'UAB Student Media',
    role: 'Social Media Manager',
    duration: '1+ year',
    summary:
      'Managed social media strategy and content for student media channels.',
  },
];

export const projectsContent = [
  {
    title: 'Project One',
    description: 'Placeholder project. Replace with your real project later.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Another placeholder project entry.',
    link: '#',
  },
];

export const contactContent = {
  email: 'ravipalavai07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ravi-palavai',
};

// Static work permit content – update this later with your real details
export const workPermitContent = {
  // This shows up inside the <strong>…</strong> text
  visaStatus: 'Update this with your real status (e.g., F-1 OPT, H-1B, Green Card, etc.)',

  // Store as a string here; we’ll convert it to a Date object in getWorkPermit.ts
  expiryDate: '2030-01-01',

  // Main summary paragraph
  summary:
    'I am currently authorized to work and excited about opportunities to build valuable experience and grow my career.',

  // Extra line shown below the summary
  additionalInfo:
    'This is placeholder text. You can update it with specific work authorization, visa details, or relocation preferences.',
};
