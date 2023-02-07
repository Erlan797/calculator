import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons(props) {
  return (
    <Button className='btn btn-block'>{props.element}</Button>
  )
}
