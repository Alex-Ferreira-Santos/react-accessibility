import "./Checkbox.css";

type CheckboxPropsType = React.HTMLProps<HTMLInputElement> & {
  legenda: string;
  id: string;
  nome: string;
  selecionado: boolean;
  aoSelecionar: () => void;
};

const Checkbox = ({
  legenda,
  aoSelecionar,
  id,
  nome,
  selecionado,
  ...rest
}: CheckboxPropsType) => {
  return (
    <label htmlFor={id} className="checkbox_legenda">
      <input
        type="checkbox"
        id={id}
        name={nome}
        checked={selecionado}
        onChange={aoSelecionar}
        {...rest}
      />
      <span>{legenda}</span>
    </label>
  );
};

export default Checkbox;
