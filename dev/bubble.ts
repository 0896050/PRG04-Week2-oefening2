class Bubble {
            
    constructor() 
    {
        // bubble
        let b = document.createElement("bubble");
        document.body.appendChild(b);
                        
        let startx:number = Math.random() * window.innerWidth;
        b.style.left = startx + "px";

        // de bubble moet van beneden naar boven gaan
        let speed = Math.floor(Math.random() * 3 + 1);

        // de bubble moet heen en weer bewegen
        let move = Math.floor(Math.random() * 3 + 1);

        b.style.animation = "bubbleup " + speed + "s linear infinite", 
                            "bubblemove " + move + "s ease-in-out infinite alternate";
    }
}