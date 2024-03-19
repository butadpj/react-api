import { useEffect, useState } from "react";
import "./App.css";
import ProductLists from "./components/ProductLists";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [searchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        const searchProducts = async () => {
            const response = await (
                await fetch(
                    `https://dummyjson.com/products/search?q=${searchInput}`
                )
            ).json();

            setSearchedProducts(response.products);
        };

        searchProducts();
    }, []);

    console.log("SAMSUNG PRODUCTS: ", searchedProducts);

    return (
        <main>
            <h2>Products: </h2>

            <div className="product-search">
                <label>Search: </label>
                <input
                    type="text"
                    value={searchInput}
                    onClick={(event) => {
                      setSearchInput("CLICKED");
                  }}
                    onChange={(event) => {
                        setSearchInput(event.target.value);
                    }}
                    placeholder="Something.."
                />
            </div>

            <ProductLists />
        </main>
    );
}

export default App;
