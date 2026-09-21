import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  BriefcaseBusiness,
  Github,
  Home,
  Linkedin,
  ExternalLink,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import type { Theme } from '../App';
import { ContactScreen } from '../components/ContactScreen';
import { SectionScreen } from '../components/SectionScreen';
import { WorkspaceScreen, workspaceCards, type SectionId } from '../components/WorkspaceScreen';
import DesktopHome from './screens/DesktopHome';
import DesktopDetailPanel from './DesktopDetailPanel';

type Screen = 'home' | 'workspace' | 'contact';
type DetailPanelContent = 'welcome' | 'section-info' | 'project-detail';

const navItems: Array<{ id: Screen; label: string; icon: ComponentType<LucideProps> }> = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'workspace', label: 'Workspace', icon: BriefcaseBusiness },
  { id: 'contact', label: 'Contact', icon: Mail },
];

type DesktopLayoutProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function DesktopLayout({ theme, onToggleTheme }: DesktopLayoutProps) {
  const [screen, setScreen] = useState<Screen>('home');
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [detailPanelContent, setDetailPanelContent] = useState<DetailPanelContent>('welcome');

  const navigate = (nextScreen: Screen) => {
    window.scrollTo(0, 0);
    setCurrentSection(null);
    setSelectedProject(null);
    setScreen(nextScreen);
    setDetailPanelContent(nextScreen === 'home' ? 'welcome' : nextScreen === 'workspace' ? 'welcome' : 'welcome');
  };

  const openSection = (sectionId: SectionId) => {
    setCurrentSection(sectionId);
    setSelectedProject(null);
    setDetailPanelContent('section-info');
  };

  const selectProject = (projectId: string) => {
    setSelectedProject(projectId);
    setDetailPanelContent('project-detail');
  };

  const backToProjects = () => {
    setSelectedProject(null);
    if (currentSection) {
      setDetailPanelContent('section-info');
    } else {
      setDetailPanelContent('welcome');
    }
  };

  const screenClass = screen === 'home' ? 'desktop-home' : screen === 'workspace' ? 'desktop-workspace' : 'desktop-contact';

  return (
    <div className="desktop-layout" data-theme={theme} data-testid="desktop-experience">
      {/* Sidebar */}
      <nav className="desktop-sidebar" aria-label="Desktop navigation">
        <div className="desktop-sidebar-identity">
          <div className="desktop-identity-row">
            <div className="desktop-avatar" aria-label="Akhil monogram">AB</div>
            <div>
              <strong>Akhil Behara</strong>
              <span>AI &amp; Data Science</span>
            </div>
          </div>
          <div className="desktop-status-pill">
            <span className="desktop-status-dot" aria-hidden="true" />
            Open to opportunities
          </div>
        </div>

        <div className="desktop-sidebar-divider" />

        <div className="desktop-sidebar-label">NAVIGATION</div>
        <div className="desktop-main-nav">
          {navItems.map(({ id, label, icon: Icon }) => {
            const active = screen === id;
            return (
              <div key={id}>
                <button
                  type="button"
                  className={`desktop-nav-item ${active ? 'desktop-nav-item-active' : ''}`}
                  onClick={() => navigate(id)}
                  aria-current={active ? 'page' : undefined}
                  data-testid={`button-desktop-nav-${id}`}
                >
                  <Icon size={18} strokeWidth={active ? 2.2 : 1.7} aria-hidden="true" />
                  <span>{label}</span>
                  {active ? <span className="desktop-nav-active-dot" aria-hidden="true" /> : null}
                </button>
                {/* Workspace submenu — inserted right after the Workspace button */}
                {id === 'workspace' && (screen === 'workspace' || currentSection) ? (
                  <motion.div
                    className="desktop-workspace-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {workspaceCards.map((card) => {
                      const SubIcon = card.icon;
                      const subActive = currentSection === card.id;
                      return (
                        <button
                          key={card.id}
                          type="button"
                          className={`desktop-submenu-item ${subActive ? 'desktop-submenu-item-active' : ''}`}
                          onClick={() => openSection(card.id)}
                        >
                          <SubIcon size={14} strokeWidth={1.7} aria-hidden="true" />
                          <span>{card.title}</span>
                        </button>
                      );
                    })}
                  </motion.div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="desktop-sidebar-divider desktop-sidebar-divider-connect" />

        <div className="desktop-sidebar-label">LINKS</div>
        <div className="desktop-quick-links">
          <a href="https://github.com/akhilbehara999" target="_blank" rel="noreferrer">
            <Github size={16} aria-hidden="true" />
            <span>GitHub</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/pondara-akhil-behara-016126381" target="_blank" rel="noreferrer">
            <Linkedin size={16} aria-hidden="true" />
            <span>LinkedIn</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
          <a href="/Akhil_Behara_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} aria-hidden="true" />
            <span>Resume</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>

        <div className="desktop-sidebar-footer">
          <span>Built by Akhil Behara</span>
          <span>© 2026</span>
        </div>
      </nav>

      {/* Center panel */}
      <div className="desktop-center-panel">
        <div className="desktop-center-inner">
          <AnimatePresence mode="wait" initial={false}>
            {screen === 'home' && !currentSection ? (
              <DesktopHome key="desktop-home" theme={theme} onExplore={() => navigate('workspace')} />
            ) : screen === 'workspace' && !currentSection ? (
              <DesktopWorkspace key="desktop-workspace" onCardTap={openSection} onSelectProject={selectProject} />
            ) : currentSection ? (
              <DesktopSectionView key={`desktop-section-${currentSection}`} sectionId={currentSection} onBack={() => { setCurrentSection(null); setDetailPanelContent('welcome'); }} onSelectProject={selectProject} />
            ) : (
              <DesktopContactView key="desktop-contact" />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail panel */}
      <DesktopDetailPanel
        currentScreen={screen}
        currentSection={currentSection}
        selectedProject={selectedProject}
        detailPanelContent={detailPanelContent}
        onSelectProject={selectProject}
        onBackToProjects={backToProjects}
      />

      {/* Theme toggle */}
      <button
        type="button"
        className="desktop-theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        data-testid="button-desktop-theme-toggle"
      >
        {theme === 'light' ? <Moon size={14} strokeWidth={1.8} aria-hidden="true" /> : <Sun size={14} strokeWidth={1.8} aria-hidden="true" />}
        {' '}
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}

/* Desktop Workspace Screen */
function DesktopWorkspace({ onCardTap, onSelectProject }: { onCardTap: (sectionId: SectionId) => void; onSelectProject: (projectId: string) => void }) {
  return (
    <motion.div
      className="desktop-workspace"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.35 }}
      data-testid="desktop-screen-workspace"
    >
      <div className="desktop-workspace-header">
        <div className="desktop-workspace-heading">
          <div className="desktop-heading-icon">
            <BriefcaseBusiness size={24} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <h1>Workspace</h1>
        </div>
        <p>Explore my projects, skills, education, and experience across different domains.</p>
      </div>
      <div className="desktop-workspace-divider" />
      <div className="desktop-workspace-grid">
        {workspaceCards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              type="button"
              className="desktop-workspace-card"
              onClick={() => onCardTap(card.id)}
              data-testid={`desktop-workspace-card-${card.id}`}
            >
              <span className="desktop-card-icon">
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <strong>{card.title}</strong>
              <span>{card.description}</span>
              <em>View <b>→</b></em>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* Desktop Section View */
function DesktopSectionView({ sectionId, onBack, onSelectProject }: { sectionId: SectionId; onBack: () => void; onSelectProject: (projectId: string) => void }) {
  return (
    <motion.div
      className="desktop-workspace"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -5 }}
      transition={{ duration: 0.3 }}
      data-testid={`desktop-section-${sectionId}`}
    >
      <div className="desktop-section-content">
        <SectionScreen sectionId={sectionId} onBack={onBack} />
      </div>
    </motion.div>
  );
}

/* Desktop Contact View */
function DesktopContactView() {
  return (
    <motion.div
      className="desktop-contact"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.35 }}
      data-testid="desktop-screen-contact"
    >
      <ContactScreen />
    </motion.div>
  );
}
