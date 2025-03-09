import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import space from './space';

const {
  actions,
  // thunks
} = space;

interface PropTypes {
  toolsDrawer: {
    open: boolean
  }
}

const initialState: PropTypes = {
  toolsDrawer: {
    open: true,
  },
};

const data = createReducer(
  initialState,
  builder => { builder
    .addCase(actions.reset, (state) => {
      state.toolsDrawer = initialState.toolsDrawer;
    })
    .addCase(actions.setToolsDrawer, (state, action: PayloadAction<object>) => {
      if (action.payload) {
        state.toolsDrawer = {...state.toolsDrawer, ...action.payload};
      }
    });
  }
);

export default data;
