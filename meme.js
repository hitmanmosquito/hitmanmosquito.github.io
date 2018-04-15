$(function () {
    var urlParams = new URL(window.location).searchParams;
    function getParam(name, def) {
        return urlParams.get(name) === null ? def : urlParams.get(name);
    }
    let count = parseInt(getParam('c', 5));
    var randomizedCount = Math.floor(Math.random() * count) + count;
    for (var i = 0; i < randomizedCount; i++) {
        var meme = $(`<div class="meme"><img src="small_hitman.png" style="max-width: 100%"/><h2>Hitman #${i + 1}</h2></div>`);
        meme.appendTo('body');
    }
    var minTime = parseInt(getParam('t', 250));
    var maxTime = parseInt(getParam('m', 1000));
    if (minTime > maxTime)
        maxTime = minTime;
    
    function getRandPos() {
        return {marginLeft: `${Math.floor(Math.random() * 90) + 1}vw`, marginTop: `${Math.floor(Math.random() * 80) + 1}vh`};
    };
    function completeFunc() {
        $(this).animate(getRandPos(), {complete: completeFunc, duration: Math.floor(Math.random() * (maxTime - minTime)) + minTime});
    };
    $('.meme').animate(getRandPos(), {complete: completeFunc, duration: Math.floor(Math.random() * (maxTime - minTime)) + minTime})
});