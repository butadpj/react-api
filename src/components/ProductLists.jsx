import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductLists() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await (
                await fetch("https://dummyjson.com/products")
            ).json();

            setProducts(response.products);
        };

        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div className="product-lists">
            {products.map((product) => {
                return (
                    <ProductCard
                        name={product.title}
                        category={product.category}
                        image={product.images[0]}
                        price={product.price}
                    />
                );
            })}
        </div>
    );
}
