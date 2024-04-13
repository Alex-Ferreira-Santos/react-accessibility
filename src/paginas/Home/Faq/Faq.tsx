import Acordeao from "@/componentes/Acordeao/Acordeao";
import "./Faq.css";
import faq from "../../../assets/faq.json";
import Tipografia from "@/componentes/Tipografia";
import AcordeaoTitulo from "@/componentes/Acordeao/AcordeaoTitulo";
import AcordeaoConteudo from "@/componentes/Acordeao/AcordeaoConteudo";
import AcordeaoDescricao from "@/componentes/Acordeao/AcordeaoDescricao";
import useAcordeao from "@/hooks/useAcordeao";

const Faq = () => {
  const { aberturasPorItem, alternarVisibilidade } = useAcordeao();
  return (
    <section className="secao__duvidas">
      <Tipografia elemento="h2" variante="h2" cor="azul">
        Dúvidas frequentes
      </Tipografia>
      <Tipografia elemento="p" variante="corpo" cor="grafite">
        Antes de entrar em contato, verifique se sua dúvida está respondida em
        nossa FAQ!
      </Tipografia>

      <Acordeao>
        {faq.map((duvida) => (
          <AcordeaoConteudo key={duvida.id}>
            <AcordeaoTitulo
              titulo={duvida.titulo}
              id={duvida.id}
              estaAberto={aberturasPorItem[duvida.id] || false}
              alternarVisibilidade={() => alternarVisibilidade}
            />

            <AcordeaoDescricao
              descricao={duvida.descricao}
              id={duvida.id}
              estaAberto={aberturasPorItem[duvida.id] || false}
            />
          </AcordeaoConteudo>
        ))}
      </Acordeao>
    </section>
  );
};

export default Faq;
