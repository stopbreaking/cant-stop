(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app2`).innerHTML=`
  <div id="embeddedGame">
    <embed type="text/html" src="../public/I-cant-stop/index.html" width="100%" height="768px">
  </div>
  <div id="projectBlurb"> 
    <h1>I Can't Stop!</h1>
    <p> 
    A videogame. From a programming perspective, a straightforward project where the biggest engineering challenge was managing states for the playercharacter and boss.
    Motivated after seeing the simplicity of IWBTG custom levels.
    </p>
  </div>
`;