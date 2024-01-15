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
            <p className={styles.title}>frontend developer</p>
            <p className={styles.title}>
              from <span className={styles.textRainbow}>Seoul🇰🇷</span> based in
              Parisien region, France
            </p>
            <p className={styles.desc}>
              My friends tell me that I am positive, persistent, ambitious,
              funny and kind 😉
              <br />I enjoy being <u>productive</u> and <u>creative</u>, so I
              chose the path of a developer. <br />
              Currently I am self-studying to be a{' '}
              <span className={styles.textRainbow}>full-stack developer.</span>
              <br />
              <br />I like building projects that are not only{' '}
              <b>
                <i> stylish</i>
              </b>
              ,
              <b>
                <i> pixel-perfect</i>
              </b>
              ,
              <b>
                <i> cutting-edge</i>
              </b>
              ,
              <b>
                <i> user-friendly </i>
              </b>
              <br />
              but also written in{' '}
              <b>
                <i>clean</i>
              </b>{' '}
              and{' '}
              <b>
                <i>straightforward</i>
              </b>{' '}
              code, making it easier for developers to maintain. <br />
              Because after all, we must always strive for <b>progress</b> 😎
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
          text="VIEW CV(EN/FR)"
          link="https://drive.google.com/file/d/1Unh7TLeaLzFKbe7ftvYZB8FASqahghJm/view?usp=sharing"
        />
      </Appearance>
    </div>
  );
};

export default About;
