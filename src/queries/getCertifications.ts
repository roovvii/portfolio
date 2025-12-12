// src/queries/getCertifications.ts

import { Certification } from '../types';
import { certificationsContent } from './localContent';

export async function getCertifications(): Promise<Certification[]> {
  return certificationsContent.map((cert) => ({
    title: cert.title,
    issuer: cert.organization,

    // issuedDate is a STRING in your type
    issuedDate: `${cert.year}-01-01`,

    link: cert.credentialLink,

    // iconName is a string identifier used by your UI
    iconName: 'FaCertificate',
  }));
}
