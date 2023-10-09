import "./SpeedDialButton.css";
import React, { useState } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Dialog } from 'primereact/dialog';
        

export const SpeedDialButton = ({ products }) => {
  const [visible, setVisible] = useState(false);
  
  const [dialogVisible, setDialogVisible] = useState(false);

  const actionItems = [
    { icon: "pi pi-pencil", command: () => {setDialogVisible(true)} },
    { icon: "pi pi-cart-plus", command: () => {setDialogVisible(true)} },
    { icon: "pi pi-trash", command: () => {setDialogVisible(true)} },
  ];

  
  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  const addHelicopter = (data) => {
    products.push(data);
  };

  const deleteHelicopter = (id) => {
    products = products.filter((item) => item.id !== id);
  };

  const updateHelicopter = (id, data) => {
    products = products.map((item) => {
      if (item.id === id) {
        return data;
      }
      return item;
    });
  };

  
  console.log(products);
  return (
    <div>
      <SpeedDial
        model={actionItems}
        visible={visible}
        onShow={() => setVisible(true)}
        onHide={() => setVisible(false)}
        className={"speedButton"}
      />
      <Dialog
        header="Header"
        visible={dialogVisible}
        style={{ width: "50vw" }}
        onHide={handleCloseDialog}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </div>
  );
};
