import {useState, useEffect} from 'react';

interface PropTypes {
  countdown: number
}

let cdTimerId: any = null;

const useCountdown = ({countdown}: PropTypes) => {
  const [value, setValue] = useState<number>(countdown);

  const destroy = () => {
    clearInterval(cdTimerId);
    cdTimerId = null;
  };

  useEffect(() => {
    if (value <= 0) {
      destroy();
    }
  }, [value]);

  useEffect(() => {
    return () => {
      destroy();
    };
  }, []);

  useEffect(() => {
    if (cdTimerId) clearInterval(cdTimerId);
    if (countdown > 0) {
      setValue(countdown);
      cdTimerId = setInterval(() => {
        setValue((value) => (value ? value - 1 : 0));
      }, 1000);
    }
  }, [countdown]);

  return {cdv: value};
};

export default useCountdown;