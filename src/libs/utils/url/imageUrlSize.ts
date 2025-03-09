const mediaRead = process.env.CUSTOM_MEDIA_READ;

const sizes = {
  mini: '_144x0',
  small: '_400x400',
  normal: '_500x0',
};

interface PropTypes {
  (str: string, size: 'mini' | 'small' | 'normal'): string
}

const imageUrlSize: PropTypes = (str, size) => {
  return str.replace(/\.[^.]+$/, sizes[size] + str.match(/\.[^.]+$/));
};

const testMediaRead: PropTypes = (str, size) => {
  if (mediaRead && new RegExp(mediaRead).test(str) && !new RegExp(Object.values(sizes).map((it: any) => it + '\\.').join('|')).test((str))) {
    return imageUrlSize(str, size);
  } else {
    return str;
  }
};

export default testMediaRead;

// 144x0
// 400x400
// 500x0
