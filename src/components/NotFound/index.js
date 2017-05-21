// @flow
import React from 'react';
import { Link } from 'react-router';

const NotFound = () =>
  <div className="container">
    <p>Woah! This URL doesn't seem to exist.</p>
    <p><Link to="/">Let's get you back on track →</Link></p>
  </div>;

export default NotFound;