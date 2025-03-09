import axios from 'axios';
import MockAdapter  from 'axios-mock-adapter';
import { faker } from '@faker-js/faker';
import {myChildrenList, randomChildInfo, tuitionList} from '@/faceData';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);
mock.onGet('/api/v1/u/info/abc').reply(200, {
  rc: 'OK',
  message: '',
  data: {
    username: 'John Smith',
    email: 'johndSmith@gmail.com',
    role: 'parent', // administrator, teacher
    enabled: true,
  }
});
mock.onPost('/api/v1/u/signin').reply(200, {
  rc: 'OK',
  message: 'Successfully signin',
  data: {
    id: 1020,
    username: 'John Smith',
    email: 'johndSmith@gmail.com',
    role: 'parent', // administrator, teacher
    enabled: true,
    token: 'dkjfewksdjfuwhruehjkjsdhfjaos'
  }
});
mock.onPost('/api/v1/u/signup').reply(200, {
  rc: 'OK',
  message: 'Successfully signup',
  data: null
});

// /api/v1/parent/children/list??page=1&phrase=&size=10&sort=recent
mock.onGet(/\/api\/v1\/parent\/children\/list?.*/).reply(200, {
  rc: 'OK',
  message: '',
  data: {
    list: myChildrenList,
    total: myChildrenList.length,
  }
});
mock.onPost('/api/v1/parent/children').reply(200, {
  rc: 'OK',
  message: 'Successfully signin',
  data: randomChildInfo
});
mock.onPut('/api/v1/parent/children').reply(200, {
  rc: 'OK',
  message: 'Successfully signin',
  data: null
});
mock.onGet(/\/api\/v1\/parent\/tuition\/list?.*/).reply(200, {
  rc: 'OK',
  message: '',
  data: {
    list: tuitionList,
    total: tuitionList.length,
  }
});
