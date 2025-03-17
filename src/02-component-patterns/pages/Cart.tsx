import { NavLink } from "react-router";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { ProductCard } from "../components/ProductCard";
import { Product } from "../interfaces";
import { UseShopping } from "../hooks/UseShopping";

export const Cart = () => {
  const { ShoppingCart, onProductAdd, onProductRemove } = UseShopping();

  const CartContent: Product[] = Object.values(ShoppingCart);

  console.log(CartContent);

  return (
    <section className="flex flex-col gap-6 min-h-[80vh] relative">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Carrito de Compras</h1>
      </header>

      <NavLink
        to="/shopping"
        className="px-4 py-2 bg-transparent text-neutral-50 rounded flex items-center gap-2 w-fit hover:opacity-70 transition-all"
      >
        <FaArrowLeft />
        <span>Regresar a la Tienda</span>
      </NavLink>

      {CartContent.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-grow">
          <FaShoppingCart className="text-6xl text-neutral-300 mb-4" />
          <p className="text-2xl text-neutral-400">Tu carrito está vacío</p>
        </div>
      ) : (
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CartContent.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAdd={onProductAdd}
              onRemove={onProductRemove}
            >
              <>
                <ProductCard.Image />
                <ProductCard.Info />
                <ProductCard.Counter initialValue={ShoppingCart[product.id]?.count} />
              </>
            </ProductCard>
          ))}
        </article>
      )}
    </section>
  );
};

export default Cart;
