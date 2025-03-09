interface PropTypes {
  (str: string): any
}

const oldCopyText: PropTypes = (str) => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', String(str));
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(input);
};

const copyText: PropTypes = (str) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(str);
  }
  return new Promise((resolve, reject) => {
    try {
      oldCopyText(str);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

export default copyText;