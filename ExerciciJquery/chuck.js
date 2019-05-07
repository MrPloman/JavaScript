'use strict'
window.addEventListener('load',function(){
    console.log("cargado");
    var bot = $('button.button');
    var feed = $('#feed');
    feed.hide();
    function fetchFeed() {
        $.ajax({
            url: 'https://api.icndb.com/jokes/random',
            dataType: 'json',
            type: 'GET',
            success: function(data) {
            var output = '<p>' + data.value.joke + '</p>';
            feed.html(output);
            },
            error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                var output = '<p>Unable to access WordPress Posts. Please check your URL and try again!</p>';
            } else if (jqXHR.status == 404) {
            var output = '<p>The requested page not found. [404]</p>';
            } else if (jqXHR.status == 500) {
            var output = '<p>Internal Server Error [500].</p>';
            } else if (exception === 'parsererror') {
            var output = '<p>Requested JSON parse failed.</p>';
            } else if (exception === 'timeout') {
            var output = '<p>Time out error.</p>';
            } else if (exception === 'abort') {
            var output = '<p>Ajax request aborted.</p>';
            } else {
            var output = '<p>Uncaught Error.\n' + jqXHR.responseText + '</p>';
            }
            feed.html(output);
            }
        });
    }
    bot.click(function() {
        feed.show();
        fetchFeed();
    });
    function biggerfont(){
        feed.css("font-size", "40px");
    }
    function smallerfont(){
        feed.css("font-size", "30px");
    }
    feed.hover(biggerfont, smallerfont);
});