import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  Variants,
  Transition,
  AnimationControls,
} from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  customAnimation?: {
    variants: Variants;
    initial: string;
    animate?: { controls: AnimationControls };
    transition: Transition;
  };
}

export const Appearance = ({ children, customAnimation, width }: Props) => {
  const ref = useRef(null);
  // element should be 0.4percent shown to have animation
  const isInView = useInView(ref, { amount: 0.5 });

  const controls = useAnimation();

  useEffect(() => {
    const show = () => {
      controls.start('visible');
    };
    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const defaultAnimation: Props['customAnimation'] = {
    variants: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    initial: 'hidden',
    animate: { controls },
    transition: { duration: 0.5, delay: 2 },
  };

  const animationProps = customAnimation || defaultAnimation;

  return (
    <div ref={ref} style={{ width, overflow: 'hidden', position: 'relative' }}>
      <motion.div
        variants={animationProps.variants}
        initial={animationProps.initial}
        transition={animationProps.transition}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};
