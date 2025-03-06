import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const DateTimePicker: React.FC = () => {
  // Create an array of dates for the next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  // Create an array of time slots for each hour (0-23)
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const d = new Date();
    d.setHours(i, 0, 0, 0);
    return d;
  });

  // State to store the selected date and time slot
  const [selectedDate, setSelectedDate] = useState<Date>(dates[0]);
  const [selectedTime, setSelectedTime] = useState<Date>(timeSlots[0]);

  // Keen Slider for dates
  const [dateSliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      const index = slider.track.details.rel;
      setSelectedDate(dates[index]);
    },
  });

  // Keen Slider for time slots
  const [timeSliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      const index = slider.track.details.rel;
      setSelectedTime(timeSlots[index]);
    },
  });

  return (
    <div>
      <h2>Select Date</h2>
      <div ref={dateSliderRef} className="keen-slider">
        {dates.map((date, index) => (
          <div key={index} className="keen-slider__slide" style={{ padding: '1rem', textAlign: 'center' }}>
            {date.toLocaleDateString()}
          </div>
        ))}
      </div>

      <h2>Select Time</h2>
      <div ref={timeSliderRef} className="keen-slider">
        {timeSlots.map((time, index) => (
          <div key={index} className="keen-slider__slide" style={{ padding: '1rem', textAlign: 'center' }}>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h3>Selected Date & Time</h3>
        <p>
          {selectedDate.toLocaleDateString()} {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default DateTimePicker;
