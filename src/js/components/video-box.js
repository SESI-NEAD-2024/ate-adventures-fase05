


export default {
    name: "VideoBox",

    template: //html 
    `
    <div
    class="video-box mt-80"
    style="max-width: 970px; margin-left: auto; margin-right: auto"
  >
    <div id="video-play" class="play-wrap">
  
      <div class="play">
        <slot name="play"></slot>
      </div>
      
    </div>
    
      <slot name="visual"></slot>
    </div>
    `,
  };
  
    
