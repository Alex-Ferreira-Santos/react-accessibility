import "./BotaoRadio.css";

export type BotaoRadioPropsType = React.HTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  valor: string;
  checked: boolean;
  aoMudar: (evento: React.ChangeEvent<HTMLInputElement>) => void;
  textoLegenda: string;
};

const BotaoRadio = ({
  id,
  name,
  aoMudar,
  checked,
  valor,
  textoLegenda,
}: BotaoRadioPropsType) => {
  return (
    <li>
      <label htmlFor={id} className="botao__radio--legenda">
        <input
          type="radio"
          name={name}
          id={id}
          value={valor}
          checked={checked}
          onChange={aoMudar}
        />
        <span>{textoLegenda}</span>
      </label>
    </li>
  );
};

export default BotaoRadio;
