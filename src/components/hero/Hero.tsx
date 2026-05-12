"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.badge}
      >
        <span className={styles.dot} />
        Available for production-grade engineering
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={styles.title}
      >
        Crafting <span className="text-gradient">Scalable Systems</span> & AI Intelligence.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles.description}
      >
        I'm <span style={{ color: 'white', fontWeight: 600 }}>Dinesh Karthik A</span>, a Backend Developer 
        specializing in high-performance microservices, RAG pipelines, and cloud-native system design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={styles.actions}
      >
        <a href="#projects" className={styles.buttonPrimary}>
          View My Works <ArrowRight size={20} style={{ marginLeft: 8 }} />
        </a>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '12px' }}>
          <a href="https://github.com/dineshkarthik12" target="_blank" className={styles.buttonSecondary} style={{ padding: '14px' }}>
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/DineshKarthik" target="_blank" className={styles.buttonSecondary} style={{ padding: '14px' }}>
            <Linkedin size={24} />
          </a>
          <a href="mailto:dineshdk0412@gmail.com" className={styles.buttonSecondary} style={{ padding: '14px' }}>
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
