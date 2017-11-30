/**
*
* Category
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Category extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.id
    };
  }

  // componentWillMount(){
  //   this.setState({
  //     id:this.props.id
  //   });
  // }

  click = (event) => {
    this.context.router.history.push('/category/' + this.state.id);
  }

  render() {
    return (
      <div className='category' onClick={this.click}>
        <div className='cat-thumb'><img src={this.props.thumb}/></div>
        <div className='cat-title'>{this.props.title}</div>
      </div>
    );
  }
}

Category.contextTypes = {
  router: React.PropTypes.object
};
