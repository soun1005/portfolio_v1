import styles from './about.module.css';
import Button from '@/components/common/button';
import { Appearance } from '@/components/framer-motion-utils/Appearance';

const experiences = [
  {
    role: 'Frontend Dev · Lead Mobile Dev',
    company: 'VIV3 — Paris, France',
    period: 'Apr 2024 – Nov 2025',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Educentre — Paris, France',
    period: 'Oct 2023 – Mar 2024',
  },
  {
    role: 'Project Manager',
    company: 'Vryus — Seoul, South Korea',
    period: 'Aug 2015 – Aug 2016',
  },
];

const About = () => {
    return (
        <div className={`container ${styles.container}`} id="about">
            <div className={styles.mainWrap}>
                <div className={styles.bioCol}>
                    <h1 className="title">About</h1>
                    <Appearance
                        customAnimation={{
                            variants: {
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            },
                            initial: 'hidden',
                            transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.25, 0.25, 0.75],
                            },
                        }}
                    >
                        <div className={styles.descWrap}>
                            <h2>Hello! I&apos;m Elodie,</h2>
                            <p className={styles.title}>
                                from <span className={styles.textRainbow}>Seoul🇰🇷</span> based in
                                Parisien region, France
                            </p>
                            <p className={styles.desc}>
                                <span>Frontend developer with 2+ years of professional experience building cross-platform mobile applications and web interfaces using React Native, React.js, and TypeScript. Proven ability to lead end-to-end mobile projects from planning to App Store / Play Store deployment. Multilingual communicator (Korean native · English C2 · French B2 · Japanese) with a track record of delivering production-ready features in agile, fast-paced environments.</span>
                            </p>
                        </div>
                    </Appearance>
                </div>
                <div className={styles.expCol}>
                    <Appearance
                        customAnimation={{
                            variants: {
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            },
                            initial: 'hidden',
                            transition: {
                                duration: 0.8,
                                delay: 0.4,
                                ease: [0.25, 0.25, 0.25, 0.75],
                            },
                        }}
                    >
                        <div className={styles.expWrap}>
                            <h1 className="title">Experience</h1>
                            {experiences.map((exp, i) => (
                                <div key={i} className={styles.expItem}>
                                    <div className={styles.expMeta}>
                                        <span className={styles.expRole}>{exp.role}</span>
                                        <span className={styles.expPeriod}>{exp.period}</span>
                                    </div>
                                    <span className={styles.expCompany}>{exp.company}</span>
                                </div>
                            ))}
                        </div>
                    </Appearance>
                </div>
            </div>
            <Appearance
                width="100%"
                customAnimation={{
                    variants: {
                        hidden: { opacity: 0, y: -80 },
                        visible: { opacity: 1, y: 0 },
                    },
          initial: 'hidden',
                    transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.25, 0.25, 0.25, 0.75],
                    },
                }}
            >
                <Button
                    text="VIEW CV"
                    link="https://drive.google.com/file/d/1D1UBNkxc8QTyNpGZjHsCCepBtIDqs5HM/view?usp=sharing"
                />
            </Appearance>
        </div>
    );
};

export default About;
