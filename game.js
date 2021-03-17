class Game {
    constructor() {}
    getState() {
       var gameStateRef = database.ref('gameState')
       gameStateRef.on("value", function(data){
           gameState = data.val() 
       }); 
    }
    update(state) {
        database.ref('/').update({
            gameState: state 
        })
    }
    start() {
        if (gameState === 0) {
            form = new Form() 
            form.display() 
            player = new Player()
            player.getCount()  
        }
    }

    play() {
        console.log("hello")
        form.hide() 
        textSize(30)
        text ("Game Starts", 170, 100); 
        Player.getPlayerInfo()
        if (allPlayers !== undefined) {
            var y = 150; 
            for (var p in allPlayers) {
                if (p === "Player" + player.index) {
                    fill("red");
                }
                else {
                    fill("black");
                }
                y += 50;
                text (allPlayers[p].name + ":" + allPlayers[p].distance, 200, y);
            }
        } 
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 10; 
            player.update() 
        }
    }
}
