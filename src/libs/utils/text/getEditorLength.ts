import _ from 'lodash';
import emojiRegex from 'emoji-regex';

const emojiReg = new RegExp(emojiRegex().source);

const getEditorLength = (txt: string, callback: (n: number) => void) => {
  let length = 0;
  if (txt) {
    const txtList = _.split(txt, '');
    txtList.forEach((s) => {
      if (emojiReg.test(s)) {
        length += 2;
      } else if (['<', '>'].includes(s)) {
        length += 4;
      } else {
        length += 1;
      }
    });
  }
  callback(length);
};

export const splitEditorTxt = (txt: string, maxLength = 100) => {
  let result: any[] = [];
  let tmpArr: string[] = [];
  let plusNum = 0;
  let count = 0;

  if (txt.length > 0) {
    const txtList = _.split(txt, '');
    txtList.forEach((s, index) => {
      if (emojiReg.test(s)) {
        plusNum = 2;
      } else if (['<', '>'].includes(s)) {
        plusNum = 4;
      } else {
        plusNum = 1;
      }

      if ((count + plusNum) > maxLength) {
        result.push(_.cloneDeep(tmpArr));
        count = _.cloneDeep(plusNum);
        tmpArr.length = 0;
        tmpArr.push(s);
      } else {
        tmpArr.push(s);
        count += _.cloneDeep(plusNum);
        if (txtList.length === index + 1) {
          result.push(_.cloneDeep(tmpArr));
          tmpArr.length = 0;
          count = 0;
        }
      }
    });
  }
  return result;
};

export default getEditorLength;