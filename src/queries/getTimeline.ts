// queries/getTimeline.ts
import { TimelineItem } from '../types';
import { timelineContent } from './localContent';

// We no longer fetch from DatoCMS. Instead, we return static local content.
export async function getTimeline(): Promise<TimelineItem[]> {
  return timelineContent as TimelineItem[];
}
