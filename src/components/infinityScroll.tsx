import React from 'react';

const TAGS: string[] = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

interface InfiniteLoopSliderProps {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({ children, duration, reverse = false }) => {
  return (
    <div className="loop-slider" style={{
      '--duration': `${duration}ms`,
      '--direction': reverse ? 'reverse' : 'normal'
    } as React.CSSProperties}>
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

const InfinityScrollProfiles: React.FC = () => (
  <div className="InfinityScrollProfiles-provider">
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2 === 0}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag} />
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
  </div>
);

export default InfinityScrollProfiles;
