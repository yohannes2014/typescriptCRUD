import React from 'react';
import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import TodoApp from '../component/TodoApp';
import Todo from '../component/Todo';
import TypeOneForm from '../component/CRUD type-1/TypeOneForm';


const AppRoutes:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/TodoApp' element={<TodoApp />} />
      <Route path='/Todo' element={<Todo />} />
      <Route path='/TypeOne' element={<TypeOneForm/>} />
    

    </Routes>
  );
}

export default AppRoutes;
