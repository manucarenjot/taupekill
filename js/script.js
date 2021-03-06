const holes = $(".hole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard = $('.score');//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = $('.mole');// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";

function startGame() {
    setTimeout(() => {
        holes.hide();
    }, 10000)
    setInterval(() => {
        hole = randomHole()
        hole.toggleClass('up');
    }, 600)
    setInterval(() => {

        hole.toggleClass('up');
    }, 1000)
}

$('#startGame').click(function () {
    score = 0;
    scoreBoard.text(score);
    holes.show();
    holes.removeClass('up');
    startGame()
})

let score = 0;

    function randomHole() {
        const r = Math.floor(Math.random() * 6);
        return $(holes.get(r));
    }

//up the hole
$('.mole').click(function () {
    $(this).closest('.hole').removeClass('up');
    scoreBoard.text(score++);
});