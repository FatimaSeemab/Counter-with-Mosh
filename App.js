import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters';
import { Component } from 'react';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    console.log("hii");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => { c.value = 0; return c; });
    this.setState({ counters });
  };
  render() {
    return (
      <>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} />
        </main>
      </>
    );
  }
}

export default App;
