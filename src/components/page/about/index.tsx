import styles from './about.module.css';
import Button from '@/components/common/button';
import Image from 'next/image';
import profile from '@/assets/me.jpeg';
import { Appearance } from '@/components/framer-motion-utils/Appearance';
import { easeInOut } from 'framer-motion';

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
            transition: { duration: 0.4, delay: 0.5, ease: easeInOut },
          }}
        >
          <div className={styles.descWrap}>
            <h2>Hello! I&apos;m Soeun,</h2>
            <p className={styles.title}>frontend developer</p>
            <p className={styles.title}>from S.Korea based in Paris, France</p>
            <p className={styles.desc}>
              I studied International Trade at university in Korea and worked as
              a project manager at a marketing company in Seoul for a little
              while. After that, I worked for a Korean logistics company in
              Paris, France for two years. I had a great opportunity to start
              attending a school where I could learn to be a developer, which is
              something I&apos;ve always wanted to do. I have always enjoyed
              learning new things and creating something, and I will never stop
              learning, just as I always have.
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
            transition: { duration: 0.4, delay: 0.5, ease: easeInOut },
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
          transition: { duration: 0.4, delay: 0.5, ease: easeInOut },
        }}
      >
        <Button
          text="VIEW CV(EN/FR)"
          link="https://drive.google.com/file/d/1FdRoo3PKzmyJbDq7XZKlyMNRWUnF7Haz/view?usp=sharing"
        />
      </Appearance>
    </div>
  );
};

export default About;
