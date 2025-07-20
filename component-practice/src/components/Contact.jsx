import { useState } from 'react';
import { faq } from '../utilities/constant';
import { FaqBase } from './faqBase';

export const Contact = () => {
  const [showIndex, setShowIndex] = useState(null);
  return (
    <div className="mt-7">
      <p className="text-center text-3xl font-bold mb-10">
        Frequently Asked Questions
      </p>
      {faq.map((f, i) => (
        <FaqBase
          key={i}
          data={f}
          show={i == showIndex}
          i={i}
          setIndex={i => setShowIndex(i)}
        />
      ))}
    </div>
  );
};
