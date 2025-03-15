import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductCardContext } from "../store/store";

export const ProductImage: React.FC<{ img?: string; alt?: string }> = ({
  img,
  alt,
}) => {
  const { product } = useContext(ProductCardContext);

  let imgToShow = img || noImage;
  let imgAlt = alt || "No Image";

  if (!img) imgToShow = product.image || noImage;
  if (!alt) imgAlt = product.name || "No Image";

  return (
    <img
      src={imgToShow}
      alt={imgAlt}
      className="w-full h-48 object-cover rounded-t-lg col-span-2"
    />
  );
};