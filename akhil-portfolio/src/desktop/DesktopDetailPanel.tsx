import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, FolderOpen } from 'lucide-react';
import { desktopProjects, desktopSectionDescriptions, desktopSkillGroups, type DesktopProject } from './desktopData';
import { workspaceCards, type SectionId } from '../components/WorkspaceScreen';

type DetailPanelContent = 'welcome' | 'section-info' | 'project-detail';

type DesktopDetailPanelProps = {
  currentScreen: 'home' | 'workspace' | 'contact';
  currentSection: SectionId | null;
  selectedProject: string | null;
  detailPanelContent: DetailPanelContent;
  onSelectProject: (projectId: string) => void;
  onBackToProjects: () => void;
};

const skillSnapshot = ['Python', 'SQL', 'React', 'AI/ML', 'Data'];

function PanelLabel({ children }: { children: string }) {
  return <div className="desktop-detail-label">{children}</div>;
}

function ProjectDetail({ project, onBack }: { project: DesktopProject; onBack: () => void }) {
  return (
    <motion.div className="desktop-detail-view" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.25 }}>
      <button type="button" className="desktop-detail-back" onClick={onBack}>← All Projects</button>
      <div className="desktop-detail-project-heading"><h2>{project.title}</h2><span className="desktop-project-status desktop-project-status-complete">{project.status}</span></div>
      <div className="desktop-detail-divider" />
      <PanelLabel>TECH STACK</PanelLabel>
      <div className="desktop-detail-tags">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="desktop-detail-divider" />
      <PanelLabel>ABOUT</PanelLabel>
      <p className="desktop-detail-copy">{project.longDesc}</p>
      <div className="desktop-detail-links">
        {project.sourceCode ? <a className="desktop-detail-link desktop-detail-link-outline" href={project.sourceCode} target="_blank" rel="noreferrer"><span>GitHub</span><ExternalLink size={13} /></a> : null}
        {project.demo ? <a className="desktop-detail-link desktop-detail-link-filled" href={project.demo} target="_blank" rel="noreferrer"><span>{project.demoLabel ?? 'Live Demo'}</span><ExternalLink size={13} /></a> : null}
        {project.demo2 ? <a className="desktop-detail-link desktop-detail-link-filled desktop-detail-link-filled-secondary" href={project.demo2} target="_blank" rel="noreferrer"><span>{project.demo2Label ?? 'Live Demo'}</span><ExternalLink size={13} /></a> : null}
      </div>
    </motion.div>
  );
}

function WelcomePanel() {
  return (
    <motion.div className="desktop-detail-view" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.25 }}>
      <PanelLabel>QUICK PROFILE</PanelLabel>
      <div className="desktop-mini-profile">
        <div className="desktop-mini-avatar">AB</div>
        <strong>Akhil Behara</strong>
        <span>CS Student · AI &amp; Data Science</span>
        <small>Srikakulam, AP · India</small>
      </div>
      <div className="desktop-detail-divider" />
      <PanelLabel>CURRENTLY</PanelLabel>
      <div className="desktop-current-list">
        <span><i className="dot-green" />Open to internships</span>
        <span><i className="dot-red" />Building this portfolio</span>
        <span><i className="dot-orange" />Learning AI &amp; ML</span>
      </div>
      <div className="desktop-detail-divider" />
      <PanelLabel>SKILLS SNAPSHOT</PanelLabel>
      <div className="desktop-detail-pills">{skillSnapshot.map((skill) => <span key={skill}>{skill}</span>)}</div>
      <div className="desktop-detail-divider" />
      <PanelLabel>QUICK LINKS</PanelLabel>
      <div className="desktop-detail-quick-links">
        <a href="https://github.com/akhilbehara999" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a>
        <a href="https://www.linkedin.com/in/pondara-akhil-behara-016126381" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={12} /></a>
        <a href="/Akhil_Behara_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume <ExternalLink size={12} /></a>
      </div>
    </motion.div>
  );
}

