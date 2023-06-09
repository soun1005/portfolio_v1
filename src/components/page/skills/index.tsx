import styles from './skills.module.css';
import Card from '@/components/common/card';
import js from '@/assets/skillIcons/js.png';
import css from '@/assets/skillIcons/css.png';
import figma from '@/assets/skillIcons/figma.png';
import git from '@/assets/skillIcons/git.png';
import github from '@/assets/skillIcons/github.png';
import html from '@/assets/skillIcons/html.png';
import jest from '@/assets/skillIcons/jest.png';
import next from '@/assets/skillIcons/next.png';
import nextW from '@/assets/skillIcons/nextW.png';
import react from '@/assets/skillIcons/react.png';
import sass from '@/assets/skillIcons/sass.png';
import ts from '@/assets/skillIcons/ts.png';
import boot from '@/assets/skillIcons/boot.png';
import tailwind from '@/assets/skillIcons/tailwind.png';
import redux from '@/assets/skillIcons/redux.png';
import { useAppContext } from '@/pages/context/AppContext';

const Skills = () => {
  const { isLightMode } = useAppContext();

  return (
    <div className={`container ${styles.container}`} id="skills">
      <h1 className="title">Skills</h1>
      <div className={styles.cardWrap}>
        <Card title="JAVASCRIPT" image={js} />
        <Card title="REACT" image={react} />
        <Card title="HTML" image={html} />
        <Card title="CSS" image={css} />
        <Card title="SCSS" image={sass} />
        <Card title="BOOTSTRAP" image={boot} />
        <Card title="TAILWIND" image={tailwind} />
        <Card title="GIT" image={git} />
        <Card title="GITHUB" image={github} />
        <Card title="REDUX" image={redux} />
        <Card title="JEST" image={jest} />
        <Card title="FIGMA" image={figma} />
        {isLightMode ? (
          <Card title="NEXT.JS" image={next} />
        ) : (
          <Card title="NEXT.JS" image={nextW} />
        )}

        <Card title="TYPESCRIPT" image={ts} />
      </div>
    </div>
  );
};

export default Skills;
