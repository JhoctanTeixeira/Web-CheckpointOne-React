import React from 'react'
import Author from '../img/author.png'
import Logo from '../img/logo.svg'
export default function Corpo() {

return(
<>
  <div className="row">

    <div className="site_content">
      <main className="posts.col__list">
        <header className="post__header">
          <h1 className="post__title">Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>

          <hr>
          </hr>

          <p className="post__excerpt">A infecção causada pela variante Delta pode provocar sintomas diferentes da
            doença causada pela linhagem original do novo coronavírus</p>

          <div>
            <section className="author__content">
              <figure className="author__image">
                <img src={Author} alt="Rocha da CNN" className="imgDoAutor" />
              </figure>
            </section>
          </div>

          <hr>
          </hr>
          <p>24/08/2021 às 16:44 Atualizado às 16:56</p>
        </header>

        <div className="post__content">
          <div className="riddle-target-initialised">
            <img src={Logo} alt="CNN" className="logoCNN" />
          </div>
          <p className="p-one">Por ser uma doença nova, a <a href="" className="linkTXT">Covid-19</a> ainda não foi
            compreendida totalmente pela comunidade
            médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os
            impactos para a saúde a curto e longo prazos.</p>
          <p className="p-one">
            A <a href="" className="linkTXT">variante Delta da Covid-19,</a> originalmente conhecida como B.1.617.2,
            existe desde o final do ano passado,
            mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa
            cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem
            apresenta a estimativa.</p>
        </div>
      </main>

    </div>
  </div>


</>
)
}