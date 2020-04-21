import React from 'react'

function Note({ id, content, handleRemove }) {
  return (
    <div className="col-sm-6">
      <div className="card mb-4">
        <div>
          <button type="button" className="mr-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={() => handleRemove(id)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div className="card-body">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Note
