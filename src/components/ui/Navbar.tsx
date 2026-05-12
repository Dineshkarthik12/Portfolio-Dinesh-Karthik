"use client";

import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={styles.navbar}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className="text-gradient mono">DK</span>
        </div>
        <div className={styles.links}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="mailto:dineshdk0412@gmail.com" className={styles.contactBtn}>Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
