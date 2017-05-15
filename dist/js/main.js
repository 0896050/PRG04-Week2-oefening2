var Bubble = (function () {
    function Bubble() {
        var b = document.createElement("bubble");
        document.body.appendChild(b);
        var startx = Math.random() * window.innerWidth;
        b.style.left = startx + "px";
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var f = document.createElement("fish");
        document.body.appendChild(f);
        var fishx = Math.random() * window.innerWidth;
        var fishy = Math.random() * window.innerHeight;
        f.style.left = fishx + "px";
        f.style.top = fishy + "px";
        var hue = Math.floor(Math.random() * 360);
        f.style.webkitFilter = "hue-rotate(" + hue + "deg)";
        f.style.filter = "hue-rotate(" + hue + "deg)";
    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.fish = new Fish();
        this.bubble = new Bubble();
        this.startgame();
    }
    Game.prototype.startgame = function () {
        var fishs = [];
        for (var i = 0; i < 20; i++) {
            var f = this.fish = new Fish();
            fishs.push(f);
        }
        var bubbles = [];
        for (var j = 0; j < 20; j++) {
            var b = this.bubble = new Bubble();
            bubbles.push(b);
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map