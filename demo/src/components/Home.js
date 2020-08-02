import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>这是主页</h1>
      <Link to='/about' exact>about页面</Link>
      <Link to='/more' exact>more页面</Link>
    </div>
  )
}