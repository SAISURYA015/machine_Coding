import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick}) => {
  return (
    <tr key={contact}>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button type='submit' onClick={(event) => handleEditClick(event, contact)}>Edit</button>
      </td>
    </tr>
  )
}

export default ReadOnlyRow
