import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
class App extends Component {
  state = {
    ninjas : [
      {name: "Aishu", age: "16", belt: "black", id: 1},
      {name: "Nidhi", age: "20", belt:"blue", id: 2},
      {name: "Nik", age: "21", belt: "green", id: 3}
    ]
  }
  addNinja = (ninja) => {
    //console.log(ninja); if not in AddNinja
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    //console.log(id)
    let ninjas = this.state.ninjas.filter(ninjas => {
      return ninjas.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevStates){
    console.log('component updated');
    console.log(prevProps, prevStates);
  }
  render () {//function App() 
    return (
      <div className="App">
        <h1>My Ninjas React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas }/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
