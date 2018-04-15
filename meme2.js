$(function () {
    var mCount = Math.floor(Math.random() * 50) + 50;
    for (var i = 0; i < mCount; i++) {
        var meme = $(`<div class="meme"><img src="small_hitman.png" style="max-width: 100%"/><h2>Hitman #${i + 1}</h2></div>`);
        meme.css({width: '10vw', position: 'absolute'})
        meme.appendTo('body');
    }
    var minTime = 250;
    
    function getRandPos() {
        return {marginLeft: `${Math.floor(Math.random() * 90) + 1}vw`, marginTop: `${Math.floor(Math.random() * 80) + 1}vh`};
    };
    function completeFunc() {
        $(this).animate(getRandPos(), {complete: completeFunc, duration: Math.floor(Math.random() * (1000 - minTime)) + minTime});
    };
    $('.meme').animate(getRandPos(), {complete: completeFunc, duration: Math.floor(Math.random() * (1000 - minTime)) + minTime})
});