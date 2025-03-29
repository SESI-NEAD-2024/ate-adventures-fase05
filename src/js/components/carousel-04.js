// Só funciona 1 componente por página

// Alterar a classe para cada cópia desse componente e criar uma nova classe no sass herdando
export default {
  name: "Carousel04",
  data() {
    return {
      carousel: {
        class: "carousel-04",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },
      instances: null, // Declare instances as a reactive variable
      items: [
        {
          id: 1,
          img: "src/img/slide1.webp",
          alt: "Adolescente no ambiente escolar",

          
          html://html 
            `
            <p
                >
                  As mudanças educacionais têm revelado uma crescente
                  preocupação com a realidade escolar e o desenvolvimento de
                  habilidades emocionais, também conhecidas como soft skills.
                  <br /> <br />
                  Essas transformações também se direcionam à formação de perfis
                  que incentivem o uso crítico, eficiente, ético e seguro das
                  tecnologias digitais.
                </p>
            `,
        },
        {
          id: 2,
          img: "src/img/slide2.webp",
          alt: "Adolescente no ambiente escolar",

          
          html://html 
            `
            <p>
                  Essas habilidades integram um movimento de transformação que
                  visa desenvolver uma forma de pensar e agir que contribua para
                  o progresso da sociedade, além de proporcionar uma preparação
                  mais sólida dos estudantes para o mercado de trabalho.
                </p>
            `,
        },

        
      ],
    };
  },
  methods: {
    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      onCycleTo: (slide) => {
        this.carousel.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;
       


        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        } else if (this.carousel.qtdSlides == this.carousel.ordem){
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
          this.carousel.elemento.querySelector(".next").style.display =
          "none";
        }else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
            this.carousel.elemento.querySelector(".next").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  
  template: //html  
  `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card to-left">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card to-right">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item  white-text center-align">
        <img :src="item.img" :alt="item.alt" loading="lazy">
        <div class="gradient"></div>
        <div class="text white-text center-align" v-html="item.html"></div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
