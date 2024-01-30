import React from 'react';
import ReactDOM from 'react-dom';
/*import Mywebsite from './App.js';*/
/*import './index.css';*/

/* first topic 
class Demo{
  methodone()
  {
    var a=5;
    var b=10;
    var c=a+b;
    document.getElementById("root").innerHTML=c;
  }
}
var mydemo = new Demo();
mydemo.methodone();*/

/* second topic anoynous function
var a=function()
{
  var a=5;
  var b=10;
  var c= a+b;
  document.getElementById("root").innerHTML=c;
}
a();*/
/* Arrow function
var a=() =>
{
  var a=5;
  var b=10;
  var c= a+b;
  document.getElementById("root").innerHTML=c;
}
a();*/
/* Triple assignment
var n=() =>
{
  var a=5;
  if(a===5)
  {
    var a=10;
  }
  document.getElementById("root").innerHTML=a;
}
n();*/
/* How to create element
const myele = React.createElement('h6',{},"Hello world");
ReactDOM.render(myele,document.getElementById("root"))
*/
/* Without element
const myele = <h1>Hello World</h1>
ReactDOM.render(myele,document.getElementById("root"))*/
/* Wrapping Elements
const myele = <div>
  <h1>welcome</h1>
  <h2>hii</h2>
  <p>how r u</p>
</div>
ReactDOM.render(myele,document.getElementById('root'));*/
/* how to create element styles
var mystyle={
  color:'green',
  textAllign:'center'

}
const myele = <div style={mystyle}>
  <h1>welcome</h1>
  <h2>Hi</h2>
  <p>How are you?</p>
</div>
ReactDOM.render(myele,document.getElementById('root'));*/
/* Calling of index.css
const myele = <div>
  <h1 className="header">welcome</h1>
  <h2>Hi!</h2>
  <p>How are you?</p>
</div>
ReactDOM.render(myele,document.getElementById('root'));*/
/* components of React- functional component
function Header(){
  return <h1>Global Tech</h1>
}
ReactDOM.render(<Header />,document.getElementById('root'))*/
/*
function Header(){
  return <div>
    <h1>Global Tech</h1>
    <h2>Mylogo</h2>
  </div>
}
function Sidebar(){
  return<h1>Sidebar</h1>
}

function Navbar(){
  return<h2>Nav bar</h2>
}
function Mywebsite(){
  return <div>
  <Header />
  <Sidebar />
  <Navbar />
  </div>
}
ReactDOM.render(<Mywebsite />,document.getElementById('root'));*/
/* Class Component
class Mywebsite extends React.Component
{
  render()
  {
    return<h1>Welcome</h1>
  }
}
class Mynewwebsite extends React.Component
{
  render()
  {
    return<div>
      <Mywebsite />
      <h1>NJ Tech</h1>
    </div>
  }
}
ReactDOM.render(<Mynewwebsite />,document.getElementById('root'));*/

/* Class component Mynewebsite importing from App.js 
class Mynewwebsite extends React.Component
{
  render()
  {
      return <div>
        <Mywebsite />
        <h1>Nithya Techno Wizard</h1>
      </div>
    }
}

  ReactDOM.render(<Mynewwebsite />,document.getElementById('root'));*/






