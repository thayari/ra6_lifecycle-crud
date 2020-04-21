import React, {useState} from 'react'

function Form({onAdd}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(form);
  }

  const [form, setForm] = useState({
    content: '',
  })

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea onChange={handleChange} className="form-control" name="content" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  )
}

export default Form
