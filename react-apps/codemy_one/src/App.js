import React, { Component } from 'react';

const data = [
  { id: 1, name: 'Jazz Garcha', email: 'jazz@garcha.com' },
  { id: 2, name: 'Johnny Kong', email: 'johnny.kong@gmail.com'},
  { id: 3, name: 'Kelli Ryan', email: 'kelli.ryan@gmail.com'}
  ]

const Contact = (props) =>
  <div className='pure-u-1-3'>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>;

class App extends Component {
  render() {
    return (
      <div className="App pure-g">
        {data.map((info) =>
          <Contact {...info} />
        )}
      </div>
    );
  }

}

export default App;
