// queries/getContactMe.ts
import { ContactMe } from '../types';
import { contactMeContent } from './localContent';

// We no longer fetch from DatoCMS. Instead, we return static local content.
export async function getContactMe(): Promise<ContactMe> {
  return {
    profilePicture: {
      url: contactMeContent.profilePictureUrl,
    },
    name: contactMeContent.name,
    title: contactMeContent.title,
    summary: contactMeContent.summary,
    companyUniversity: contactMeContent.companyUniversity,
    linkedinLink: contactMeContent.linkedinLink,
    email: contactMeContent.email,
    phoneNumber: contactMeContent.phoneNumber,
  };
}
