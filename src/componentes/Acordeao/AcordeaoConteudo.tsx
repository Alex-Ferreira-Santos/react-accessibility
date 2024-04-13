import { PropsWithChildren } from "react";

type AcordeaoConteudoPropsType = PropsWithChildren;

const AcordeaoConteudo = ({ children }: AcordeaoConteudoPropsType) => {
  return (
    <div className="acordeao__conteudo">
      {children}
    </div>
  );
};

export default AcordeaoConteudo;
