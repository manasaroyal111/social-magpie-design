import React from 'react'

export default function Inputeach(props) {
  return (
    <div>
      <input type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange} required></input>
    </div>
  )
}
