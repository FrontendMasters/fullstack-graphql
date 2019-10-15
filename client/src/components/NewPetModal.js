import React from 'react'

import NewPet from './NewPet'

export default function NewPetModal({onSubmit, onCancel}) {
  return (
    <div className="row center-xs">
      <div className="col-xs-8">
        <NewPet onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  )
}
