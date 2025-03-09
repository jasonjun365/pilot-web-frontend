import React from 'react';
import _ from 'lodash';
import emojiRegex from 'emoji-regex';
import parse from 'html-react-parser';

const emojiReg = new RegExp(emojiRegex().source);

interface PropTypes {
  text: string
}

const EmojiTrans: React.FC<PropTypes> = ({ text }) => {
  const outputText = text ? parse(text).toString() : '';

  return (
    <>
      {_.split(outputText, '').map((v: string, i: number) => {
        const match = emojiReg.test(v);
        if (match) {
          return (
            <img
              key={i}
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              className={'emoji-render ' + v}
              alt={v}
            />
          );
        } else {
          if (v === '\n') {
            return <br key={i} />;
          } else {
            return v;
          }
        }
      })}
    </>
  );
};

export default EmojiTrans;
