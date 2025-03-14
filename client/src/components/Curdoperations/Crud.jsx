import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './Curd.css'
import data from '../../mock-data.json'
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'


const Crud = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })


  const [editableId, setEditableId] = useState(null)

  // add form
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // edit form
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };


  // add submit form
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  // edit submit form
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editableId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editableId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditableId(null);
  }


  // edit form click
  const handleEditClick = (event, contact) => {
    event.preventDefault()
    setEditableId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
     setEditableId(null)
  }

  return (
    <div style={{ margin: '50px 100px' }}>
      <h1 style={{ textAlign: 'center' }}>Curd Operations from scratch</h1>
      <div className='table-container'>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => {
                return (
                  <>
                    {editableId === contact.id ? 
                      <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> : <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} />}
                  </>
                )
              })}
            </tbody>
          </table>
        </form>
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="fullName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter an address..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a number..."
            onChange={handleAddFormChange}
          />
          <input
            type="email"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Crud
