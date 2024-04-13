import { PropsWithChildren } from "react";
import "./Acordeao.css";

type AcordeaoPropsType = PropsWithChildren;

const Acordeao = ({ children }: AcordeaoPropsType) => {
  return <div className="acordeao__container">{children}</div>;
};

export default Acordeao;
