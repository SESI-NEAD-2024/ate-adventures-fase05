export default{data(){return{formData:{Jogador_Nome:null,Personagem:null},submitted:!1,debugWithoutScorm:!1}},mounted(){console.log("Componente INTRODUCAO"),console.log(FIELDS.suspendData)},methods:{handleSubmit(){this.submitted=!0,this.submitted&&null!=this.formData.Jogador_Nome&&null!=this.formData.Personagem&&(this.saveToScorm(),this.$router.push("/curso-fase-01"))},saveToScorm(){var e=JSON.stringify(this.formData);this.debugWithoutScorm||(saveSuspendData(e),console.log(FIELDS.suspendData),console.log(getScormData(FIELDS.suspendData)))},selectPersonagem(e,a){for(var t=document.getElementsByClassName("characters-item"),r=0;r<t.length;r++)t[r].classList.remove("characters-selected");"label"===e.currentTarget.tagName.toLowerCase()&&e.currentTarget.classList.add("characters-selected"),this.Personagem=a}},template:`
   <div class="introducao-game  flex--align-center flex--justify-center">
    <div class="container--medium center-align">
      <h1 class="mb-40">ESCOLHA SEU PERSONAGEM</h1>
      <h1 id="debug"></h1>
      <form action="get" class="mt-80" required @submit.prevent="handleSubmit()">
        <div class="characters flex--justify-between">
          <label
            @click="selectPersonagem($event, '01')"
            class="mr-24-tablet mb-24-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-01.svg" alt="Player" />
            <input type="radio" name="Personagem" value="01" v-model="formData.Personagem" required />
          </label>
          <label
            @click="selectPersonagem($event, '02')"
            class="mb-24-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-02.svg" alt="Player" />
            <input type="radio" name="Personagem" value="02" v-model="formData.Personagem" required />
          </label>
          <label
            @click="selectPersonagem($event, '03')"
            class="mr-24-tablet mb-0-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-03.svg" alt="Player" />
            <input type="radio" name="Personagem" value="03" v-model="formData.Personagem" required />
          </label>
          <label
            @click="selectPersonagem($event, '04')"
            class="mb-0-tablet characters-item pointer flex--align-center flex--justify-center"
          >
            <img src="src/img/player-04.svg" alt="Player" />
            <input type="radio" name="Personagem" value="04" v-model="formData.Personagem" required />
          </label>
        </div>

        <div class="form-bottom">
        <input
          v-model="formData.Jogador_Nome"
          id="name"
          class="mr-40 mr-0-mobile mb-24-mobile"
          type="text"
          placeholder="Insira seu nome aqui"
          required
        />
        <input
          class="btn game"
          type="submit"
          placeholder="COMEÇAR AVENTURA"
        />
        </div>
      </form>
  </div>
 </div>
      `};