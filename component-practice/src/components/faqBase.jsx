import { useState } from 'react';
import { FaqAnswer } from './faqAnswer';

export const FaqBase = ({ data, show, setIndex, i }) => {
  const { question, answer } = data;
  return (
    <div className="w-6/12 mx-auto mb-2 bg-gray-50 p-4">
      <div
        className="flex justify-between"
        onClick={() => {
          if (show) return setIndex(null);
          setIndex(i);
        }}
      >
        <p className="font-bold ">{question}</p>
        <span>⬇️</span>
      </div>
      {show && <FaqAnswer data={answer} />}
    </div>
  );
};
