// src/localContent.ts
import type { IconType } from 'react-icons';
import { FaAws, FaDocker, FaGitAlt, FaJava, FaReact } from 'react-icons/fa';
import {
  SiApachekafka,
  SiApachespark,
  SiElasticsearch,
  SiGitlab,
  SiGrafana,
  SiHibernate,
  SiJenkins,
  SiJunit5,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiRedis,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiApachemaven,
} from 'react-icons/si';
import { FiCpu, FiShare2, FiTool, FiZap } from 'react-icons/fi';



// ===== Skills Page (Netflix rows) =====

export type SkillItem = { label: string; icon: IconType };
export type SkillCategory = { title: string; items: SkillItem[] };

export const skillsPageContent: {
  coreStack: SkillItem[];
  categories: SkillCategory[];
} = {
  coreStack: [
    { label: 'Java', icon: FaJava },
    { label: 'Spring Boot', icon: SiSpringboot },
    { label: 'REST APIs', icon: FiShare2 },
    { label: 'React', icon: FaReact },
    { label: 'TypeScript', icon: SiTypescript },
    { label: 'PostgreSQL', icon: SiPostgresql },
    { label: 'Apache Kafka', icon: SiApachekafka },
    { label: 'Docker', icon: FaDocker },
    { label: 'Kubernetes', icon: SiKubernetes },
    { label: 'AWS', icon: FaAws },
  ],
  categories: [
    {
      title: 'Languages & Frameworks',
      items: [
        { label: 'Java', icon: FaJava },
        { label: 'Spring Boot', icon: SiSpringboot },
        { label: 'Spring Data', icon: SiSpring },
        { label: 'Hibernate', icon: SiHibernate },
        { label: 'REST APIs', icon: FiShare2 },
        { label: 'SQL', icon: FiCpu },
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        { label: 'AWS', icon: FaAws },
        { label: 'Azure', icon: SiMicrosoftazure },
        { label: 'Docker', icon: FaDocker },
        { label: 'Kubernetes', icon: SiKubernetes },
        { label: 'Jenkins', icon: SiJenkins },
        { label: 'GitLab CI/CD', icon: SiGitlab },
      ],
    },
    {
      title: 'Databases',
      items: [
        { label: 'PostgreSQL', icon: SiPostgresql },
        { label: 'Oracle', icon: SiOracle },
        { label: 'MySQL', icon: SiMysql },
        { label: 'MongoDB', icon: SiMongodb },
        { label: 'Redis', icon: SiRedis },
      ],
    },
    {
      title: 'Messaging & Streaming',
      items: [
        { label: 'Apache Kafka', icon: SiApachekafka },
        { label: 'Apache Spark', icon: SiApachespark },
      ],
    },
    {
      title: 'Testing & QA',
      items: [
        { label: 'JUnit', icon: SiJunit5 },
        { label: 'Mockito', icon: FiTool },
        { label: 'Postman', icon: SiPostman },
        { label: 'Rest Assured', icon: FiZap },
      ],
    },
    {
      title: 'Monitoring & Logging',
      items: [
        { label: 'Prometheus', icon: SiPrometheus },
        { label: 'Grafana', icon: SiGrafana },
        { label: 'ELK Stack', icon: SiElasticsearch },
        { label: 'Log4j', icon: FiTool },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        { label: 'Git', icon: FaGitAlt },
        { label: 'Maven', icon: SiApachemaven },
        { label: 'Kafka Streams', icon: SiApachekafka },
        { label: 'EKS/AKS', icon: SiKubernetes },
      ],
    },
    {
      title: 'Architecture & Design',
      items: [
        { label: 'Microservices Architecture', icon: FiCpu },
        { label: 'Event-Driven Systems', icon: SiApachekafka },
        { label: 'Distributed Systems', icon: FiShare2 },
        { label: 'API Design', icon: FiTool },
        { label: 'System Performance Optimization', icon: FiZap },
      ],
    },
  ],
};


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
  visaStatus: 'F-1 OPT',

  // Keep this if your page needs it; otherwise we can remove it later
  expiryDate: '2030-01-01',

  // Main summary paragraph
  summary:
    'I’m currently authorized to work in the U.S. on F-1 OPT and I’m eligible for the STEM OPT extension. No immediate sponsorship is required. I’m happy to share work authorization details and provide documentation as needed.',
     additionalInfo: '', // <-- add this (or put a real extra line)
};


// Static timeline content – work & education
export const timelineContent = [
  {
    timelineType: 'work' as const,
    name: 'Delphi Software House LLP',
    title: 'Java Developer',
    techStack: 'Java, Spring Boot, SQL',
    summaryPoints: [
      'Developed and maintained backend services for enterprise applications.',
      'Collaborated with cross-functional teams to design and implement new features.',
    ],
    dateRange: 'Jan 2021 – May 2023',
  },
  {
    timelineType: 'work' as const,
    name: 'UAB Student Media',
    title: 'Social Media Manager',
    techStack: 'Content Strategy, Analytics, Social Platforms',
    summaryPoints: [
      'Managed social media presence for student media channels.',
      'Optimized content for engagement and audience growth.',
    ],
    dateRange: '1+ year',
  },
  {
    timelineType: 'education' as const,
    name: 'Your University Name',
    title: 'Your Degree (e.g., B.S. in Computer Science)',
    techStack: 'Core CS, Software Development, Databases',
    summaryPoints: [
      'Completed coursework in software engineering, data structures, and databases.',
    ],
    dateRange: 'Years you studied here',
  },
];

// Static "Contact Me" section content
export const contactMeContent = {
  // You can later replace this with your real image in /public and update the path.
  profilePictureUrl: '/profile.jpg',

  name: 'Ravi Palavai',
  title: 'Java Full Stack Developer',
  summary:
    'I build scalable backend services and modern, responsive web applications. Open to full-time roles and exciting opportunities in software development.',

  companyUniversity: 'University of Alabama at Birmingham',
  linkedinLink: 'https://www.linkedin.com/in/ravi-palavai',
  email: 'ravipalavai07@gmail.com',
  phoneNumber: '+1 (205) 587-1654',
};

// Static certifications content
export const certificationsContent = [
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    organization: 'Cisco',
    year: '2023',
    credentialLink: '#',
  },
  {
    title: 'Cybersecurity Essentials',
    organization: 'Cisco',
    year: '2023',
    credentialLink: '#',
  },
  {
    title: 'IoT Certification',
    organization: 'Cisco',
    year: '2023',
    credentialLink: '#',
  },
  {
    title: 'C Language Associate (CLA)',
    organization: 'Cisco',
    year: '2022',
    credentialLink: '#',
  },
];
