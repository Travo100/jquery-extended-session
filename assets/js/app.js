var game = {
    randomNumber: 0,
    totalNumber: 0,
    start: function() {
        // getting us a randomNumber
        this.randomNumber = this.generateRandomNumber(19, 120);

        // setting it in the UI
        $("#random-number").text(this.randomNumber);
        $("#total-number").text(this.totalNumber);

        // generate the buttons
        for(var i = 0; i < 4; i++) {
            var btn = $("<button>");
            btn.addClass("btn btn-success random-btn");
            btn.val(this.generateRandomNumber(1, 12));
            //btn.html("<img src='http://www.madonnamae.com/wp-content/uploads/2012/04/AuroreBoreale.jpg'>")
            btn.text("?");
            $("#button-container").append(btn);
        }
    },

    reset: function() {
        $("#button-container").empty();
        this.totalNumber = 0;
        this.start();
    },

    generateRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
};

game.start();


$(document).on("click", ".random-btn", function(){
    var btnValue = parseInt($(this).val());
    game.totalNumber += btnValue;
    $("#total-number").text(game.totalNumber);
    // if the totalNumber matches the randomNumber 
    if(game.totalNumber === game.randomNumber) {
        // we win 
        alert("You win!");
        game.reset();
    } else if (game.totalNumber > game.randomNumber) {
        alert("You lose!");
        game.reset();
    }
});