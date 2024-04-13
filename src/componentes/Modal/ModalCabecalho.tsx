import { PropsWithChildren } from "react";
import Botao from "../Botao";

type ModalCabecalhoPropsType = PropsWithChildren &  {
  aoFechar: () => void;
}

const ModalCabecalho = ({ children, aoFechar }: ModalCabecalhoPropsType) => {
  return (
    <>
      {children}
      <Botao
        onClick={aoFechar}
        aria-label="fechar modal"
        title="fechar modal"
        style={{ float: "right", fontWeight: "bold" }}
      >
        X
      </Botao>
    </>
  );
};

export default ModalCabecalho;
