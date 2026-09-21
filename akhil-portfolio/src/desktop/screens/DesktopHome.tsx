import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2 } from 'lucide-react';
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { Theme } from '../../App';
import { journeyData, projectChartData } from '../../data/chartData';

const skillData = [
  { name: 'Programming', value: 30, color: '#AA2222' },
  { name: 'AI & LLMs', value: 25, color: '#E07020' },
  { name: 'Data', value: 25, color: '#C85A10' },
  { name: 'Automation', value: 12, color: '#8B1A1A' },
  { name: 'Tools', value: 8, color: '#F0A060' },
];

function DesktopTooltip({
  active,
  payload,
  label,
  mode = 'journey',
  pie = false,
}: {
  active?: boolean;
  payload?: Array<{ value?: number | string; name?: string }>;
  label?: string;
  mode?: 'journey' | 'project' | 'pie';
  pie?: boolean;
}) {
  if (!active || !payload?.length) return null;
  const isPie = mode === 'pie' || pie;
  const isProject = mode === 'project';
  const title = isPie ? payload[0].name : label;
  const value = isPie
    ? `${payload[0].value}%`
    : isProject
      ? `${payload[0].value} Tech Stack`
      : `SGPA ${payload[0].value}`;
  return (
    <div className="desktop-chart-tooltip">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

type DesktopHomeProps = {
  theme: Theme;
  onExplore: () => void;
};

export default function DesktopHome({ theme, onExplore }: DesktopHomeProps) {
  const muted = theme === 'dark' ? '#A6A09A' : '#9A9A9A';
  const axis = theme === 'dark' ? '#D6CEC7' : '#5C5C5C';
  const cursor = theme === 'dark' ? '#302A27' : '#F8F5F2';

  return (
    <motion.main
      className="desktop-home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      data-testid="desktop-screen-home"
    >
      <section className="desktop-home-intro">
        <span className="desktop-eyebrow">HELLO, USER</span>
        <h1>I&apos;m Akhil Behara.</h1>
        <h2>I build with Data, AI &amp; Code.</h2>
        <p>Turning data into decisions and ideas into working systems.</p>
        <div className="desktop-stat-chips">
          <span><strong>6+</strong> Projects</span>
          <span><strong>3</strong> Semesters</span>
          <span><strong>3</strong> Certificates</span>
        </div>
      </section>

      <section className="desktop-chart-section">
        <div className="desktop-section-label">MY JOURNEY</div>
        <div className="desktop-line-card desktop-chart-card">
          <div className="desktop-chart-large">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={journeyData} margin={{ top: 18, right: 12, bottom: 4, left: 0 }}>
                <XAxis dataKey="label" axisLine={false} tickLine={false} interval={0} tick={{ fill: muted, fontSize: 12 }} />
                <YAxis hide domain={[6.5, 9]} />
                <Tooltip content={<DesktopTooltip />} cursor={{ stroke: cursor }} />
                <Line type="monotone" dataKey="value" stroke="#AA2222" strokeWidth={3} dot={{ r: 6, fill: '#AA2222', stroke: '#AA2222' }} activeDot={{ r: 7, fill: '#E07020', stroke: '#FFF', strokeWidth: 2 }} connectNulls={false} animationDuration={1100} />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="#AA2222"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={(props) => <circle key={props.index} cx={props.cx} cy={props.cy} r={6} fill="transparent" stroke="#AA2222" strokeWidth={2} opacity={props.index === 6 ? 1 : 0} />}
                  activeDot={false}
                  connectNulls={false}
                  animationDuration={1100}
                />
              </LineChart>
            </ResponsiveContainer>
            <span className="desktop-ongoing-tag">Ongoing</span>
          </div>
          <div className="desktop-chart-pills">
            <span><strong>6 Semesters Completed · 4th Year Ongoing</strong></span>
          </div>
        </div>
      </section>

      <div className="desktop-chart-row">
        <section className="desktop-chart-card desktop-bar-card">
          <div className="desktop-card-title-row">
            <span className="desktop-section-label">PROJECTS</span>
            <BarChart3 size={17} color="#AA2222" aria-hidden="true" />
          </div>
          <div className="desktop-chart-medium">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectChartData} layout="vertical" margin={{ top: 5, right: 6, bottom: 8, left: 4 }}>
                <XAxis type="number" hide domain={[0, 7]} />
                <YAxis type="category" dataKey="project" width={94} axisLine={false} tickLine={false} tick={{ fill: axis, fontSize: 12 }} />
                <Tooltip content={<DesktopTooltip mode="project" />} cursor={{ fill: cursor }} />
                <Bar dataKey="tech" fill="#AA2222" radius={[0, 5, 5, 0]} barSize={18} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="desktop-chart-card desktop-pie-card">
          <div className="desktop-card-title-row">
            <span className="desktop-section-label">SKILLS</span>
            <Code2 size={17} color="#E07020" aria-hidden="true" />
          </div>
          <div className="desktop-pie-chart">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={skillData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={86} stroke="none">
                  {skillData.map((skill) => <Cell key={skill.name} fill={skill.color} />)}
                </Pie>
                <Tooltip content={<DesktopTooltip pie />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="desktop-skill-legend">
            {skillData.map((skill) => (
              <span key={skill.name}><i style={{ background: skill.color }} />{skill.name}</span>
            ))}
          </div>
        </section>
      </div>

      <motion.button
        type="button"
        className="desktop-explore-button"
        onClick={onExplore}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        Explore Workspace <ArrowRight size={18} strokeWidth={2.1} aria-hidden="true" />
      </motion.button>
    </motion.main>
  );
}