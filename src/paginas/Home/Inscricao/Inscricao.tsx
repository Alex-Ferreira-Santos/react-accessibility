import "./Inscricao.css";
import Botao from "@/componentes/Botao";
import CampoDigitacao from "@/componentes/CampoDigitacao";
import Tipografia from "@/componentes/Tipografia";
import { ChangeEvent, FormEvent, useId, useRef, useState } from "react";

const Inscricao = () => {
  const campoDeDigitacaoRef = useRef<HTMLInputElement | null>(null);
  const campoDigitacaoId = useId()
  const [erro, setErro] = useState("");
  const [valorCampo, setValorCampo] = useState("");

  const validaCampo = () => {
    if (campoDeDigitacaoRef.current) {
      const valorCampo = campoDeDigitacaoRef.current.value;

      if (valorCampo.length < 5) {
        setErro("o campo deve ter pelo menos 5 caracteres");
        campoDeDigitacaoRef.current.focus();
        return;
      }
      setErro("");
    }
  };

  const aoMudarCampoForm = (evento: ChangeEvent<HTMLInputElement>) => {
    setValorCampo(evento.target.value);
    validaCampo();
  };

  const aoSubmeterForm = (e: FormEvent) => {
    e.preventDefault();
    validaCampo();
    if (!erro) {
      setValorCampo("");
    }
  };

  return (
    <section className="secao__inscricao">
      <div className="secao__inscricao--conteudo">
        <Tipografia elemento="h2" variante="h2" cor="azul">
          Inscreva-se para ganhar descontos!
        </Tipografia>
        <Tipografia elemento="p" variante="corpo" cor="azul">
          Cadastre seu email em nossa newsletter e saiba dos descontos, cupons e
          novidades em primeira mão!
        </Tipografia>
        <form
          noValidate
          className="secao__inscricao--formulario"
          onSubmit={aoSubmeterForm}
        >
          <CampoDigitacao
            type="email"
            name="inscricao"
            placeholder="Digite seu melhor endereço de email"
            style={{ width: "650px" }}
            ref={campoDeDigitacaoRef}
            onChange={aoMudarCampoForm}
            value={valorCampo}
            erro={erro}
            id={campoDigitacaoId}
          />
          <Botao variante="primario" type="submit">
            Inscrever
          </Botao>
        </form>
      </div>
    </section>
  );
};

export default Inscricao;
