import React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const FormDataRow = ({
  data,
  index,
  editedIndex,
  formData,
  handleEdit,
  handleDelete,
  handleChange,
  handleSave,
}) => {
  const isBeingEdited = editedIndex === index;
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
  };
  console.log(showModal)

  return (
    <tr key={index}>
      <td>
        {isBeingEdited ? (
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange(e, "firstName", index)}
          />
        ) : (
          data.firstName
        )}
      </td>
      <td>
        {isBeingEdited ? (
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange(e, "lastName", index)}
          />
        ) : (
          data.lastName
        )}
      </td>
      <td>
        {isBeingEdited ? (
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) => handleChange(e, "fatherName", index)}
          />
        ) : (
          data.fatherName
        )}
      </td>
      <td>
        {isBeingEdited ? (
          <input
            type="text"
            value={formData.motherName}
            onChange={(e) => handleChange(e, "motherName", index)}
          />
        ) : (
          data.motherName
        )}
      </td>
      <td>
        {isBeingEdited ? (
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange(e, "address", index)}
          />
        ) : (
          data.address
        )}
      </td>
      <td>
        
        <div className="buttons">
          
          {isBeingEdited ? (
            <>
            
            <button onClick={() => handleSave(index)}>Save</button>
            <button onClick={()=> handleCancel() }>cancel</button>
            </>
            
            
            
            
          ) : (
            <>
              <EditIcon onClick={() => handleEdit(index)} />
              <DeleteIcon onClick={() => handleDelete(index)} />
            </>
          )}
          
          
        </div>
      </td>
    </tr>
  );
};

export default FormDataRow;
