"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, Cpu, Layers, Camera } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "RepoMinds",
    subtitle: "RAG-Based AI Assistant for Codebase Understanding",
    description: "Built a scalable RAG pipeline for context-aware codebase query and explanation. Optimized backend via asynchronous architecture to handle 100+ concurrent requests.",
    image: "/images/repominds.jpg",
    metrics: [
      { label: "Latency", value: "-40%" },
      { label: "Search Speed", value: "<100ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    tech: ["Python", "FastAPI", "FAISS", "LLMs", "Docker", "GCP"],
    github: "https://github.com/Dineshkarthik12/RepoMinds---RAG-based-AI-Assistant-for-Codebase-Github-",
    demo: "https://repominds-frontend-hswsjlna5a-uc.a.run.app/",
    icon: <Cpu size={40} className="text-gradient" />
  },
  {
    title: "InvFlow",
    subtitle: "Microservices-Based Inventory Management",
    description: "Distributed system with 6+ microservices. Integrated NGINX for reverse proxying and load balancing. Implemented stateless JWT authentication for horizontal scalability.",
    image: "/images/invflow.jpg",
    metrics: [
      { label: "Deployment", value: "-80% Time" },
      { label: "Cache Hit", value: "70%" },
      { label: "Concurrency", value: "150+" }
    ],
    tech: ["FastAPI", "MySQL", "Redis", "JWT", "NGINX", "Docker"],
    github: "https://github.com/Dineshkarthik12/Microservices-Architecture-Based-Inventory-Management-System",
    demo: "https://frontend-852842802531.us-central1.run.app/",
    icon: <Layers size={40} className="text-gradient" />
  },
  {
    title: "NutriX",
    subtitle: "Smart Nutrition Detection System",
    description: "End-to-end vision-based nutrition analysis system. Trained YOLOv8 on 12,000 annotated images for multi-class food detection and real-time dietary estimation.",
    image: "/images/nutrix.jpg",
    metrics: [
      { label: "Accuracy", value: "91.6%" },
      { label: "Dataset", value: "12k Images" },
      { label: "Classes", value: "31-Class" }
    ],
    tech: ["Computer Vision", "YOLOv8", "Flask", "Python", "OpenCV", "Docker"],
    github: "https://github.com/Dineshkarthik12/NutriX---Computer-Vison-Based-Smart-Nutrition-Detection-System",
    demo: "https://dinesh012-smart-nutrition-detection.hf.space/",
    icon: <Camera size={40} className="text-gradient" />
  },
  {
    title: "AutoCast",
    subtitle: "Scalable AWS-Based MLOps System",
    description: "Event-driven MLOps pipeline for CPU utilization forecasting. Enabled horizontal scaling using AWS ECS tasks to run training jobs in parallel.",
    image: "/images/autocast.jpg",
    metrics: [
      { label: "Utilization", value: "3x Increase" },
      { label: "Jobs/Node", value: "12+" },
      { label: "Accuracy", value: "0.51 RMSE" }
    ],
    tech: ["AWS (S3, EC2, Lambda, ECS)", "TensorFlow", "FastAPI", "Docker"],
    github: "https://github.com/Dineshkarthik12/AutoCast",
    demo: "",
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
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '105%', 
                    height: '105%', 
                    objectFit: 'cover',
                    objectPosition: 'top left' // Crop bottom right where watermark usually is
                  }} 
                />
              ) : project.icon}
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
                {project.github && (
                  <a href={project.github} target="_blank" className={styles.buttonSecondary} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" className={styles.buttonPrimary} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
