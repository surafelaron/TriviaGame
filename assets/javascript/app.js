$(document).ready(function(){

$("#startTrivia").on('click',function(){
    $("#startTrivia").remove();
    $('#checking').remove();
    game.loadQuestion();
  })
  
$(document).on('click', '.choises-button', function(e){
    game.clicked(e);
  })
  
  $(document).on('click', '#reset', function(){
    game.reset();
  })
  
  var questions = [{
  
          question: "wher did denerys born?",
          answers: ["qarth", "mereen", "kingslanding", "dragonstone"],
          correctAnswer: "dragonstone",
        },
        {
            question: "who is the real father of john snow",
            answers: ["robert baratheon", "ned stark", "reagar targaryan", "aegon targaryan"],    
            correctAnswer: "reagar targaryan",
    
          },
          {
            question: "what was the battle that tyrion lannister injured?",
            answers: ["the battle of bastads", "the battle of black water", "red wedding", "tyrion was never been on battle"],    
            correctAnswer: "the battle of black water",
    
          },
          {
            question: "what was the main reason that led to war all over westrose?",
            answers: ["killing of aegon", "killing of arys", "evil cerci", "lannisters power abuse"],    
            correctAnswer: "killing of arys",
    
          },
           {
            question: "who was behind the killing of jon arys?",
            answers: ["robert", "jon snow", "little finger", "cerci"],    
            correctAnswer: "little finger",
    
          },
           {
            question: "who are known for wolf sigil?",
            answers: ["starks","lannisers","dornish", "boltons"],    
            correctAnswer: "starks",
            
          },
          {
            question: "the battle of the bastards took place in?",
            answers: ["winterfel","kingslanding","dragonstone","on the wall"],    
            correctAnswer: "winterfel",
            
          },
          {
            question: "who is the rightful heir to the throne?",
            answers: ["cerci lannister","denerys targaryan","brandon stark","jon snow"],    
            correctAnswer: "jon snow",
            
          },
          {
            question: "what is tyrion lannister's postion?",
            answers: ["adviser","general","queens trustee","queens hand"],    
            correctAnswer: "queens hand",
            
          },
          {
            question: "what is the instrument used mainly for GoT theme song",
            answers: ["gitar","violyn","telo","flute"],    
            correctAnswer: "telo",
        }]
  
    var game = {
      questions: questions,
      currentQuestion: 0,
      counter: 15,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      
      countdown: function(){
        game.counter--;
        $('#counter').html(game.counter)
        if(game.counter<=0) {
          game.timeUp();
        }
      },
      loadQuestion: function() {
        timer = setInterval(game.countdown,1000);
        $("#begining").html("<h2 id='counter'>15</h2>")
        $("#begining").append('<h2>' +questions[game.currentQuestion].question+ '</h2>')
        for (var i=0;i<questions[game.currentQuestion].answers.length; i++) {
          $("#begining").append('<button class="choises-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>')
        }
  
      },
      nextQuestion: function() {
        game.counter = 15;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
      },
      timeUp: function() {
        game.incorrect++
        clearInterval(timer)
        $("#begining").html("<h2> Ran out of time!</h2>")
        $("#begining").append("<h3> correct anwser is: " + questions[game.currentQuestion].correctAnswer + "</h3>" )
        if (game.currentQuestion==questions.length-1){
          setTimeout(game.results,1*1000)
        } else {
          setTimeout(game.nextQuestion,1*1000)
        } 
      },
      results: function(){
        clearInterval(timer);
        $("#begining").html("Nice!! here is your result")
        $("#begining").append("<h3> Right Awnsers: " + game.correct + "</h3>")
        $("#begining").append("<h3> Wrong Awnsers: " + game.incorrect + "</h3>")
        $("#begining").append("<button id='reset'>Play Again?</button")
      },
      clicked: function(e) {
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
          game.anwseredCorrectly();
        } else {
          game.anwseredIncorrectly();
        }
      },
      anwseredCorrectly: function() {
        clearInterval(timer);
        game.correct++
        $("#begining").html("<h2> Correct </h2>")
        if (game.currentQuestion==questions.length-1){
          setTimeout(game.results,1*1000)
        } else {
          setTimeout(game.nextQuestion,1*1000)
        }
  
      },
      anwseredIncorrectly: function() {
        clearInterval(timer);
        game.incorrect++
        $("#begining").html("<h2>Wrong!</h2>")
        $("#begining").append("<h3> The correct anwser is: " + questions[game.currentQuestion].correctAnswer + "</h3>" )
        if (game.currentQuestion==questions.length-1){
          setTimeout(game.results,1*1000)
        } else {
          setTimeout(game.nextQuestion,1*1000)
        }
      },
      reset: function() {
  
        game.currentQuestion = 0;
        game.counter = 10;
        game.correct= 0;
        game.incorrect =0;
        game.loadQuestion()
      }
    }
});