import { useContext } from "react";
import { FormikCounter } from "./FormikCounter";
import { FormikContext } from "../store";

export const EjercicioFormik = () => {
  const initialValues = useContext(FormikContext);

  return (
    <section className="container flex flex-col gap-2 min-h-[80vh]">
      <h1 className="text-4xl font-bold">About</h1>

      <h2
        className="
        text-xl font-light mb-6
      "
      >
        Utilizando el patron de formik
      </h2>

      <div
        className="
        bg-neutral-700 p-2 rounded-md flex flex-col gap-4
      "
      >
        <h2 className="text-2xl font-bold">Valor inicial del componente</h2>
        <pre>
          <code>{JSON.stringify(initialValues, null, 2)}</code>
        </pre>
      </div>

      <h2 className="text-xl font-light mt-4">Componente de contador</h2>

      <FormikCounter />
    </section>
  );
};
