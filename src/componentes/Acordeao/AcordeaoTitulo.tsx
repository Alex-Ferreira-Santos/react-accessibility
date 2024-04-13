import { IconeSetaBaixo, IconeSetaCima } from "../Icones";
import Tipografia from "../Tipografia";

type AcordeaoConteudoPropsType = {
  id: string;
  titulo: string;
  estaAberto: boolean;
  alternarVisibilidade: () => void;
};

const AcordeaoTitulo = ({
  id,
  titulo,
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
        {titulo}
      </Tipografia>
      <span>{estaAberto ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
    </summary>
  );
};

export default AcordeaoTitulo;
