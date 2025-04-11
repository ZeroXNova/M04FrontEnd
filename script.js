//eventlistener,triggers when DOM is loaded
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://detailed-free-ballcap.glitch.me/api/songs");
    const songs = await response.json();

    let html = "";
    for (let song of songs){
        html+= `<li>${song.title} - ${song.artist}</li>`;
    } 
    document.querySelector("#addedsong").innerHTML = html;
});
