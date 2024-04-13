import { IconeSetaBaixo, IconeSetaCima } from "../Icones";
import Tipografia from "../Tipografia";

type AcordeaoConteudoPropsType = {
  id: string;
  title: string;
  estaAberto: boolean;
  alternarVisibilidade: () => void;
};

const AcordeaoTitulo = ({
  id,
  title,
  estaAberto,
  alternarVisibilidade,
}: AcordeaoConteudoPropsType) => {
  return (
    <summary
      role="button"
      className="acordeao__titulo"
      aria-expanded={estaAberto}
      aria-controls={id}
      onClick={alternarVisibilidade}
    >
      <Tipografia elemento="h2" variante="h3" cor="cinza">
        {title}
      </Tipografia>
      <span>{estaAberto ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
    </summary>
  );
};

export default AcordeaoTitulo;
