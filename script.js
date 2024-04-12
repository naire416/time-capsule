
$(document).ready(function(){
    $("#form-button").click(function(){
        $("#form-container").toggle();
    });

    $("#form-submit").click(function(e){
        e.preventDefault(); 
        $("#story-new").css("opacity", "100%");

        
        var container = $("<div></div>");
        var date = $("<div></div>").text($("#question-1").val());
        var location = $("<div></div>").text($("#question-2").val());
        var text = $("<div></div>").text($("#question-3").val());
        var note = $("<div></div>").text($("#question-4").val());

        var story_timestamp = $("<div></div>");
        $(story_timestamp).append(date, location);
        $(container).append(story_timestamp, text, note);
        $(container).addClass("story-new");
        $(story_timestamp).addClass("story-timestamp");
        $(note).addClass("story-note");
        $("#story-new-container").append(container);

        var random_x = Math.floor(Math.random() * window.screen.availWidth - 100) + 150;
        var random_y = Math.floor(Math.random() * window.screen.availHeight - 100) + 30;

        $(container).css("margin-left", random_x + "px");
        $(container).css("margin-top", random_y + "px");

        //if statement - if y is below .. x is pushed to the right.

        if(random_y>1200){
            $(random_x).css("margin-left", random_x + "px" + 500);
        }
        

    });
});
