import React, { useState } from 'react'
import { MyTodo, Props } from '../ts/todotypes'
import { Button, Row, FormControl, InputGroup, FormLabel } from 'react-bootstrap'

const List = ({todolist, toDelete}:Props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [updated, setUpdated] = useState<MyTodo>(todolist)

const handleEdit = () => {
    setIsEdit(true);
  
}

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target; 

    setUpdated({...updated, [name]:value})

}

const handleUpdate = () => {
    setIsEdit(false);
}

  return (
    <>
   {isEdit ? (
    <Row className='m-4' >
        <InputGroup>
             <FormLabel className='m-2'>Name </FormLabel>
            <FormControl value={updated.name} onChange={handleChange} name='name' type='text' placeholder='Enter name' />
            <FormLabel className='m-2'>Title</FormLabel>
            <FormControl value={updated.title} type='text' onChange={handleChange} name='title' placeholder='Enter title' />
            <Button onClick={handleUpdate}>Update</Button>
        </InputGroup>
    </Row>
   ):(
        <div>
            <p>{updated.name}  {updated.title}</p>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={toDelete}>Delete</Button>
        </div>
   )}
    </>
  )
}

export default List
