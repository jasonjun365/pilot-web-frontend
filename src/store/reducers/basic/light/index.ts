import { createReducer } from '@reduxjs/toolkit';
import space from './space';

const lightStatus = localStorage.getItem('light') ? localStorage.getItem('light') !== 'false' : false;

const {
  actions
} = space;

interface PropTypes {
  open: boolean
}

const initialState: PropTypes = {
  open: lightStatus,
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.open, (state) => {
      state.open = true;
      localStorage.setItem('light', 'true');
    })
    .addCase(actions.close, (state) => {
      state.open = false;
      localStorage.setItem('light', 'false');
    });
  }
);

export default data;
