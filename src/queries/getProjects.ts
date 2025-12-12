// src/queries/getProjects.ts

import { Project } from '../types';
import { projectsContent } from './localContent';

// We no longer fetch from DatoCMS. Instead, we map static project entries
// from localContent into the Project shape the UI expects.
export async function getProjects(): Promise<Project[]> {
  return projectsContent.map((proj) => ({
    title: proj.title,
    description: proj.description,
    // You can later customize this per project in localContent if you want.
    // For now we leave it empty, which just means "no tech badges" or a minimal display.
    techUsed: '',
    // You can later point this to a real image in /public or an external URL.
    image: {
      url: '',
    },
  }));
}
