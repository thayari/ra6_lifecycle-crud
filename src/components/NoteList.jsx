import React from 'react'

function NoteList(props) {
  return (
    <div className="row">
      {props.children}
    </div>
  )
}

export default NoteList
