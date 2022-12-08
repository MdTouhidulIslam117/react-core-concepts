import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const  products = [
    {name: 'Photoshop', price: '$75.00'},
    {name: 'Illustrator', price: '$89.00'},
    {name: 'Acrobat', price: '$37.00'},
    {name:'Premiere Pro', price: '$189.00'},
    {name: 'PDF Reader', price: '$25.00'}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>Now I'm A React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const controlIncrease = () => setCount(count + 1);
  const controlDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={controlDecrease}>Decrease</button>
      <button onClick={controlIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product (props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadious: '5px',
    backgroundColor: 'cyan',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
