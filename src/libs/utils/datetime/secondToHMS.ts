interface PropTypes {
  (time: number): string
}

const secondToHMS: PropTypes = (time) => {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time / 60) % 60);
  const s = Math.floor(time % 60);
  const result = (h ? (h < 10 ? '0' + h : h) + ':' : '') +
  (m < 10 ? '0' + m : m) + ':' +
  (s < 10 ? '0' + s : s);
  return result;
};

export default secondToHMS;