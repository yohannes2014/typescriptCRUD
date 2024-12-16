import React, { ChangeEvent, useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { listInfo, Register } from './TypeTwo';
import TypeTwoList from './TypeTwoList';

const TypeTwoForm:React.FC = () => {
    const [edit, setEdit] = useState<boolean>(false);
    const [item, setItem] = useState<listInfo>()
    const [list, setList] = useState<listInfo[]>([]);
    const [input, setInput] = useState<Register>({
        name: '',
        email: '',
        address: '',
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
       setInput({...input, [name]:value});

    }

    const deleteItem = () => {
        setList(list.filter((i)=>(i.id !== item?.id)));
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      if(!edit){  const myList:listInfo = {
            id:Math.floor(Math.random()*10000),
            name:input.name,
            email:input.email,
            address:input.address
        }
        setList([...list, myList]);
        setInput({name:'',email:'',address:''});}

        else{
            const updatedList = list.map((entry) =>
                (entry.id === item?.id ? { ...entry, ...input } : entry)
              );
              setList(updatedList);
              setInput({name:'', email:'', address:''})
              setEdit(false);
        }
    }

 
const handleSelect = (e:listInfo) => {
   setInput(e);
   setEdit(true);
   setItem(e)
}
const Update = () => {
    const updatedList = list.map((entry) =>
        (entry.id === item?.id ? { ...entry, ...input } : entry)
      );
      setList(updatedList);
      setInput({name:'', email:'', address:''})
      setEdit(false)
}


  return (
    <>
    <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Crud application</h5>
        <form className="row g-3" onSubmit={handleSubmit} noValidate>
          <div className="col-12">
            <label htmlFor="inputName4" className="form-label">
              Your Name
            </label>
            <FormControl
              type="text"
              name="name"
              className="form-control"
              id="inputName4"
              onChange={handleChange}
              value={input.name}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <FormControl
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              onChange={handleChange}
              value={input.email}
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <FormControl
              type="text"
              name="address"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={handleChange}
              value={input.address}
            />
          </div>
          <div className="text-center">
            {edit ? (
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
            <button type="button"  className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {list.map((item)=>(
    <TypeTwoList
       items={item}
       key={item.id}
       edit={edit}
       handleSelect={()=>handleSelect(item)}
       update={Update}
       deleteItem={deleteItem}
    />
  ))}
  </>
  )
}

export default TypeTwoForm
