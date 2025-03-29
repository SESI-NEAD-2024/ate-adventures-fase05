export default {
  data() {
    return {
      idSelected: 0,
      items: [
        {
          id: 0,
          //html
          html: `
            <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/QR-1.PNG"
                alt="Star"
                loading="lazy"
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                Base Nacional Comum Curricular BNCC
              </p>
            </div>
          </div>
              `,
        },

        {
          id: 1,
          //html
          html: `

          <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/QR-2.PNG"
                alt="Star"
                loading="lazy"
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                Currículo de Referência em Tecnologia e Computação do Centro de
                Inovação para a Educação Brasileira (CIEB)
              </p>
            </div>
          </div>
              `,
        },
        {
          id: 2,
          //html
          html: `
            <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/QR-3.PNG"
                alt="Star"
                loading="lazy"
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                BNCC da Computação
              </p>
            </div>
          </div>
              `,
        },
        {
          id: 3,
          //html
          html: `
            <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/QR-4.PNG"
                alt="Star"
                loading="lazy"
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                Política Nacional de Educação Digital - Lei 14.533
              </p>
            </div>
          </div>
              `,
        },
      ],
    };
  },
  methods: {
    menu(event, menuOption) {
      // Remove classe de todos
      let nucleosItems = document.getElementsByClassName("nucleos-item");
      for (var i = 0; i < nucleosItems.length; i++) {
        nucleosItems[i].classList.remove("selected");
      }

      // Adiciona a classe para o item clicado
      event.target.classList.add("selected");

      // Conteúdo atual selecionado para mostrar html
      this.idSelected = menuOption;


    },
  },
  mounted() {
    
  },

  //html
  template: `
     
          <div class="content_menu_01" :data-order="idSelected">
            <div class="box-attention content px-24 py-16 px-8-mobile" >
              <div class="row">
                <div class="col m3 s3 nucleos-menu">
                  <ul class="ml-16">
                    <li @click="menu($event, 0)" class="pointer nucleos-item selected">2017</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item">2018</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item">2022</li>
                    <li @click="menu($event, 3)" class="pointer nucleos-item">2023</li>
                  </ul>
                </div>
                <div class="col m9 s9 flex--align-center" v-html="items[idSelected].html">
                  
                </div>
              </div>
            </div>
          </div>

    
    `,
};
