"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Cpu, Layers } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "RepoMinds",
    subtitle: "RAG-Based AI Assistant for Codebase Understanding",
    description: "Built a scalable RAG pipeline for context-aware codebase query and explanation. Optimized backend via asynchronous architecture to handle 100+ concurrent requests.",
    metrics: [
      { label: "Latency", value: "-40%" },
      { label: "Search Speed", value: "<100ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    tech: ["Python", "FastAPI", "FAISS", "LLMs", "Docker", "GCP"],
    github: "https://github.com/dineshkarthik12/RepoMinds",
    demo: "#",
    icon: <Cpu size={40} className="text-gradient" />
  },
  {
    title: "InvFlow",
    subtitle: "Microservices-Based Inventory Management",
    description: "Distributed system with 6+ microservices. Integrated NGINX for reverse proxying and load balancing. Implemented stateless JWT authentication for horizontal scalability.",
    metrics: [
      { label: "Deployment", value: "-80% Time" },
      { label: "Cache Hit", value: "70%" },
      { label: "Concurrency", value: "150+" }
    ],
    tech: ["FastAPI", "MySQL", "Redis", "JWT", "NGINX", "Docker"],
    github: "https://github.com/dineshkarthik12/InvFlow",
    demo: "#",
    icon: <Layers size={40} className="text-gradient" />
  },
  {
    title: "AutoCast",
    subtitle: "Scalable AWS-Based MLOps System",
    description: "Event-driven MLOps pipeline for CPU utilization forecasting. Enabled horizontal scaling using AWS ECS tasks to run training jobs in parallel.",
    metrics: [
      { label: "Utilization", value: "3x Increase" },
      { label: "Jobs/Node", value: "12+" },
      { label: "Accuracy", value: "0.51 RMSE" }
    ],
    tech: ["AWS (S3, EC2, Lambda, ECS)", "TensorFlow", "FastAPI", "Docker"],
    github: "https://github.com/dineshkarthik12/AutoCast",
    demo: "#",
    icon: <Database size={40} className="text-gradient" />
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ marginBottom: '40px' }}>Production Shipments</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-card ${styles.projectCard}`}
          >
            <div className={styles.imagePlaceholder}>
              {project.icon}
            </div>
            <div className={styles.projectInfo}>
              <h3 className="mono">{project.title}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 500, marginBottom: '12px' }}>{project.subtitle}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.metrics}>
                {project.metrics.map((metric, i) => (
                  <div key={i} className={styles.metricItem}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.techStack}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techItem}>{t}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={project.github} target="_blank" className={styles.buttonSecondary} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                  <Github size={18} /> GitHub
                </a>
                <a href={project.demo} className={styles.buttonPrimary} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
