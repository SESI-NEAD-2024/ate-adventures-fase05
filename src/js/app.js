// Usar Vue Router fica difíicl de desenvolver e outras pessoas mais iniciantes modificarem o projeto, usar apenas se necessário

import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";

import AppFooter from "./components/app-footer.js";

import Carousel from "./components/carousel.js";
import gameFase from "./components/game-fase.js";
import contentMenu02 from "./components/content-menu-02.js";
import contentMenu02B from "./components/content-menu-02-b.js";
import videoBox from "./components/video-box.js";




const app = Vue.createApp({
  data() {
    return {
      stopNavbar: null,
      stopNavBarHeight: 0,
      winScroll: 0,
    };
  },
  components: {
    //
    // O vue router já renderiza os componentes aqui
    Navbar,
    Hero,
    AppFooter,
    contentMenu02,
    contentMenu02B,
    Carousel,
    gameFase,
    videoBox,
  },
  mounted() {
    window.scrollTo(0, 0); // Garante que a rolagem comece no topo

    this.loading();

    window.addEventListener("load", () => {
      AOS.refresh(); // Força a recalculação das animações após o carregamento da página

  // Scroll -----------------------------------------------------
      // Quando a janela encostar neste elemento, completa a barra de progresso 100%
      this.stopNavbar = document.querySelector(".stop-navbar");
      this.stopNavBarHeight = this.getAbsoluteOffsetTop(this.stopNavbar);
    });

    // AOS Animation -------------------------------------
    AOS.init({
      delay: 50,
    });

    // MODAL -----------------------------------------------------------
    const myModal = new HystModal({
      linkAttributeName: "data-hystmodal",
      //settings (optional). see API
      backscroll: false,
    });

    // Collapsible -----------------------------------------------------
    var accordeon = document.querySelectorAll(".collapsible");
    var instaccordeon = M.Collapsible.init(accordeon, {
      // specify options here
    });

    // Scroll -----------------------------------------------------

    // Usa o throttle na função handleScroll e vincula ao evento de scroll
    const throttledScroll = this.throttle(this.handleScroll, 150); // Ajuste o delay conforme necessário
    window.addEventListener("scroll", throttledScroll);


  },
  methods: {
    // Barra de progresso Scroll -----------------------------------------------------

    // Função de throttle
    throttle(callback, delay) {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return callback(...args);
      };
    },

    /**
     * Atualiza a barra de progresso e exibe a porcentagem rolada.
     *
     * Esta função calcula a porcentagem rolada com base na posição de rolagem do usuário. Em seguida, atualiza a largura da barra de progresso e exibe a porcentagem rolada na caixa de progresso.
     *
     * @return {void} Esta função não retorna nenhum valor.
     */
    handleScroll() {
      this.winScroll = window.scrollY;

      let pageHeight = document.body.scrollHeight;

      // console.log('winScroll', winScroll);
      // console.log('pageHeight', pageHeight);

      // Transforma valor em porcentagem de 1 a 100
      var scrolled = Math.min(
        (this.winScroll /
          (this.stopNavBarHeight - (pageHeight - this.stopNavBarHeight))) *
          100,
        100
      );

      // Atualiza a barra de progresso
      var barras = document.querySelectorAll(".determinate");
      barras.forEach((barra) => {
        barra.style.width = scrolled + "%";
      });

      // Para sumir/aparecer a barra de progresso quando está prestes a aparecer o jogo
      // Para não verificar toda hora

      if (scrolled >= 98) {
        document.querySelector(".navbar-fixed").classList.add("scale-out");
        document.querySelector(".navbar-fixed").classList.remove("scale-in");
      } else {
        document.querySelector(".navbar-fixed").classList.add("scale-in");
        document.querySelector(".navbar-fixed").classList.remove("scale-out");
      }

    },

  

    getAbsoluteOffsetTop(element) {
      // Posição do elemento na viewport
      const rect = element.getBoundingClientRect();
      console.log("rect", rect.top);
      console.log("window.innerHeight", window.innerHeight);

      return rect.top + window.scrollY + window.innerHeight;
    },

    /**
     * Oculta o elemento com id "loading" e exibe o elemento com id "content"
     * quando a página está totalmente carregada.
     *
     * @return {void} Esta função não retorna um valor.
     */
    loading() {
      document.getElementById("loading").style.display = "none";
      document.getElementById("content").style.opacity = "1";
    },
  },
  beforeDestroy() {
    // Remove o listener de scroll ao destruir o componente
    window.removeEventListener("scroll", this.handleScroll);
  },
});

// app.use(router);
app.mount("#app");
