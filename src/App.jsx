import { useEffect, useState } from "react";
import "./App.css";
import ProductLists from "./components/ProductLists";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const searchProducts = async () => {
      const response = await (
        await fetch(`https://dummyjson.com/products/search?q=${searchInput}`)
      ).json();

      setSearchedProducts(response.products);
    };

    searchProducts();
  }, [searchInput]);

  console.log("SEARCHED PRODUCTS: ", searchedProducts);

  return (
    <main>
      <h2>Products: </h2>

      <div className="product-search">
        <label>Search: </label>
        <input
          type="text"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          //   onClick={(event) => {
          //     setSearchInput("CLICKED");
          //   }}
          placeholder="Something.."
        />
      </div>

      <ProductLists CHICKEN={searchedProducts} />
    </main>
  );
}

export default App;
