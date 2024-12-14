import React from 'react'
import { listInfo, Props } from './TypeOne'

const TypeOneList:React.FC<Props> = ({list ,setList, inputs, setInputs, edit, setEdit, setItem}:Props) => {
 

  const handleDelete = (e:number) => {
     setList(list.filter((item=>item.id !== e)));
  }
const editList = (e:listInfo) => {
  setInputs(e);
  setItem(e);
  setEdit(true);
}

const updateList = () => {
  setEdit(true);
}
  return (
    <>
   {list.map((item)=>(
    <div key={item.id} className="alert alert-primary alert-dismissible fade show" role="alert">
     <span className='m-3'>Name :{item.name}</span>
     <span className='m-3'>Email :{item.email}</span>
     <span className='m-3'>Address :{item.address}</span>
     {edit ? (<button onClick={updateList}>Update</button>):(<button onClick={()=> editList(item)}>Edit</button>)}
     <button onClick={()=>handleDelete(item.id)} >Delete</button>
  </div>
   ))}
   </>
  )
}

export default TypeOneList