function SectionInfo({ sectionId, onSelectProject }: { sectionId: SectionId; onSelectProject: (projectId: string) => void }) {
  const section = workspaceCards.find((item) => item.id === sectionId) ?? workspaceCards[0];
  const Icon = section.icon;
  return (
    <motion.div className="desktop-detail-view" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -5 }} transition={{ duration: 0.25 }}>
      <div className="desktop-detail-section-icon"><Icon size={18} strokeWidth={1.8} aria-hidden="true" /></div>
      <h2 className="desktop-detail-section-title">{section.title}</h2>
      <p className="desktop-detail-section-description">{desktopSectionDescriptions[sectionId]}</p>
      <div className="desktop-detail-divider" />
      {sectionId === 'about' ? (
        <>
          <PanelLabel>AT A GLANCE</PanelLabel>
           <div className="desktop-info-stats"><span><b>6+</b>Projects</span><span><b>3</b>Semesters</span><span><b>3</b>Certificates</span></div>
        </>
      ) : null}
      {sectionId === 'skills' ? (
        <>
          <PanelLabel>SKILL GROUPS</PanelLabel>
          <div className="desktop-skill-groups">{desktopSkillGroups.map((group, index) => <span key={group}>{group}<b>{[4, 10, 7][index]} skills</b></span>)}</div>
        </>
      ) : null}
      {sectionId === 'education' ? (
        <>
          <PanelLabel>TIMELINE</PanelLabel>
           <div className="desktop-timeline-info"><span><b>2023–2027</b>B.Tech · AI &amp; Data Science · CGPA 8.17</span><span><b>2021–2023</b>Intermediate (MPC) · CGPA 7.1</span><span><b>2020–2021</b>SSC · CGPA 8.6</span></div>
        </>
      ) : null}
      {sectionId === 'projects' ? (
        <>
          <PanelLabel>ALL PROJECTS</PanelLabel>
          <div className="desktop-project-mini-list">{desktopProjects.map((project) => <button type="button" key={project.id} onClick={() => onSelectProject(project.id)}><span><FolderOpen size={14} />{project.title}</span><em>{project.status}</em></button>)}</div>
        </>
      ) : null}
      {sectionId === 'experience' ? (
        <>
          <PanelLabel>TIMELINE</PanelLabel>
           <div className="desktop-timeline-info"><span><b>Bluestock Fintech</b>Data Analyst Intern · Remote</span><span><b>ExcelR &amp; APSCHE</b>Data Analytics Intern</span><span><b>Deloitte Australia</b>Data Analytics Job Simulation</span></div>
        </>
      ) : null}
      {sectionId === 'certificates' ? (
        <>
          <PanelLabel>CERTIFICATES</PanelLabel>
           <div className="desktop-cert-mini-list"><span>Data Analyst Internship <small>Bluestock Fintech · BFDA37224</small></span><span>Data Analytics Internship <small>APSCHE &amp; ExcelR · EXCELR-I-89760</small></span><span>Data Analytics Simulation <small>Deloitte Australia · Forage</small></span></div>
          <div className="desktop-detail-quick-links"><a href="https://www.linkedin.com/in/pondara-akhil-behara-016126381" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={12} /></a><a href="/Akhil_Behara_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume PDF <ExternalLink size={12} /></a></div>
        </>
      ) : null}
    </motion.div>
  );
}

export default function DesktopDetailPanel({ currentScreen, currentSection, selectedProject, detailPanelContent, onSelectProject, onBackToProjects }: DesktopDetailPanelProps) {
  const project = desktopProjects.find((item) => item.id === selectedProject);
  const content = detailPanelContent === 'project-detail' && project ? <ProjectDetail project={project} onBack={onBackToProjects} /> : detailPanelContent === 'section-info' && currentSection ? <SectionInfo sectionId={currentSection} onSelectProject={onSelectProject} /> : <WelcomePanel />;
  return (
    <aside className="desktop-detail-panel" data-testid="desktop-detail-panel">
      <AnimatePresence mode="wait" initial={false}>
        <div key={`${currentScreen}-${currentSection ?? 'none'}-${selectedProject ?? 'none'}`}>{content}</div>
      </AnimatePresence>
    </aside>
  );
}