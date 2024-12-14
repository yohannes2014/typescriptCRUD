import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import TypeOneList from './TypeOneList';
import { listInfo, Register } from './TypeOne';

const TypeOneForm: React.FC = () => {
  const [list, setList] = useState<listInfo[]>([]);
  const [item, setItem] = useState<listInfo | null>(null);
  const [inputs, setInputs] = useState<Register>({ name: '', email: '', address: '' });
  const [edit, setEdit] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (edit && item) {
      // Update the existing item in the list
      const updatedList = list.map((entry) =>
        (entry.id === item.id ? { ...entry, ...inputs } : entry)
      );
      setList(updatedList);
    } else {
      // Add a new item to the list
      const newItem: listInfo = {
        id: Math.floor(Math.random() * 10000),
        ...inputs,
      };
      setList([...list, newItem]);
    }

    // Reset the form
    setInputs({ name: '', email: '', address: '' });
    setEdit(false); // Reset edit mode after submit
    setItem(null); // Clear the selected item
  };

  const handleReset = () => {
    setInputs({ name: '', email: '', address: '' });
    setEdit(false); // Reset edit mode
    setItem(null); // Clear the selected item
  };

  return (
    <>
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Vertical Form</h5>
            <form className="row g-3" onSubmit={handleSubmit} noValidate>
              <div className="col-12">
                <label htmlFor="inputName4" className="form-label">
                  Your Name
                </label>
                <FormControl
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  className="form-control"
                  id="inputName4"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <FormControl
                  type="email"
                  onChange={handleChange}
                  value={inputs.email}
                  name="email"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <FormControl
                  type="text"
                  onChange={handleChange}
                  value={inputs.address}
                  name="address"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
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
                <button type="button" onClick={handleReset} className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <TypeOneList
        list={list}
        setList={setList}
        setItem={setItem}
        setInputs={setInputs}
        edit={edit}
        setEdit={setEdit}
        inputs={inputs}
      />
    </>
  );
};

export default TypeOneForm;

