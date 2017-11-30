/*
 *
 * Category
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Category extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Category" meta={[ { name: 'description', content: 'Description of Category' }]}/>
        <div className='category-head'></div>
        <div className='category-begin-title'></div>
        <div className='category-content'></div>
        <div className='category-end-title'></div>
        <div className='category-foot'></div>
      </div>
    );
  }
}

Category.contextTypes = {
  router: React.PropTypes.object
};
