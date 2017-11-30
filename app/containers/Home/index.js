/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Category from 'components/Category';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      categories:[]
    };
  }

  componentWillMount(){
    fetch('http://localhost:8000/api/categoryIndex', {
      method: 'GET'
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        categories:json.categories
      })
    }.bind(this))
  }

render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div className='head'></div>
        <div className='begin-title'>
          <h1>ALTWARE</h1>
          <h3>find open-source alternatives to compete with proprietary software</h3>
        </div>
        <div className='content'>
          <div className='content-title'>
            <h3>Software</h3>
          </div>
          <div className='categories'>
            {this.state.categories.map((c, i) => (
                <Category title={c.name} id={c.id} key={i} thumb={require('../../images/thumb.png')} />
              ))}
          </div>
        </div>
        <div className='end-title'></div>
        <div className='footer'></div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
