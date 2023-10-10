import React, { useState, useCallback, useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export const ProductList = ({ products }) => {
  const { tg, queryId } = useTelegram();
  const [addedItems, setAddedItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const removeProduct = (id) => {
    // Удаление продукта из списка addedItems
    const updatedAddedItems = addedItems.filter((item) => item.id !== id);
    setAddedItems(updatedAddedItems);

    // Удаление продукта из списка filteredProducts (если он там есть)
    const updatedFilteredProducts = filteredProducts.filter(
      (item) => item.id !== id
    );
    setFilteredProducts(updatedFilteredProducts);
  };

  useEffect(() => {
    // Обновляем filteredProducts после изменения products
    setFilteredProducts(products);
  }, [products]);

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };

    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, [addedItems, queryId]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [tg, onSendData]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    // <div className={"list"}>
    //   {products.map((item) => (
    //     <ProductCard
    //       product={item}
    //       onAdd={onAdd}
    //       onDelete={removeProduct}
    //       className={"item"}
    //       key={item.id}
    //     ></ProductCard>
    //   ))}

    //   {addedItems.map((item) => (
    //     <ProductCard
    //       product={item}
    //       onAdd={onAdd}
    //       onDelete={removeProduct}
    //       className={"item"}
    //       key={item.id}
    //     ></ProductCard>
    //   ))}
    // </div>

    <div className={"list"}>
      {filteredProducts.map((item) => (
        <ProductCard
          product={item}
          onAdd={onAdd}
          onDelete={removeProduct}
          className={"item"}
          key={item.id}
        ></ProductCard>
      ))}

      {addedItems.map((item) => (
        <ProductCard
          product={item}
          onAdd={onAdd}
          onDelete={removeProduct}
          className={"item"}
          key={item.id}
        ></ProductCard>
      ))}
    </div>
  );
};
