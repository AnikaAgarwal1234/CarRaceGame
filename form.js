class Form {
    constructor() {
        this.title = createElement('H2');
        this.nameHeading = createElement('H4');
        this.inputBox = createInput(""); 
        this.button = createButton("Log In");
        this.greet = createElement('H2'); 
    }

    display() {
        this.title.html("Car Racing Game"); 
        this.title.position(700, 50);
        this.nameHeading.html("Name: ");
        this.nameHeading.position(650, 105); 
        this.inputBox.position(750, 125); 
        this.button.position(750, 250); 
        this.button.mousePressed(()=> {
            this.inputBox.hide()
            this.button.hide()
            this.nameHeading.hide()
            player.name = this.inputBox.value() 
            playerCount = playerCount + 1; 
            player.updateCount(playerCount)
            player.update(); 
            this.greet.html("Hello " + player.name); 
            this.greet.position(700, 250); 
        })
    }

    hide() {
        this.nameHeading.hide()
        this.inputBox.hide()
        this.button.hide()
        this.greet.hide()
    }

}
