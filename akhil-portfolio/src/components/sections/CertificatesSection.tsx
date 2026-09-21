import { motion } from 'framer-motion';
import { ExternalLink, FileCheck } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiGoogledrive } from 'react-icons/si';

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  fileUrl?: string;
};

const certificates: Certificate[] = [
  {
    id: 'cert-bluestock',
    title: 'Data Analyst Internship',
    issuer: 'Bluestock Fintech (Verification ID: BFDA37224)',
    date: 'Apr 2026 – Jun 2026',
    image: '/bluestock-internship.jpg',
    fileUrl: '/bluestock-internship.jpg',
  },
  {
    id: 'cert-excelr',
    title: 'Data Analytics Internship',
    issuer: 'ExcelR EdTech & APSCHE (Cert No: EXCELR-I-89760)',
    date: 'May 2026 – Jun 2026',
    image: '/excelr-internship.jpg',
    fileUrl: '/excelr-internship.jpg',
  },
  {
    id: 'cert-deloitte',
    title: 'Data Analytics & Forensic Technology Job Simulation',
    issuer: 'Deloitte Australia · Forage (Verification: eNxoQ8kECqApZbXfD)',
    date: 'Nov 2025',
    image: '/deloitte-certificate.jpg',
    fileUrl: '/deloitte-certificate.jpg',
  },
];

export default function CertificatesSection() {
  return (
    <motion.section
      className="section-content certificates-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      data-testid="section-content-certificates"
    >
      <div className="certificate-list">
        {certificates.map((certificate, index) => (
          <motion.article
            className="certificate-card"
            key={certificate.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
          >
            <a
              href={certificate.fileUrl || certificate.image}
              target="_blank"
              rel="noreferrer"
              className="certificate-preview"
              title={`View ${certificate.title}`}
            >
              {certificate.image ? (
                <img src={certificate.image} alt={certificate.title} />
              ) : (
                <>
                  <FileCheck size={36} strokeWidth={1.5} aria-hidden="true" />
                  <span>Certificate Preview</span>
                </>
              )}
            </a>
            <div className="certificate-details">
              <h2>{certificate.title}</h2>
              <p>{certificate.issuer}</p>
              {certificate.date ? <span>{certificate.date}</span> : null}
              {certificate.fileUrl ? (
                <a
                  href={certificate.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-doc-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Document</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="certificate-links"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.32, ease: 'easeOut' }}
      >
        <h2 className="section-content-label">VIEW ALL CERTIFICATES</h2>
        <motion.a
          className="certificate-link certificate-linkedin"
          href="https://www.linkedin.com/in/pondara-akhil-behara-016126381"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <span><FaLinkedinIn size={18} aria-hidden="true" />View on LinkedIn</span>
          <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
        </motion.a>
        <motion.a
          className="certificate-link certificate-drive"
          href="https://drive.google.com/drive/folders/1NILiLOGCmGQi88opwFHKlOdwTx4rjTDo?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.97 }}
        >
          <span><SiGoogledrive size={18} aria-hidden="true" />View on Drive</span>
          <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}