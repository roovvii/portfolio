// queries/getWorkPermit.ts
import { WorkPermit } from '../types';
import { workPermitContent } from './localContent';

// We no longer fetch from DatoCMS. Instead, we return static local content.
export async function getWorkPermit(): Promise<WorkPermit> {
  return {
    visaStatus: workPermitContent.visaStatus,
    summary: workPermitContent.summary,
    additionalInfo: workPermitContent.additionalInfo,
    // Convert the string in localContent to a Date object, as the type expects
    expiryDate: new Date(workPermitContent.expiryDate),
  };
}
