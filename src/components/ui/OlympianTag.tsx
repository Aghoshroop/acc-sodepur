import React from 'react';

type OlympianTagProps = {
  variant?: 'default' | 'text';
};

const OlympianTag = ({ variant = 'default' }: OlympianTagProps) => {
  if (variant === 'text') {
    return (
      <span className="inline-block align-middle ml-1.5 px-1 py-[2px] text-[8px] md:text-[10px] text-track-red rounded-[2px] font-secondary tracking-[0.2em] uppercase leading-none border border-track-red/30 shadow-[0_0_8px_rgba(200,50,43,0.1)] whitespace-nowrap">
        OLYMPIAN
      </span>
    );
  }

  return (
    <span className="inline-block align-middle ml-1.5 px-[6px] py-[2px] text-[8px] md:text-[10px] bg-track-red text-chalk-white rounded-[2px] font-secondary tracking-[0.2em] uppercase leading-none border border-transparent shadow-[0_0_8px_rgba(200,50,43,0.4)] whitespace-nowrap">
      OLYMPIAN
    </span>
  );
};

export default OlympianTag;
