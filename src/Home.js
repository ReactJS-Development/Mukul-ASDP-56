import React, { Component } from 'react';
import './App.css';

const pStyle = {
  		fontSize: '25px',
  		textAlign: 'center',
  		color: 'brown',
  		border: 'solid red'
	};
class Home extends Component {
	

  render() {
    return (
      <div className="a">

      <h1 className="b">Hi This is React!</h1>

      <p className="c">This is in paragraph</p>

      <h2 className="d">This is heading 2 with css class d</h2>

      <p style={pStyle}>Hey i am paragraph with pStyle</p>

      <p className="dashed">This is dashed border paragraph</p>

      <h2 className="mix">This is mix border paragraph with blue color</h2>

      <p className="e">This is a paragraph with 2px border width</p>

      <p className="f">This is paragraph with f css class</p>

      </div>
       
    );
  }
}

export default Home;
