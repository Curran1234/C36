class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game")
        title.position(650,0);
        var input = createInput("Name");
        var button = createButton('play')
        var greetings = createElement('h3')
        input.position(650,160)
        button.position(650,200)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greetings.html("Hello " + name);
            greetings.position(650,160);
        })
    }

}