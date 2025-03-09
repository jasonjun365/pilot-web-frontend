interface PropTypes {
  (time?: number): string
}

const getNowTime: PropTypes = (time) => {
  const now = time ? new Date(time) : new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}: ${
    minutes < 10 ? '0' + minutes : minutes
  }`;
};

export default getNowTime;