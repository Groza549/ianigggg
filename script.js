document.getElementById("animatedDiv").addEventListener("click", function(event) {
    for (let i = 0; i < 10; i++) { // Creăm 10 bucăți de text
        let text = document.createElement("span");
        text.classList.add("exploding-text");
        text.innerText = "Bou prost!";
        
        // Poziționăm textul la mijlocul div-ului
        text.style.left = "50%";
        text.style.top = "50%";
        text.style.transform = "translate(-50%, -50%)";

        // Generăm direcții aleatorii pentru explozie
        let randomX = (Math.random() * 400 - 200) + "px";
        let randomY = (Math.random() * 400 - 200) + "px";

        text.style.setProperty("--x", randomX);
        text.style.setProperty("--y", randomY);

        document.body.appendChild(text);

        // Eliminăm textul după animație
        setTimeout(() => text.remove(), 1000);
    }
});