import React from 'react'
import { Button } from './ButtonStyles'
import { useNavigate } from 'react-router-dom'

export default function ButtonComponent(props) {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate(props.to)
  }

  return <Button onClick={handleClick}>{props.text}</Button>
}
