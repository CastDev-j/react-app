import { ProductCard } from "../components/ProductCard";
import { ShoppingCartCounter } from "../components/ShoppingCart";
import { products } from "../store/store";
import { UseShopping } from "../hooks/UseShopping";

export const ShoppingPage = () => {
  const { onProductAdd, onProductRemove, productQuantity, ShoppingCart } = UseShopping();

  return (
    <section className=" flex flex-col gap-6 min-h-[80vh] relative">
      <header>
        <h1 className="text-4xl font-bold mb-4">Página de Tienda</h1>

        <h2 className="text-xl font-light">Patrones de Componentes</h2>
      </header>

      <ShoppingCartCounter counter={productQuantity} />

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAdd={onProductAdd}
            onRemove={onProductRemove}
          >
            <>
              <ProductCard.Image />
              <ProductCard.Info />
              <ProductCard.Counter initialValue={ShoppingCart[product.id]?.count}/>
            </>
          </ProductCard>
        ))}
      </article>
    </section>
  );
};

export default ShoppingPage;
