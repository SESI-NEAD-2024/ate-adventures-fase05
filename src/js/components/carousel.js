export default{data(){return{items:[{id:1,img:"src/img/carousel-01.webp",alt:"Festival SESI de Robótica",html:`
            <p>
            O SESI/DRMG realiza anualmente o Festival SESI de Robótica, um evento que promove a inovação e a educação tecnológica, oferecendo aos estudantes oportunidades de aprendizado prático e desafiador. O festival envolve parceiros da Rede SESI de Educação e apresenta diversas atrações nas áreas de tecnologia e educação.​
            </p>
            `},{id:2,img:"src/img/carousel-02.webp",alt:"Festival SESI de Robótica",html:`
            <p>
            Durante o festival, ocorre a etapa regional das modalidades FIRST® LEGO® League Challenge (FLL), FIRST® TECH Challenge (FTC) e F1 in Schools.​
            </p>
            `},{id:3,img:"src/img/carousel-03.webp",alt:"Festival SESI de Robótica",html:`
            <p>
            As equipes competem para conquistar vagas na etapa nacional, organizada pelo SESI - Departamento Nacional (DN).​
            </p>
            `},{id:4,img:"src/img/carousel-04.webp",alt:"Festival SESI de Robótica",html:`
            <p>
            A Rede SESI reconhece a importância de proporcionar oportunidades para seus estudantes participarem desses projetos e investe fortemente nos competidores. A estrutura e o planejamento dos projetos são focados no desenvolvimento dos estudantes. Durante as competições, as equipes criam soluções tecnológicas para enfrentar uma série de desafios, aprimorando diversas habilidades e se preparando para atuar na transformação digital e industrial.​
            </p>
            `},{id:5,img:"src/img/carousel-05.webp",alt:"Festival SESI de Robótica",html:`
            <p>
            O evento também conta com demonstrações da modalidade FIRST® Robotics Competition (FRC)​.
            </p>
            `},{id:5,img:"src/img/carousel-06.webp",alt:"Festival SESI de Robótica",html:`
            <p>
            Os torneios realizados no festival reúnem equipes das escolas da Rede SESI de Educação, além de instituições das redes pública e privada de ensino, ONGs e fundações.​
            </p>
            `}],carousel:{class:"carousel-01",key:0,elemento:null,qtdSlides:0,ordem:1,ordemAnterior:99},instances:null}},methods:{next(){this.carousel.elemento.querySelector(".previous").style.display="flex",this.instances[this.carousel.key].next()},previous(){this.instances[this.carousel.key].prev()}},mounted(){this.carousel.elemento=document.querySelector("."+this.carousel.class);var e=document.querySelectorAll(".carousel."+this.carousel.class);this.instances=M.Carousel.init(e,{fullWidth:!0,indicators:!0,shift:20,numVisible:1,onCycleTo:e=>{this.carousel.qtdSlides=e.parentNode.querySelectorAll(".carousel-item").length;e=[...e.parentNode.children].indexOf(e);this.carousel.ordem=e,this.carousel.ordemAnterior=this.ordem-1,1==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="none",this.carousel.elemento.querySelector(".next").style.display="flex"):this.carousel.qtdSlides==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="none",console.log("keke")):(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="flex"),console.log("this.carousel.qtdSlides",this.carousel.qtdSlides),console.log("this.carousel.ordem",this.carousel.ordem)}}),this.carousel.elemento.querySelector(".previous").style.display="none"},template:`
    <!-- Carousel -->
    <div class="p-24 carousel carousel-slider center" :class="[carousel.class]">
      <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="btn btn-game previous flex--align-center card card--purple-shadow">
        <img src="./src/img/play_l.svg" alt="Esquerda" loading="lazy" style="width: 100%; max-width: 12px" />

        </a>
        <a @click="next" class="btn btn-game btn-game--gray next flex--align-center card ml-16 card--purple-shadow">
        <img src="./src/img/play_r.svg" alt="Direita" loading="lazy" style="width: 100%; max-width: 12px" />

        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
          <img :src="item.img" :alt="item.alt" class="col s12 m6 img--round">
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `};