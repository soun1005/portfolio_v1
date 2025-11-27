import styles from './about.module.css';
import Button from '@/components/common/button';
import Image from 'next/image';
import profile from '@/assets/me.jpeg';
import { Appearance } from '@/components/framer-motion-utils/Appearance';

const About = () => {
    return (
        <div className={`container ${styles.container}`} id="about">
            <h1 className="title">About</h1>
            <div className={styles.mainWrap}>
                <Appearance
                    width="100%"
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
                        <h2>Hello! I&apos;m Soeun,</h2>
                        <p className={styles.title}>
              from <span className={styles.textRainbow}>Seoul🇰🇷</span> based in
              Parisien region, France
                        </p>
                        <p className={styles.desc}>
                            <span>After completing a one-year intensive bootcamp to become a JavaScript developer, I now specialize in React, TypeScript, and React Native.</span>
                            <span> I enjoy working proactively and tackling creative challenges. Also I like learning new technologies and applying them in practical ways. I believe that every task has its order, so I organize my work using Kanban, prioritizing efficiently to get things done faster. </span>
                            
             
                        </p>
                    </div>
                </Appearance>
                <Appearance
                    customAnimation={{
                        variants: {
                            hidden: { opacity: 0, x: 50 },
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
                    <div className={styles.photoWrap}>
            <Image src={profile} alt="profile" className={styles.photo} />
                    </div>
                </Appearance>
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
                    link="https://drive.google.com/file/d/1ruxH4t6ZkbC6Ns5ruueSdEEOZSsLQFK9/view?usp=drive_link"
                />
            </Appearance>
        </div>
    );
};

export default About;
