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
import react from '@/assets/skillIcons/react.png';
import sass from '@/assets/skillIcons/sass.png';
import ts from '@/assets/skillIcons/ts.png';

const Skills = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className="title">Skills</h1>
      <div className={styles.cardWrap}>
        <Card title="JAVASCRIPT" image={js} />
        <Card title="REACT" image={react} />
        <Card title="HTML" image={html} />
        <Card title="CSS" image={css} />
        <Card title="SCSS" image={sass} />
        <Card title="GIT" image={git} />
        <Card title="GITHUB" image={github} />
        <Card title="JEST" image={jest} />
        <Card title="FIGMA" image={figma} />
        <Card title="NEXT.JS" image={next} />
        <Card title="TYPESCRIPT" image={ts} />
      </div>
    </div>
  );
};

export default Skills;
