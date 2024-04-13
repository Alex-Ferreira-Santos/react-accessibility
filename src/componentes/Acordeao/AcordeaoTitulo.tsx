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
    <button onClick={alternarVisibilidade} className="acordeao__titulo">
      <summary aria-expanded={estaAberto} aria-controls={id}>
        <Tipografia elemento="h2" variante="h3" cor="cinza">
          {titulo}
        </Tipografia>
      </summary>
      <span>{estaAberto ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
    </button>
  );
};

export default AcordeaoTitulo;
