"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Brain, Code2, Layers } from "lucide-react";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Backend Engineering",
    icon: <Server size={24} />,
    skills: ["FastAPI", "Python", "REST API Design", "Async Programming", "JWT", "OAuth2", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={24} />,
    skills: ["AWS (EC2, Lambda, S3)", "Docker", "Kubernetes", "NGINX", "GitHub Actions", "CI/CD Pipelines", "GCP Cloud Run"]
  },
  {
    title: "System Architecture",
    icon: <Layers size={24} />,
    skills: ["Microservices", "System Design", "Scalability", "Concurrency", "Load Balancing", "API Gateway", "Event-Driven Design"]
  },
  {
    title: "Frontend Engineering",
    icon: <Code2 size={24} />,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Tool Proficiency",
    icon: <Code2 size={24} />,
    skills: ["Git", "GitHub", "VS Code", "Swagger/OpenAPI", "Postman", "Docker Compose", "Shell Scripting"]
  },
  {
    title: "Intelligent Systems",
    icon: <Brain size={24} />,
    skills: ["RAG Pipelines", "LLMs", "FAISS", "TensorFlow", "Transformers", "Computer Vision", "MLOps"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="title-sm" style={{ marginBottom: '40px' }}>Technical Proficiency</h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card ${styles.skillCard}`}
          >
            <h3 className={styles.categoryTitle}>
              {category.icon}
              {category.title}
            </h3>
            <div className={styles.tagList}>
              {category.skills.map((skill, i) => (
                <span key={i} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
