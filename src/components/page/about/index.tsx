import styles from './about.module.css';
import Button from '@/components/common/button';
import { Appearance } from '@/components/framer-motion-utils/Appearance';
import { useAppContext } from '@/pages/context/AppContext';
import { translations } from '@/locales/translations';

const About = () => {
    const { lang } = useAppContext();
    const T = translations.about;
    const experiences = T.experiences[lang];

    return (
        <div className={`container ${styles.container}`} id="about">
            <div className={styles.mainWrap}>
                <div className={styles.bioCol}>
                    <h1 className="title">{T.title[lang]}</h1>
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
                            <h2>{T.greeting[lang]}</h2>
                            <p className={styles.title}>
                                {T.from[lang]} <span className={styles.textRainbow}>Seoul🇰🇷</span> {T.location[lang]}
                            </p>
                            <p className={styles.desc}>
                                <span>{T.bio[lang]}</span>
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
                            <h1 className="title">{T.experienceTitle[lang]}</h1>
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
                    text={T.viewCv[lang]}
                    link={translations.cvLink[lang]}
                />
            </Appearance>
        </div>
    );
};

export default About;
