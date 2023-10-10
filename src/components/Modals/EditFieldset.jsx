// import { Dialog } from 'primereact/dialog'
// import { Button } from 'primereact/button'

// export const ModalEdit = ({ product, onDelete, visible, setVisible }) => {
//   return (
//     <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
//       Изменить
//     </Dialog>
//   )
// }

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "./Modal.css";

import React, { useState, useEffect } from "react";

export const EditFieldset = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  useEffect(() => {
    setEditedProduct(product); // Устанавливаем начальное значение продукта при изменении product props
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSaveClick = () => {
    onSave(editedProduct);
  };

  return (
    <div className="edit-fieldset">
      <h2>Edit Fieldset</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={editedProduct.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={editedProduct.description}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};
