export default{data(){return{idSelected:0,items:[{id:0,html:`
            
            
            <div>
              <p class="mt-0">
              As equipes são formadas por 10 estudantes do ensino médio do SESI e SENAI. Eles são desafiados a projetar, construir e programar robôs de tamanho industrial para competir em um jogo de arena. Os competidores podem criar uma identidade de equipe, arrecadar fundos e aprimorar as habilidades por meio do trabalho em equipe.​
              </p>
            </div>
          
              `},{id:1,html:`
            <div>
              <p class="mt-0">
                Cada equipe conta com dois técnicos: um instrutor do SENAI, responsável pelo robô, e um técnico do SESI, que cuida dos atributos de equipe. O ATE pode ser o técnico SESI ou não. Caso o ATE não seja escolhido como técnico, ele deverá fornecer o apoio necessário à equipe e ao técnico, especialmente na ausência deste.​
              </p>
            </div>
          
              `},{id:2,html:`
           
            
            <div>
              <p class="mt-0">
               Para fazer parte de uma equipe FRC, os alunos precisam ser aprovados por meio de um processo seletivo, organizado com base nas instruções enviadas pelo NITE. O ATE é responsável por acompanhar todo o processo seletivo em conjunto com a equipe pedagógica, garantindo o cumprimento dos prazos e entregas, conforme as instruções.​
              </p>
            </div>
          
              `}]}},methods:{menu(e,o){for(var s=document.querySelectorAll(".content_menu_02--b .nucleos-item"),i=0;i<s.length;i++)s[i].classList.remove("selected");e.target.classList.add("selected"),this.idSelected=o}},mounted(){},template:`
     
          <div class="content_menu_02 content_menu_02--b" :data-order="idSelected">
            <div class="box-attention content px-24 py-16 p-8-mobile" >
              <div class="row">
                <div class="col m3 s3 nucleos-menu">
                  <ul class="ml-16">
                    <li @click="menu($event, 0)" class="pointer nucleos-item selected">Organização</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item">Técnicos</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item">Processo seletivo</li>


                  </ul>
                </div>
                <div class="col m9 s9 flex--align-center" >
                  <div class="box flex--align-center" v-html="items[idSelected].html">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

    
    `};