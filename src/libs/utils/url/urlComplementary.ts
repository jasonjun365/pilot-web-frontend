const readBaseUrl = process.env.CUSTOM_MEDIA_READ;

interface PropTypes {
  (str: string): string
}

const urlComplementary: PropTypes = (str) => {
  if (/^http|^data:/.test(str)) {
    return str;
  } else {
    return readBaseUrl + '/' + str;
  }
};

export default urlComplementary;
