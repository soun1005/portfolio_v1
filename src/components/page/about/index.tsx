import styles from './about.module.css';
import Button from '@/components/common/button';
import Image from 'next/image';
import profile from '@/assets/me.jpeg';

const About = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className="title">About</h1>
      <div className={styles.mainWrap}>
        <div className={styles.descWrap}>
          <h2>Hello! I&apos;m Soeun,</h2>
          <p className={styles.title}>frontend developer</p>
          <p className={styles.title}>from S.Korea based in Paris, France</p>
          <p className={styles.desc}>
            I studied International commerce at university and I&apos;m very
            interested in marketing, so after university I worked for a little
            while at a web marketing agency in Seoul. When I came to France, I
            didn&apos;t speak French very well, so I worked for a Korean cargo
            company for two years, and then I had the opportunity to learn
            something I was very interested in, studying to be a developer.
            Since I was kid, my ambition was to be a fashion designer and I had
            plans to go to art school when I was high school student, but I had
            to give it up when reality hit me. I love creating something out of
            nothing, that is why I am so fascinated in coding. Learning
            something is such a fun thing to do and I will never stop learning
            for the rest of my life.
          </p>
        </div>
        <div className={styles.photoWrap}>
          <Image src={profile} alt="profile" className={styles.photo} />
        </div>
      </div>
      <Button text="VIEW CV" />
    </div>
  );
};

export default About;
