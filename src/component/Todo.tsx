import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import List from './List'; 
import { MyTodo, NewList } from '../ts/todotypes';

const Todo:React.FC = () => {
 const  [todolist, setTodoList] = useState<NewList[]>([])
  const [todo, setTodo] = useState<MyTodo>({
    name:'',
    title:''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , value} = e.target;
    setTodo({...todo, [name]:value})
  }


  const handleAdd = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList:NewList ={
       id:Math.floor(Math.random()*10000),
       name:todo.name,
       title:todo.title
    }
  setTodoList([...todolist, newList]);
  setTodo({name:'',title:''});

  }

const handleDeleteList = (deleteTask:number) => {
  setTodoList(todolist.filter(item => item.id !== deleteTask));
};

  return (
    <>
      <Form onSubmit={handleAdd} >
          <InputGroup>
            <Form.Control type='text' onChange={handleChange} value={todo.name}  name='name' placeholder='Add name' />
            <Form.Control type='text' onChange={handleChange} value={todo.title}  name='title' placeholder='Add title' />
            <Button type='submit'>Add</Button>
          </InputGroup>
      </Form>
    
    {todolist.map((item,id)=>(
      <List 
       key={id}
       todolist={item}
       toDelete={() => handleDeleteList(item.id)}  
        />
    ))}

    </>
  )
}

export default Todo
   