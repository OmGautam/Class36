class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Car Game");
        title.position(200,10);

        var input = createInput("name");
        input.position(200,150);

        var button = createButton("play");
        button.position(200,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("hello"+name);
            greeting.position(200,150);
        })
    }
}