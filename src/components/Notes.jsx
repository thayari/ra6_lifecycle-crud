import React, { Component } from 'react'
import Form from './Form';
import Note from './Note';
import NoteList from './NoteList';

export default class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  }

  getNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            notes: result,
          });
        },
        (error) => {
          console.error(error);
        }
      )
  }

  componentDidMount() {
    this.getNotes();
  }

  addNote = (form) => {
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: JSON.stringify(form),
    }).then(() => this.getNotes());
  }

  handleRemove = (id) => {
    fetch(process.env.REACT_APP_NOTES_URL + id, {
      method: 'DELETE',
    }).then(() => this.getNotes());
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="mt-4">Notes <button className="btn" onClick={this.getNotes}><img src={process.env.PUBLIC_URL + 'icons8-refresh-30.png'} alt=""/></button></h2> 
        </div>
        <Form onAdd={this.addNote} />
        <NoteList>
          {this.state.notes.map((item) => <Note key={item.id} {...item} handleRemove={this.handleRemove} />)}
        </NoteList>
      </div>
    )
  }
}
