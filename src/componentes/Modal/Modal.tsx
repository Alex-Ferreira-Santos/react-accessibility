import ModalCabecalho from "./ModalCabecalho";
import ModalConteudo from "./ModalConteudo";
import "./Modal.css";

type ModalPropsType = React.HTMLProps<HTMLDialogElement> & {
  ariaLabel: string;
  estaAberta: boolean;
  fecharModal: () => void;
};

const Modal = ({ ariaLabel, estaAberta, fecharModal, ...rest }: ModalPropsType) => {
  return (
    <>
      <div className="modal__overlay" onClick={fecharModal} />
      <dialog
        className="modal__container"
        aria-label={ariaLabel}
        open={estaAberta}
        onClose={fecharModal}
        {...rest}
      >
        <ModalCabecalho aoFechar={fecharModal} />
        <ModalConteudo aoFechar={fecharModal} />
      </dialog>
    </>
  );
};

export default Modal;
