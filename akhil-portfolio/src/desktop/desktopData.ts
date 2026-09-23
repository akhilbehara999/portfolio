import { projectsData, getProjectDemoLinks, type ProjectData } from '../data/projectsData';
import type { SectionId } from '../components/WorkspaceScreen';

export type DesktopProject = ProjectData;

export const desktopProjects: DesktopProject[] = projectsData;
export { getProjectDemoLinks };

export const desktopSectionDescriptions: Record<SectionId, string> = {
  about: 'Background, journey, and focus areas across AI, data science, and engineering.',
  skills: 'Core technical capabilities, frameworks, languages, and specialized tooling.',
  projects: 'Featured applications, machine learning tools, and open-source utilities.',
  experience: 'Internships, industrial simulations, and hands-on analytical work.',
  education: 'Academic background, degree coursework, and technical training milestones.',
  certificates: 'Verified technical certifications, virtual experience programs, and credentials.',
};

export const desktopSkillGroups: string[] = [
  'Programming & Core',
  'AI, ML & Data Analytics',
  'Tools & Infrastructure',
];
