import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      //const todos = await res.data();
      this.setState({
        todos : [...res.data]
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1> {item.name}</h1>
            {/* <span>{item.lastmodified}</span> */}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
