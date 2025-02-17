// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";

// Language interface for types
export interface Language {
  value: string;
  label: string;
  description: string;
}

export const languages: Language[] = [
  { value: "en", label: "English", description: "English" },
  { value: "ru", label: "русский", description: "Russian" },
  { value: "fa", label: "فارسی", description: "Persian" },
  { value: "ar", label: "عربي", description: "Arabic" },
];

// WheelProps interface
interface WheelProps {
  perspective?: string;
  length: number;
  loop?: boolean;
  initIdx?: number;
  setValue?: (index: number, language: Language) => void;
  label?: string;
  width: number;
}

export const LanguageWheel: React.FC<WheelProps> = (props) => {
  const perspective = props.perspective || "center";
  const wheelSize = 20;
  const slides = props.length;
  const slideDegree = 360 / wheelSize;
  const slidesPerView = props.loop ? 9 : 1;
  const [sliderState, setSliderState] = useState<any>(null);
  const size = useRef<number>(0);
  const options = useRef<any>({
    slides: {
      number: slides,
      origin: props.loop ? "center" : "auto",
      perView: slidesPerView,
    },
    vertical: true,
    initial: props.initIdx || 0,
    loop: props.loop,
    dragSpeed: (val: number) => {
      const height = size.current;
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      );
    },
    created: (s: KeenSliderInstance) => {
      size.current = s.size;
    },
    updated: (s: KeenSliderInstance) => {
      size.current = s.size;
    },
    detailsChanged: (s: KeenSliderInstance) => {
      setSliderState(s.track.details);
    },
    rubberband: !props.loop,
    mode: "free-snap",
  });

  const [sliderRef, slider] = useKeenSlider(options.current);

  const [radius, setRadius] = useState<number>(0);

  useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2);
  }, [slider]);

  function slideValues() {
    if (!sliderState) return [];
    const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0;

    const values = [];
    for (let i = 0; i < languages.length; i++) {
      const distance = sliderState
        ? (sliderState.slides[i].distance - offset) * slidesPerView
        : 0;
      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1;
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      };
      // Call the setValue function to pass selected language
      const language = languages[i];
      if (props.setValue) {
        props.setValue(i, language);
      }
      values.push({ style, language });
    }
    return values;
  }

  return (
    <div
      className={"wheel keen-slider wheel--perspective-" + perspective}
      ref={sliderRef}
    >
      <div
        className="wheel__shadow-top"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
      <div className="wheel__inner">
        <div className="wheel__slides" style={{ width: props.width + "px" }}>
          {slideValues().map(({ style, language }, idx) => (
            <div className="wheel__slide" style={style} key={idx}>
              <span>{language.label}</span>
            </div>
          ))}
        </div>
        {props.label && (
          <div
            className="wheel__label"
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {props.label}
          </div>
        )}
      </div>
      <div
        className="wheel__shadow-bottom"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </div>
  );
};

