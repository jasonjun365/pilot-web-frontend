import React from 'react';
const Home = React.lazy(() => import('@/modules/Home'));
const SignIn = React.lazy(() => import('@/modules/SignIn'));
const SignUp = React.lazy(() => import('@/modules/SignUp'));

export default {
  '/': Home,
  '/signin': SignIn,
  '/signup': SignUp,
};