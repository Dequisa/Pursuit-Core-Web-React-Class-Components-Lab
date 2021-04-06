import React from "react";
import reactDom from "react-dom";
import "./App.css";
import ContactList from "./ContactList";
import Feed from "./Feed";

// function App() {
//   return (
//     <div className="App-Div">
//       <Feed />
//       <ContactList />..
//     </div>
//   );
// }

// export default App;



class App extends React.Component {
  constructor(Feed, ContactList) {
    super()
    this.Feed =Feed
    this.ContactList = ContactList

  }
  render(){
    return (
      <div className="App-Div">
        <Feed />
        <ContactList />..
      </div>
    );
  }
}
export default App;