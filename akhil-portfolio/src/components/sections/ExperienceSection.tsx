import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Bluestock Fintech',
    role: 'Data Analyst Intern',
    location: 'Remote · Internship',
    date: 'Apr 2026 – Jun 2026',
    bullets: [
      'Completed a 2-month internship as a Data Analyst Intern under the guidance of Project Manager Yash Kale (Verification ID: BFDA37224).',
      'Worked on financial data analysis tasks contributing to Bluestock’s fintech analytics pipeline and delivering data-driven insights.',
    ],
    skills: ['Financial Data Analysis', 'Python', 'Fintech Analytics', 'Data Insights'],
  },
  {
    company: 'ExcelR EdTech (APSCHE)',
    role: 'Data Analytics Intern',
    location: 'Hybrid · Short-Term Internship',
    date: 'May 2026 – Jun 2026',
    bullets: [
      'Completed Short-Term Internship on Data Analytics organized by ExcelR EdTech in collaboration with Andhra Pradesh State Council of Higher Education.',
      'Awarded 3 academic credits under Certificate No: EXCELR-I-89760.',
    ],
    skills: ['Data Analytics', 'ExcelR', 'APSCHE', 'Python', 'EDA'],
  },
  {
    company: 'Deloitte Australia',
    role: 'Data Analytics & Forensic Technology Job Simulation',
    location: 'Forage · Virtual Experience',
    date: 'Nov 2025',
    bullets: [
      'Built Tableau dashboards and data validation workflows for business intelligence and audit analysis.',
      'Applied statistical analysis techniques to identify patterns and insights from complex datasets.',
    ],
    skills: ['Tableau', 'Data Validation', 'Statistical Analysis', 'Forensic Technology'],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      className="section-content experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-experience"
    >
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <motion.article
            className="experience-card"
            key={experience.company}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
          >
            <motion.span
              className="experience-accent"
              initial={{ height: 0 }}
              animate={{ height: 'calc(100% - 32px)' }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
              aria-hidden="true"
            />
            <div className="experience-heading-row">
              <h2>{experience.company}</h2>
              {experience.date ? <span>{experience.date}</span> : null}
            </div>
            <p className="experience-role">{experience.role}</p>
            <p className="experience-location">{experience.location}</p>
            <div className="experience-divider" />
            <h3>KEY RESPONSIBILITIES</h3>
            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>
                  <span aria-hidden="true" />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
            <div className="project-tags experience-tags">
              {experience.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}