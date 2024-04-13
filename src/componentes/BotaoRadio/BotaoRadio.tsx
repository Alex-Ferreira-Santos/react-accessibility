import "./BotaoRadio.css";

export type BotaoRadioPropsType = React.HTMLAttributes<HTMLInputElement> & {
  id: string;
  nome: string;
  valor: string;
  selecionado: boolean;
  aoMudar: (evento: React.ChangeEvent<HTMLInputElement>) => void;
  textoLegenda: string;
};

const BotaoRadio = ({
  id,
  nome,
  aoMudar,
  selecionado,
  valor,
  textoLegenda,
}: BotaoRadioPropsType) => {
  return (
    <li>
      <label htmlFor={id} className="botao__radio--legenda">
        <input
          type="radio"
          name={nome}
          id={id}
          value={valor}
          checked={selecionado}
          onChange={aoMudar}
        />
        <span>{textoLegenda}</span>
      </label>
    </li>
  );
};

export default BotaoRadio;
