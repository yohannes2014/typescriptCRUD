import React from 'react'
import { Props } from './TypeTwo'
import { Alert } from 'react-bootstrap'

const TypeTwoList = ({items, edit, handleSelect, update, deleteItem}:Props) => {
  return (
    <Alert  variant='success'>
     <span className='m-3'>Name :{items.name}</span>
     <span className='m-3'>Email :{items.email}</span>
     <span className='m-3'>Address :{items.address}</span>
     {edit ? (<button onClick={update} >Update</button>):(<button onClick={handleSelect}>Edit</button>)}
      <button  onClick={deleteItem} >Delete</button>

  </Alert>
  )
}

export default TypeTwoList