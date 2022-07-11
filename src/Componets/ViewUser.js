import React from 'react'
import { useParams } from 'react-router-dom'

function ViewUser() {
    let params = useParams()
  return (
    <>
    <h1>WLECOME ESWAR</h1>
    <h2>{params.id}</h2>
    </>
  )
}

export default ViewUser