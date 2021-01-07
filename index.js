window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelectorAll(".visual");
    const colors  = [
        "#40ff00",
        "#ffff00",
        "#00bfff",
        "#ff00ff",
        "#ff0000",
        "#00ffbf",
        "#ffbf00",
        "#ff8000",
        "#936c6c",
        "#660000"
    ]
    

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; 
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
    };
});
