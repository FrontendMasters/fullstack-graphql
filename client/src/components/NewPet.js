import React, {useState} from 'react'
import Select from 'react-select'

const options = [
  { value: 'CAT', label: 'Cat' },
  { value: 'DOG', label: 'Dog' }
]

export default function NewPet({onSubmit, onCancel}) {
  const [type, setType] = useState('DOG')
  const [name, setName] = useState('')

  const activeOption = options.find(o => o.value === type)

  const submit = e => {
    e.preventDefault()
    onSubmit({name, type})
  }

  const cancel = e => {
    e.preventDefault()
    onCancel()
  }

  return (
    <div className="new-pet page">
      <h1>New Pet</h1>
      <div className="box">
        <form onSubmit={submit}>
          <Select
            value={activeOption}
            defaultValue={options[0]}
            onChange={e => setType(e.value)}
            options={options}
          />

          <input
            className="input"
            type="text"
            placeholder="pet name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <a className="error button" onClick={cancel}>cancel</a>          
          <button type="submit" name="submit">add pet</button>
        </form>
      </div>
    </div>
  )
}
