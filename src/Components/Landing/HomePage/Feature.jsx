import React from 'react';

const Feature = () => {
  return (
    <section className="max-w-[1400px] mx-auto">
      <div className="border-y-2 bg-white border-black/50 flex gap-[20px] text-xl font-bold overflow-hidden select-none group/scroll">
        <ul className="py-7 flex justify-between gap-[20px] shrink-0 animate-scroll group-hover/scroll:[animation-play-state:paused]">
          {Array.from(Array(4).keys()).map((i) => (
            <li className="flex items-center gap-2" key={i}>
              <span>✨</span>
              <span>Fragrance-free face cream</span>
              <span>✨</span>
              <span>Hydrating face moisturizer</span>
              <span>✨</span>
              <span>Wrinkle reduction cream</span>
              <span>✨</span>
              <span>Daily facial moisturizer</span>
            </li>
          ))}
        </ul>
        <ul
          aria-hidden="true"
          className="py-7 flex justify-between gap-[20px] shrink-0 animate-scroll group-hover/scroll:[animation-play-state:paused]">
          {Array.from(Array(4).keys()).map((i) => (
            <li className="flex items-center gap-2" key={i}>
              <span>✨</span>
              <span>Fragrance-free face cream</span>
              <span>✨</span>
              <span>Hydrating face moisturizer</span>
              <span>✨</span>
              <span>Wrinkle reduction cream</span>
              <span>✨</span>
              <span>Daily facial moisturizer</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
