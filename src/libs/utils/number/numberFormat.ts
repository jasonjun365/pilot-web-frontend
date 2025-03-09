interface PropTypes {
  (num: number): string | number
}

const numberFormat: PropTypes = (num) => {
  if (num === 0) return 0;
  let val = Math.abs(num);
  if (val < 1000) return val;
  // thousands, millions, billions etc..
  let s = ['', 'K', 'M', 'B', 'T'];
  let sNum = Math.floor(String(val).length / 3);
  let sVal = val / Math.pow(1000, sNum);

  if (sNum > 1 && sNum < 5 && sVal < 1) {
    sNum = sNum - 1;
    sVal = sVal * 1000;
  } else if (sNum >= 5) {
    sVal = sVal * Math.pow(1000, sNum - 4);
    sNum = 4;
  }
  if (sVal % 1 !== 0) {
    sVal = Math.floor(sVal * 10) / 10;
  }

  // handle long decimal values
  if (String(sVal).split('.')[1]?.length > 2) {
    sVal = Math.floor(Number(sVal) * 10) / 10;
  }

  return (num < 0 ? '-' : '') + sVal + s[sNum];
};

export default numberFormat;