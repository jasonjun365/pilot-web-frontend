import { configureStore} from '@reduxjs/toolkit';
import reducer from '@/store/reducers';

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
  reducer,
});

export default store;
