import React, { useEffect, useState } from "react";
import ShopContext from "../context";
import { productsData } from "../data/localData";
import { productsCollection } from "../firebase/firestoreUtils";
import Router from "../routing/Router";

const Root = () => {
  const [initialproducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  //filters products states

  const [priceInput, setPriceInput] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const subscribe = productsCollection.onSnapshot((snapshot) => {
      const dataFromProductsCollection = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        inCartQuantity: 1,
      }));

      setProducts([...dataFromProductsCollection]);
      setInitialProducts([...dataFromProductsCollection]);
    });

    return () => {
      subscribe();
    };
  }, []);

  useEffect(() => {
    setMaxAndMinProductPrices();
  }, []);

  const setMaxAndMinProductPrices = () => {
    const productPrices = productsData.map((product) => product.price);

    const tempMaxPrice = Math.max(...productPrices);
    const tempMinPrice = Math.min(...productPrices);

    setPriceInput(tempMaxPrice);
    setMaxPrice(tempMaxPrice);
    setMinPrice(tempMinPrice);
  };

  const handlePriceInputChange = (event, newValue) => {
    setPriceInput(newValue);
  };

  const handleProductNameInputChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleCategorySelectChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    filterProducts();
  }, [priceInput, nameInput, category]);

  const filterProducts = () => {
    let filteredProducts = [...initialproducts];

    if (nameInput.length !== 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().startsWith(nameInput.toLowerCase())
      );
    }

    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseInt(priceInput)
    );

    setProducts([...filteredProducts]);
  };

  const addProductToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    setCart([...new Set([...cart, selectedProduct])]);
  };

  const deleteProductFromCart = (productId) => {
    const filteredCart = cart.filter((product) => {
      if (product.id === productId) {
        product.inCartQuantity = 1;
      }
      return product.id !== productId;
    });

    setCart([...filteredCart]);
  };

  const increaseProductInCartQuantity = (productId) => {
    const cartAfterProductQuantityIncrease = cart.map((product) => {
      if (product.id === productId) {
        if (product.inCartQuantity < product.productQuantity) {
          product.inCartQuantity += 1;
        }
      }
      return product;
    });

    setCart([...cartAfterProductQuantityIncrease]);
  };

  const decreaseProductInCartQuantity = (productId) => {
    const cartAfterProductQuantityDecrease = cart.map((product) => {
      if (product.id === productId) {
        product.inCartQuantity -= 1;
      }
      return product;
    });

    setCart([...cartAfterProductQuantityDecrease]);
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const calculateCartTotal = () => {
    let tempCartTotal = 0;

    cart.forEach((product) => {
      tempCartTotal += product.price * product.inCartQuantity;
    });

    setCartTotal(tempCartTotal);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        isCartOpen,
        cart,
        cartTotal,
        priceInput,
        maxPrice,
        minPrice,
        initialproducts,
        nameInput,
        category,
        handleCartOpen,
        handleCartClose,
        addProductToCart,
        deleteProductFromCart,
        increaseProductInCartQuantity,
        decreaseProductInCartQuantity,
        handlePriceInputChange,
        handleProductNameInputChange,
        handleCategorySelectChange,
      }}
    >
      <Router />
    </ShopContext.Provider>
  );
};

export default Root;
