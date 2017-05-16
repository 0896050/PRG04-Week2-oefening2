class Fish {
            
    constructor() 
    {
      // fish
        let f = document.createElement("fish");
        document.body.appendChild(f);

        let fishx:number = Math.random() * window.innerWidth;
        let fishy:number = Math.random() * window.innerHeight;

        // we gebruiken hier left top omdat translate al in de animatie wordt gebruikt                
        f.style.left = fishx + "px";
        f.style.top = fishy + "px";

        // de kleur moet random worden
        let hue =  Math.floor(Math.random() * 360);
        f.style.webkitFilter = "hue-rotate("+ hue +"deg)";
        f.style.filter = "hue-rotate("+ hue +"deg)";

        // de vis moet op en neer bewegen
        let speed = Math.floor(Math.random() * 4 + 1);

        f.style.animation = "fishanimation " + speed + "s ease-in-out infinite alternate";

    }
 
}