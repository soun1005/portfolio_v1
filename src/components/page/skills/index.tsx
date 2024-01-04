import styles from './skills.module.css';
import Card from '@/components/common/card';
import js from '@/assets/skillIcons/js.png';
// import css from '@/assets/skillIcons/css.png';
import figma from '@/assets/skillIcons/figma.png';
import git from '@/assets/skillIcons/git.png';
// import github from '@/assets/skillIcons/github.png';
// import html from '@/assets/skillIcons/html.png';
import jest from '@/assets/skillIcons/jest.png';
import next from '@/assets/skillIcons/next.png';
import nextW from '@/assets/skillIcons/nextW.png';
import react from '@/assets/skillIcons/react.png';
import sass from '@/assets/skillIcons/sass.png';
import ts from '@/assets/skillIcons/ts.png';
import boot from '@/assets/skillIcons/boot.png';
import tailwind from '@/assets/skillIcons/tailwind.png';
import redux from '@/assets/skillIcons/redux.png';
import nodejs from '@/assets/skillIcons/nodejs.webp';
import expressjs from '@/assets/skillIcons/expressjs.png';
import expressjsW from '@/assets/skillIcons/expressjsW.png';
import mongodb from '@/assets/skillIcons/mongodb.png';
// import postgre from '@/assets/skillIcons/postgres.png';
import { useAppContext } from '@/pages/context/AppContext';
import { Appearance } from '@/components/framer-motion-utils/Appearance';

const Skills = () => {
  const { isLightMode } = useAppContext();

  return (
    <div className={`container ${styles.container}`} id="skills">
      <h1 className="title">Skills</h1>

      <div className={styles.cardWrap}>
        {/* frontend */}
        <div className={styles.group}>
          <h2>FRONT-END</h2>

          <div className={styles.skillWrap}>
            <Appearance>
              <Card title="JAVASCRIPT" image={js} />
            </Appearance>
            <Appearance>
              <Card title="TYPESCRIPT" image={ts} />
            </Appearance>

            <Appearance>
              <Card title="REACT" image={react} />
            </Appearance>
            <Appearance>
              {isLightMode ? (
                <Card title="NEXT.JS" image={next} />
              ) : (
                <Card title="NEXT.JS" image={nextW} />
              )}
            </Appearance>
            <Appearance>
              <Card title="REDUX" image={redux} />
            </Appearance>
          </div>
        </div>

        {/* backend */}
        <div className={styles.group}>
          <h2>BACK-END</h2>
          <div className={styles.skillWrap}>
            <Appearance>
              <Card title="NODE JS" image={nodejs} />
            </Appearance>

            <Appearance>
              {isLightMode ? (
                <Card title="EXPRESS.JS" image={expressjs} />
              ) : (
                <Card title="EXPRESS.JS" image={expressjsW} />
              )}
            </Appearance>
            <Appearance>
              <Card title="MONGODB" image={mongodb} />
            </Appearance>
          </div>
        </div>

        {/* design */}
        <div className={styles.group}>
          <h2>DESIGN</h2>
          <div className={styles.skillWrap}>
            <Appearance>
              <Card title="SCSS" image={sass} />
            </Appearance>
            <Appearance>
              <Card title="BOOTSTRAP" image={boot} />
            </Appearance>
            <Appearance>
              <Card title="TAILWIND" image={tailwind} />
            </Appearance>
            <Appearance>
              <Card title="FIGMA" image={figma} />
            </Appearance>
          </div>
        </div>

        {/* other */}
        <div className={styles.group}>
          <h2>OTHER</h2>
          <div className={styles.skillWrap}>
            <Appearance>
              <Card title="GIT" image={git} />
            </Appearance>
            <Appearance>
              <Card title="JEST" image={jest} />
            </Appearance>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
