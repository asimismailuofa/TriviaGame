// Execute this code when the DOM has fully loaded.
$(document).ready(function () {

    var correctAns = 0;

    var inCorrectAns = 0;

    var UnAnswered = 0;

    var countDown = 30;

    var questions = [
        {
            q: "what was the first full length CGI Movie?",
            a: ["A Bug Life", "Monsters Inc", "Toy Story", "Lion King"],
            c: "Toy Story"
        },
        {
            q: "Which one of these is NOT a name of the spice girls?",
            a: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
            c: "Fred Spice"
        },
        {
            q: "Which NBA team won the most titles in the 90's",
            a: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
            c: "Los Angeles Lakers"
        },
        {
            q: 'Which group released the hit song, "Smells Like Teen Spirit"?', 
            a: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
            c: "Nirvana"
        },
        {
            q: 'Which popular Disney movie featured the song, "Circle of Life"?', 
            a: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
            c: "The Lion King"
        },
        {
            q: 'Finish this line from the Fresh Prince of Bel-Air theme song: "I whistled for a cab and when it came near, the licience plate said..."',
            a: ["Dice", "Mirror", "Fresh", "Cab"],
            c: "Fresh"
        },
        {
            q: "What was Doug's best friends name?",
            a: ["Skeeter", "Mark", "Zach", "Cody"],
            c: "Mark"
        },
        {
            q:"What was the name of the principal at Bayside High in Saved By The Bell?",
            a: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
            c: "Mr.Belding"
        }
    
    ];

    // Clicking the Start Button Starts the Game//
    // Timer Starts the second we hit the Start Button, it needs to be set at 30 seconds//
    function myTimer() {
        $("#count-down").text(countDown);
        console.log(countDown);
        countDown--;
    }

    function startGame() {
        var timer = setInterval(myTimer, 1000);
        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            $("#questions").append("<p>" + questions[i].q + "</p>");

            for (var j = 0; j < questions[i].a.length; j++) {


                //Questions start from 0 - 7 equals to 8 Q's total. 
                
                $("#questions").append("<input type='radio' name='q-" + i + "'" + "value='" + questions[i].a[j] + "'>" + questions[i].a[j] + "</input > ");

            }
        }
        //$("#buttons").append("<button id='done'>Done</button>");
        $("#done").attr("style", "display:block");
    }

    function finishGame() {
        var a0 = $("input[name='q-0']:checked").val();
        console.log(a0);
        if (a0 === questions[0].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a1 = $("input[name='q-1']:checked").val();
        console.log(a1);
        if (a1 === questions[1].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a2 = $("input[name='q-2']:checked").val();
        console.log(a2);
        if (a2 === questions[2].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a3 = $("input[name='q-3']:checked").val();
        console.log(a3);
        if (a3 === questions[3].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a4 = $("input[name='q-4']:checked").val();
        console.log(a4);
        if (a4 === questions[4].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a5 = $("input[name='q-5']:checked").val();
        console.log(a5);
        if (a5 === questions[5].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a6 = $("input[name='q-6']:checked").val();
        console.log(a6);
        if (a6 === questions[6].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        var a7 = $("input[name='q-7']:checked").val();
        console.log(a7);
        if (a7 === questions[7].c) {
            correctAns++;
        }
        else{
            inCorrectAns++;
        }
        //Total of 8 Q's//

        // clearInterval


        // remove #questions from the html
        $("#questions").remove();

        //show Answered score / Unanswered score on the html

        // - JQ to show in browser
    }
    
    $("#start").click(startGame);
    $("#done").click(finishGame);
});

// couldn't get to create a counter and show on the screen. will try to work more on it in the future when I can make it look better someday. 
