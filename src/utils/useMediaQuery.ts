import { useEffect, useState } from 'react';

export const useMediaQuery = (queryValue: string): boolean => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      setMatch(matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(matchMedia.matches);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};
