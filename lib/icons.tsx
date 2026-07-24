import {
  CalendarDays,
  Box,
  Activity,
  Pill,
  Sparkles,
  Stethoscope,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Feature } from "@/lib/content/features";

export const featureIcons: Record<Feature["icon"], LucideIcon> = {
  calendar: CalendarDays,
  cube: Box,
  activity: Activity,
  pill: Pill,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  "heart-handshake": HeartHandshake,
  "shield-check": ShieldCheck,
};
