import "./Modal.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

export const ModalAdd = ({ onChange, visible, setVisible }) => {
  const [helicopterTitle, setHelicopterTitle] = useState("");
  const [helicopterPrice, setHelicopterPrice] = useState("");
  const [helicopterDescription, setHelicopterDescription] = useState("");

  const addProduct = () => {
    if (isFormValid) {
      const newProduct = {
        id: generateUniqueId(),
        title: helicopterTitle,
        price: helicopterPrice,
        description: helicopterDescription,
        image:
          "https://cdn-icons-png.flaticon.com/512/4768/4768201.png",
      };

      function generateUniqueId() {
        return (
          Date.now().toString() + Math.floor(Math.random() * 1000).toString()
        );
      }

      onChange(newProduct);
      setVisible(false);

      setHelicopterTitle("");
      setHelicopterPrice("");
      setHelicopterDescription("");
    }
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if (helicopterTitle && helicopterPrice && helicopterDescription) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <Dialog
      header="Новое объявление"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
    >
      <div className="input-container">
        <label htmlFor="title">Заголовок</label>
        <InputText
          id="title"
          value={helicopterTitle}
          onChange={(e) => {
            setHelicopterTitle(e.target.value);
            validateForm();
          }}
        />
      </div>

      <div className="input-container">
        <label htmlFor="price">Стоимость</label>
        <InputText
          id="price"
          value={helicopterPrice}
          onChange={(e) => {
            setHelicopterPrice(e.target.value);
            validateForm();
          }}
        />
      </div>

      <div className="input-container">
        <label htmlFor="description">Описание</label>
        <InputText
          id="description"
          value={helicopterDescription}
          onChange={(e) => {
            setHelicopterDescription(e.target.value);
            validateForm();
          }}
        />
      </div>

      <Button
        label="Добавить"
        raised
        icon="pi pi-check"
        onClick={addProduct}
        autoFocus
        disabled={!isFormValid}
      />
    </Dialog>
  );
};
