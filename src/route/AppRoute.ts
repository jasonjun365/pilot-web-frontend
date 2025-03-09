import React from 'react';

const Home = React.lazy(() => import('@/modules/Home'));
const Manage = React.lazy(() => import('@/modules/Manage'));
const Children = React.lazy(() => import('@/modules/Parent/Children'));
const ReRegistration = React.lazy(() => import('@/modules/Parent/ReRegistration'));
const Order = React.lazy(() => import('@/modules/Parent/Order'));
const Withdrawal = React.lazy(() => import('@/modules/Parent/Withdrawal'));
const Payment = React.lazy(() => import('@/modules/Parent/Payment'));
const Tuition = React.lazy(() => import('@/modules/Parent/Tuition'));

export default {
  '/': Home,
  '/manage': Manage,
  '/children': Children,
  '/re-registration': ReRegistration,
  '/order': Order,
  '/withdrawal': Withdrawal,
  '/payment': Payment,
  '/tuition': Tuition,
};