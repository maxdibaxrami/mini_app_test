// @ts-nocheck
import React, { useRef } from "react"
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react"

interface WheelProps {
  perspective?: string;
  length: number;
  loop?: boolean;
  initIdx?: number;
  setValue?: (index: number, distance: number) => void;
  label?: string;
  width: number;
}

const Wheel: React.FC<WheelProps> = (props) => {
  const perspective = props.perspective || "center"
  const wheelSize = 20
  const slides = props.length
  const slideDegree = 360 / wheelSize
  const slidesPerView = props.loop ? 9 : 1
  const [sliderState, setSliderState] = React.useState<any>(null)
  const size = useRef<number>(0)
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
      const height = size.current
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      )
    },
    created: (s: KeenSliderInstance) => {
      size.current = s.size
    },
    updated: (s: KeenSliderInstance) => {
      size.current = s.size
    },
    detailsChanged: (s: KeenSliderInstance) => {
      setSliderState(s.track.details)
    },
    rubberband: !props.loop,
    mode: "free-snap",
  })

  const [sliderRef, slider] = useKeenSlider(options.current)

  const [radius, setRadius] = React.useState<number>(0)

  React.useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2)
  }, [slider])

  function slideValues() {
    if (!sliderState) return []
    const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0

    const values = []
    for (let i = 0; i < slides; i++) {
      const distance = sliderState
        ? (sliderState.slides[i].distance - offset) * slidesPerView
        : 0
      const rotate =
        Math.abs(distance) > wheelSize / 2
          ? 180
          : distance * (360 / wheelSize) * -1
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
      }
      // Add 1 to i to start the value from 1 instead of 0
      const value = props.setValue
        ? props.setValue(i + 1, sliderState.abs + Math.round(distance)) // i + 1 to start from 1
        : i + 1 // i + 1 to start from 1
      values.push({ style, value })
    }
    return values
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
          {slideValues().map(({ style, value }, idx) => (
            <div className="wheel__slide" style={style} key={idx}>
              <span>{value}</span>
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
  )
}

export default Wheel
