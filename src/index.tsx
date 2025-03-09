// @ts-ignore
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import Root from '@/modules/AppFrame/Root';
import './mock';

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.CUSTOM_BASENAME}>
      <Root />
    </BrowserRouter>
  </Provider>
);