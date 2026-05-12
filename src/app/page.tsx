import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      
      {/* Education & Achievements Section */}
      <section id="about">
        <div className="glass-card" style={{ padding: '40px' }}>
          <h2 style={{ marginBottom: '32px' }}>Education & Recognition</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Education</h3>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Vellore Institute of Technology</p>
                <p style={{ color: 'var(--text-secondary)' }}>M.Tech Integrated Software Engineering</p>
                <p style={{ fontSize: '14px', color: 'var(--primary)' }}>2022 — 2027</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Senthil Public School</p>
                <p style={{ color: 'var(--text-secondary)' }}>Senior Secondary (CBSE)</p>
                <p style={{ fontSize: '14px', color: 'var(--primary)' }}>2021 — 2022</p>
              </div>
            </div>
            <div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '16px' }}>Certifications</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <p style={{ fontWeight: 600 }}>NVIDIA DLI Certificate</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Fundamentals of Deep Learning for Computer Vision</p>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <p style={{ fontWeight: 600 }}>AWS Certified Cloud Practitioner</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Ongoing Certification (CLF-C02)</p>
                </li>
                <li style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <p style={{ fontWeight: 600 }}>LeetCode</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Strong Problem-Solving Practice</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid var(--border)', marginTop: '60px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
          Built with Next.js & Vanilla CSS. Designed for performance.
        </p>
        <p style={{ marginTop: '12px', fontWeight: 600 }}>
          © 2026 Dinesh Karthik A
        </p>
      </footer>
    </main>
  );
}
