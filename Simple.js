function Get(url) {
    let Httppreq = new XMLHttpRequest();
    Httppreq.open("GET", url, false);
    Httppreq.send(null);
    return Httppreq.responseText;
}
alert('a')

let quiz = JSON.parse(Get("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"));

// for (var i = 0; i < quiz.results.length; i++) {
//     document.getElementById("container").innerHTML += "<p>" + quiz.results[i].question + "</p>"

//     console.log(i + " " + quiz.results[i].question + "\n");
// }

let n = 0
while (true) {
    alert(quiz.results[i].question)
    document.getElementById("container").innerHTML += "<p>" + quiz.results[i].question + "</p>"
    console.log(quiz.results[n].question);
    n = n + 1

}