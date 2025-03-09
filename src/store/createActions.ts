import { createAction } from '@reduxjs/toolkit';

interface PropTypes {
  (name: string, actionNames: string[]): any
}

const createActions: PropTypes = (name, actionNames) => {
  return actionNames.reduce((p, n) => ({...p, [n]: createAction(`${name}${n}`)}), {});
};

export default createActions;