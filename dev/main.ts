/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    fish: Fish;
    bubble: Bubble;
    
    constructor() 
    {
        this.fish = new Fish();
        this.bubble = new Bubble();
        this.startgame();
    }

    startgame()
    { 
        let fishs = [];
        for (let i = 0; i < 20; i++)
        {
            let f = this.fish = new Fish();
            fishs.push(f);
        }

    let bubbles = [];
        for (let j = 0; j < 20; j++)
        {
            let b = this.bubble = new Bubble();
            bubbles.push(b);
        }
    }
} 

// load
window.addEventListener("load", function() {
    new Game();
});