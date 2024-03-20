import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductLists({ CHICKEN }) {
  return (
    <div className="product-lists">
      {CHICKEN.map((x) => {
        return (
          <ProductCard
            key={x.id}
            name={x.title}
            category={x.category}
            image={x.thumbnail}
            price={x.price}
          />
        );
      })}
    </div>
  );
}
