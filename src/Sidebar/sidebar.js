import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button, Input } from '@material-ui/core';
import SidebaritemComponent from '../Sidebaritem/sidebaritem.js';

class SidebarComponent extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            addingNotes: false,
            title: null,
            note: '',
            list: 0,
        };
       
    }
    render(){
        const { notes, classes, selectedNoteIndex } = this.props;
        const listItems = [{id: 0 , item: this.state.note}];
        return(<div  className ={classes.sidebarContainer}>
            <Button onClick={this.newBtnClick}
             className={classes.newNoteBtn}>{this.state.addingNotes ? 'Cancel': 'New Note'}</Button>
             {
                 this.state.addingNotes ?
                 <div>
                     <input ref={this.myRef}  type='text'
                      className={classes.newNoteInput} 
                      placeholder="Enter Note Title"/>
                      <Button  onClick={this.handleSubmit} type="submit"  className={classes.newNoteSubmitBtn}>Submit</Button>
                 </div>: null
             }
             <List>
             {
                <ul>
                   {
                    listItems.map(item => (
                       <li>
                           {
                             <SidebaritemComponent></SidebaritemComponent>
                            }
                       </li>
                   ))}
                </ul>   
             }
             </List>
             </div>)
    }
    newBtnClick = () =>{
        console.log('new btn clicked')
        this.setState({ title: null, addingNotes: !this.state.addingNotes})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // const [items, setItems] = React.useState(this.listItems);
        // setItems([...items, listItems.find(i => !items.includes(i))]);
        // React.createElement('div',  { className: 'lisItem'})
        // this.setState({note: !this.state.note})
        this.state.note = this.myRef.current.value;
        console.log(this.state.note)
    }
    removeItem = () => {
        // setItems(items.filter(i => i !== item));
        console.log('remove one')
    }
}
export default withStyles(styles)(SidebarComponent);