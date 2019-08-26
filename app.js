function check() {
    var q1= document.game.q1.value;
    var q2= document.game.q2.value;
    var q3= document.game.q3.value;
    var q4= document.game.q4.value;

    var correct=0;

    if(q1 =="quickStop") {
        correct++;
    }
    if(q2 =="clock") {
        correct++;
    }
    if(q3 =="south") {
        correct++;
    }
    if(q4 =="3") {
        correct++;
    }

    var messages = ["100%","75%","50%","25%","0%"];

    var range;
    if (correct==0){
        range=4;
    }
    if (correct==1) {
        range=3;
    }
    if (correct==2) {
        range=2;
    }
    if (correct==3){
        range=1;
    }

    if (correct==4){
        range=0;
    }

    document.getElementById("doneClick").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("numberCorrect").innerHTML ="correct answers: " + correct;

}