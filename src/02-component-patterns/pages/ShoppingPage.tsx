import { ProductCard } from "../components/ProductCard";
import { products } from "../store/store";

export const ShoppingPage = () => {
  return (
    <section className=" flex flex-col gap-6 min-h-[80vh]">
      <header>
        <h1 className="text-4xl font-bold mb-4">Página de Tienda</h1>

        <h2 className="text-xl font-light">Patrones de Componentes</h2>
      </header>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </article>
    </section>
  );
};

export default ShoppingPage;
