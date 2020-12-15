import './App.css';
import React, {Component} from 'react';
import EditorComponent from './Editor/editor.js';
import SidebarComponent from './Sidebar/sidebar.js';
import SidebaritemComponent from './Sidebaritem/sidebaritem.js'

const firebase = require('firebase/firebase-app');
require('firebase/firestore');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      SelectnoteIndex: null,
      selectNotes: null,
      notes: null,
    };
  }

  render(){
    return(<div className="app-container">
      <SidebarComponent 
      selectedNoteIndex={this.state.SelectnoteIndex}
      notes = {this.state.notes}>
      </SidebarComponent>
      <EditorComponent></EditorComponent>
    </div>);
  }

  // componentDidMount = () => {
  //   firebase
  //     .firestore()
  //     .collection('notes')
  //     .onSnapshot(serverUpdate => {
  //       const notes = serverUpdate.docs.map(_doc => {
  //         const data = _doc.data();
  //         data['id'] = _doc.id;
  //         return data;
  //       });
  //       console.log(notes);
  //       this.setState({ notes: notes });
  //     });
  // }
}

export default App;
