import React from "react";
import { Redirect } from "react-router-dom";
import TabLayout from "../layouts/TabLayout";
import BlankLayout from "../layouts/BlankLayout";
import Index from '../components/index';
import Find from '../components/find';
import Cart from '../components/cart';
import Sort from '../components/sort';
import Mine from '../components/mine';

export default [{
  component: BlankLayout,
  routes: [
    {
      path: '/',
        component: TabLayout,
        routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to={"/index"} />
        },
        {
          path: '/index',
          component: Index,
        },
        {
          path: '/find',
          component: Find
        },
        {
          path: '/cart',
          render: () => <Redirect to={"/cart/all"} />
        },
        {
          path: '/cart',
          component: Cart,
        },
        {
          path: '/mine',
          component: Mine,
        },
        {
          path: '/sort',
          component: Sort,
        }
      ]
    },

  ]
}]
