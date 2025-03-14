import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          value={editFormData.address}
          placeholder="Enter a address..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          value={editFormData.phoneNumber}
          placeholder="Enter a number..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          value={editFormData.email}
          placeholder="Enter an email..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='submit' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  )
}

export default EditableRow
