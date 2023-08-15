import React, { useState } from "react";

import products from "./ProductData";

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initial selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex  justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block bg-gray-700 rounded-md text-xl font-medium text-gray-300 mb-2 px-2 py-2"
          >
            Select Category:
          </label>
          <select
            id="category"
            className="mt-1 px-2 py-2 block w-full text-xl font-medium rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Filtered Products</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <li
                key={product.name}
                className="bg-gray-700 rounded-lg shadow p-4"
              >
                <strong className="text-lg block mb-1 text-white">
                  {product.name}
                </strong>
                <p className="text-gray-400 mb-2">
                  {product.category} - ${product.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
