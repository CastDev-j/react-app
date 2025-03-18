import { createContext } from "react";
import { EjercicioFormikProps } from "./interfaces";

export const FormikContext = createContext<EjercicioFormikProps["initialValues"]>(
  {} as EjercicioFormikProps["initialValues"]
);
