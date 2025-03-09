interface PropTypes {
  (username: string): string
}

const transUsername: PropTypes = (username) => {
  const result = username.slice(0, 1).toUpperCase() + username.slice(1);
  return result;
};

export default transUsername;