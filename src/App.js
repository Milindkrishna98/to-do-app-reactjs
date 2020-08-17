/*import React from "react";
import logo from "./logo.svg";
import "./App.css";*/

// hooks here part 1
/*function milind() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" />
      <p> Learn React with Milind Krishna </p>
    </header>
    </div>
  );
}*/

// class here part 2
// class App extends React.Component{
//   render()
//   {
//     return (
//     <div className="App">
//      <h1>Milind krishna</h1>
//     <img src={logo} className="App-logo" 

//     />

//     </div>
//     );
//   }
// }


// part 3 to-do-list

import React from "react";
import logo from "./LCO-logo-white.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="app-title">LCO ToDo App</h1>
        <div className="container">
          Add an Item....
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a Todo"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Record youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
// export default class App extends Components {
//   render(){
//       return(
//           <div classname="App"> 
//           <h3>Welcome to parent</h3>
//           <Mycomp/>
//           </div>
//       );
//   }
 
//  }

//export default milind;
export default App;