import "./SpeedDialButton.css";
import React, { useState } from "react";
import { SpeedDial } from "primereact/speeddial";
// import { ModalDelete } from "../Modals/ModalDelete";
import { ModalAdd } from "../Modals/ModalAdd";
import { ProductList } from "../ProductList/ProductList";

export const SpeedDialButton = ({ products, onProductAdd }) => {
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [newProducts, setNewProducts] = useState([]);

  const actionItems = [
    // {
    //   icon: "pi pi-pencil",
    //   command: () => {
    //     setVisibleEdit(true);
    //   },
    // },
    {
      icon: "pi pi-cart-plus",
      command: () => {
        setVisibleAdd(true);
      },
    },
    
  ];

  const addHelicopter = (data) => {
    setNewProducts([...newProducts, data]);
    onProductAdd([...products, data]);
  };


  const updateHelicopter = (id, data) => {
    products = products.map((item) => {
      if (item.id === id) {
        return data;
      }
      return item;
    });
  };

  return (
 

    <div>
      <SpeedDial
        model={actionItems}
        visible={visible}
        onShow={() => setVisible(true)}
        onHide={() => setVisible(false)}
        className={"speedButton"}
      />
   
      <ModalAdd
        visible={visibleAdd}
        setVisible={setVisibleAdd}
        products={products}
        onChange={addHelicopter}
      />
 

      <ProductList products={newProducts} />

    </div>
  );
};
