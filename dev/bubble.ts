class Bubble {
            
    constructor() 
    {
        // bubble
        let b = document.createElement("bubble");
        document.body.appendChild(b);
                        
        let startx:number = Math.random() * window.innerWidth;
        b.style.left = startx + "px";

        let speed = Math.floor(Math.random() * 3 + 1);

        b.style.animation= "bubbleup " + speed + "s linear infinite";
    }
}