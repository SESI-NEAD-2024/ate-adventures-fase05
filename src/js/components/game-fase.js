let gameFrame=null,gameIframe=null,scormDataJson=null;export default{data(){return{debugWithoutScorm:!1,scormData:{},playerDefault:{Jogador_Nome:"Jogador",Personagem:"01",student_name:null,student_id:null}}},mounted(){console.log("game-fase.js"),this.scormLoad()},methods:{scormLoad(){"undefined"!=typeof scormAPI&&scormAPI?this.checkScormInitialization():this.loadGenericPlayer()},checkScormInitialization(){let e=setInterval(()=>{console.log("PRE LMSIsInitialized"),LMSIsInitialized()&&(clearInterval(e),console.log("LMSIsInitialized"),this.loadScormData(),this.setupGame())},500)},loadScormData(){var e=getScormData(FIELDS.studentId),a=this.getLocalStorage();a&&a.student_id===e?(console.log("Carregando dados do LocalStorage"),this.scormData=a):(console.log("Carregando dados genéricos"),this.scormData=this.playerDefault)},loadGenericPlayer(){this.scormData=this.getLocalStorage()||this.playerDefault,this.setupGame()},saveLocalStorage(){try{this.scormData.student_name=getScormData(FIELDS.studentName)||this.playerDefault.Jogador_Nome,this.scormData.student_id=getScormData(FIELDS.studentId)||this.playerDefault.Personagem,localStorage.setItem("Game",JSON.stringify(this.scormData))}catch(e){console.log("API SCORM não disponível"),this.scormData.student_name=this.playerDefault.Jogador_Nome,this.scormData.student_id=this.playerDefault.Personagem,localStorage.setItem("Game",JSON.stringify(this.scormData)),console.error(e)}},getLocalStorage(){var e=localStorage.getItem("Game");return!!e&&JSON.parse(e)},setupGame(){(gameFrame=document.getElementById("game-frame")).insertAdjacentHTML("beforeend",'<iframe id="game-iframe" frameborder="0" loading="lazy" tabindex="-1" ></iframe>'),gameIframe=document.getElementById("game-iframe");let a=()=>{var e=window.scrollY+window.innerHeight;gameFrame.offsetTop<=e&&(gameIframe.src="./src/GDevelop/index.html",window.removeEventListener("scroll",a))};window.addEventListener("scroll",a),gameIframe.addEventListener("load",()=>{document.querySelector("#iframe-callback").style.display="none"}),document.querySelector("#game-wrapper").style.display="block",scormDataJson=JSON.stringify(this.scormData),window.gameDataJson=scormDataJson,this.trackGameCompletion()},trackGameCompletion(){this.saveLocalStorage();let e=setInterval(()=>{"concluiuScorm"===gameIframe.dataset.value&&(console.log("Concluiu SCORM"),this.saveLocalStorage(),clearInterval(e),finishTopic())},1e3)}},template:`
   <div id="game-frame">
      
      <img       
        src="src/img/game-frame.png"
        alt="wrapper"
        loading="lazy"
        id="game-wrapper"
      />
      <div id="iframe-callback">
        <h3>Carregando jogo... </h3>
      </div>


   </div>
   `};