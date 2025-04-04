import React from 'react';
import PropTypes from '../interface';

const Svg: React.FC<PropTypes> = ({ width=17, height=17 }) => {
  
  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.833 8.005a7.333 7.333 0 1 1-14.666 0 7.333 7.333 0 0 1 14.666 0z" fill="#FC223B" />
        <path d="m12.935 4.931-3.94 7.207H6.644L5.288 5.492c-.022-.256-.094-.454-.193-.575a.734.734 0 0 0-.462-.242l.104-.266h2.14c.229 0 .4.058.511.17.113.106.184.285.211.536l.75 4.266 2.145-4.087c.022-.048.045-.092.058-.14.014-.039 0-.073 0-.111 0-.097-.103-.213-.18-.271-.085-.058-.242-.087-.399-.102l.085-.266h2.433c.161 0 .287.024.377.083.094.058.143.135.143.217-.009.049-.013.092-.027.126a.195.195 0 0 1-.05.101z" fill="#fff" />
      </svg>
    </div>
  );
};

export default Svg;