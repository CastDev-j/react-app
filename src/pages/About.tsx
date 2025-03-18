import { EjercicioFormik } from "../03-formik-style/components/EjercicioFormik";
import { FormikContext } from "../03-formik-style/store";

const initialValues = {
  initialCount: 3,
  maxCount: 10,
  minCount: -10,
};

export const About = () => {
  return (
    <FormikContext.Provider value={initialValues}>
      <div className="min-h-[80vh]">
        <EjercicioFormik/>
      </div>
    </FormikContext.Provider>
  );
};
