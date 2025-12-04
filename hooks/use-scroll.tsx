'use client'
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState({ top: 0, left: 0 });

  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    // Ensure this runs only on the client
    const getBodyOffset = () => document.body.getBoundingClientRect();

    setBodyOffset(getBodyOffset());
    setScrollY(-getBodyOffset().top);
    setScrollX(getBodyOffset().left);

    const listener = () => {
      const newBodyOffset = getBodyOffset();
      setBodyOffset(newBodyOffset);
      setScrollY(-newBodyOffset.top);
      setScrollX(newBodyOffset.left);
      setScrollDirection(scrollTop > -newBodyOffset.top ? 'up' : 'down');
      setScrollTop(-newBodyOffset.top);
    };

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [scrollTop]);

  return { scrollY, scrollX, scrollDirection, scrollTop };
};
