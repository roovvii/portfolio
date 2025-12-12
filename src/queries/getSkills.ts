// src/queries/getSkills.ts

import { Skill } from '../types';
import { skillsContent } from './localContent';

// We no longer fetch from DatoCMS. Instead, we map static skill names
// into full Skill objects that the UI expects.
export async function getSkills(): Promise<Skill[]> {
  return skillsContent.map((name) => ({
    name,
    // You can later customize categories per skill if you want
    category: 'General',
    // Fill these out later if you want rich descriptions/icons in the UI
    description: '',
    icon: '',
  }));
}
