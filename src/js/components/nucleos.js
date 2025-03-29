export default{data(){return{idSelected:0,items:[{id:0,html:`
            <h4 class="white-text">Núcleo de Educação à Distância</h4>
            <p class="white-text">
              Núcleo responsável por ações educacionais no formato EAD de forma coordenada com os demais núcleos. 
            </p>
              `},{id:1,html:`
<h4 class="white-text">Núcleo Pedagógico</h4>

            <p class="white-text">

              Núcleo responsável pelo acompanhamento da prática pedagógica nas escolas. Busca contribuir com o aprimoramento das práticas pedagógicas na articulação dos processos e formação de professores.

            </p>
              `},{id:2,html:`
          <h4 class="white-text">Núcleo de Regulamentação Escolar
</h4>

            <p class="white-text">
Núcleo responsável por monitorar a legalidade do funcionamento das escolas, estabelecendo a comunicação com os órgãos fiscalizadores da Secretária de Estado de Educação, atuando na disseminação e aplicabilidade das legislações educacionais.
            </p>
              `},{id:3,html:`
                    <h4 class="white-text">Núcleo de Inovação e Tecnologias Educacionais


            <p class="white-text">
Núcleo responsável por pensar, refletir, analisar, planejar e executar projetos inovadores para a educação. Busca potencializar e contribuir para a inovação e para a construção de estratégias pedagógicas, elevando a qualidade do ensino na REDE SESI de Educação.
            </p>
              `}]}},methods:{menu(e,a){for(var s=document.getElementsByClassName("nucleos-item"),o=0;o<s.length;o++)s[o].classList.remove("display1");e.target.classList.add("display1"),this.idSelected=a;e=document.querySelector(".nucleos"),a="./src/img/"+this.idSelected+"-nucleos.jpg";e.style.backgroundImage=`url(${a})`}},mounted(){var e=document.querySelector(".nucleos"),a="./src/img/"+this.idSelected+"-nucleos.jpg";e.style.backgroundImage=`url(${a})`},template:`
      <div class="nucleos" :data-order="idSelected">
          <div class="filter"></div>
          <div class="mask-top"></div>
          <div class="py-144 ">
            <div class="container--medium content">
              <div class="row">
                <div class="col m4 s3 nucleos-menu">
                  <ul>
                    <li @click="menu($event, 0)" class="pointer nucleos-item display1">NEAD</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item">NUPE</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item">NURE</li>
                    <li @click="menu($event, 3)" class="pointer nucleos-item">NITE</li>
                  </ul>
                </div>
                <div class="col m8 s9 flex--align-center">
                  <div v-html="items[idSelected].html">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mask-bottom"></div>
        </div>
    `};