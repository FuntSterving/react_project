import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./ProductCard.css";
import { Fieldset } from "primereact/fieldset";
import { EditFieldset } from "../Modals/EditFieldset";

export const ProductCard = ({ product, className, onAdd, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product); // Добавляем editedProduct


  const onAddHandler = () => {
    onAdd(product);
  };
  const onDeleteHandler = () => {
    onDelete(product.id); // Вызываем функцию onDelete и передаем id продукта для удаления
    console.log(`Удалено: ${product.id}`);
  };

  const onEditHandler = () => {
    setIsEditing(true); // Открываем окно редактирования при клике на "Редактировать"
  };

  const onSaveEditHandler = (editedProduct) => {
    setIsEditing(false); // Закрываем окно редактирования
    setEditedProduct(editedProduct); // Обновляем editedProduct после сохранения
  };

  const onCancelEditHandler = () => {
    setIsEditing(false); // Закрываем окно редактирования без сохранения изменений
  };

  return (
    <div className={"product " + className}>
      {isEditing ? (
        <EditFieldset
          product={editedProduct}
          onSave={onSaveEditHandler}
          onCancel={onCancelEditHandler}
        />
      ) : (
          <Fieldset legend="Header" toggleable className="product">
          <div className={"img"}>
            <img src={editedProduct.image} alt={editedProduct.title} />
          </div>
          <div className={"title"}>{editedProduct.title}</div>
          <div className={"id"}>{editedProduct.id}</div>
          <div className={"description"}>{editedProduct.description}</div>
          <div className={"price"}>
            <span>
              Цена: <b>{editedProduct.price}</b>
            </span>
          </div>
          <div className={"divBtn"}>
          <Button className={"delete-btn"} onClick={onDeleteHandler}>
            Удалить
          </Button>
          <Button className={"edit-btn"} onClick={onEditHandler}>
            Редактировать
          </Button>
          </div>
        </Fieldset>
      )}
    </div>
  );
};


