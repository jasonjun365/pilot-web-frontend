interface PropTypes {
  (time?: number): string
}

const getNowDate: PropTypes = (time) => {
  const now = time ? new Date(time) : new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const nowDate = now.getDate();
  return `${year}-${month < 10 ? '0' + month : month}-${
    nowDate < 10 ? '0' + nowDate : nowDate
  }`;
};

export default getNowDate;