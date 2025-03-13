import React from "react";
import { Product } from "../interfaces";
import noImage from "../assets/no-image.jpg";
import { useProductCard } from "../hooks/UseProduct";
import { FaMinus, FaPlus } from "react-icons/fa6";

export const ProductCard: React.FC<Product> = ({
    desc,
    image = noImage,
    name,
    price,
}) => {
    const { counter, handleDecrement, handleIncrement } = useProductCard();

    return (
        <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg shadow-lg">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex justify-between items-end">
                <div className="">
                    <h2 className="font-bold">{name}</h2>
                    <p className="text-neutral-400">{desc}</p>
                    <p className="font-semibold mt-2">${price.toFixed(2)}</p>
                </div>
                <div className="flex items-center mt-4">
                    <button
                        className="cursor-pointer bg-neutral-50 text-center text-neutral-950 px-2 py-2 rounded-l-lg hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200 active:scale-95"
                        onClick={() => handleDecrement()}
                    >
                        <FaMinus />
                    </button>
                    <pre className="px-4 font-light text-neutral-50/90">
                        {counter.toString().padStart(2, "0")}
                    </pre>
                    <button
                        className="cursor-pointer bg-neutral-50 text-neutral-950 px-2 py-2 rounded-r-lg hover:bg-neutral-300 active:bg-neutral-400 transition-all duration-200 active:scale-95"
                        onClick={() => handleIncrement()}
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    );
};
