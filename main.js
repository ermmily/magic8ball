// Magic 8ball!!!

//gbl vars
let otpt = document.getElementById("response");

//declare function >:)

document.getElementById("magic8Ball").addEventListener("click", response);

function response() {
  var inpt = document.getElementById("input");
  if (inpt.value == "") {
    otpt.innerHTML = "Please ask a question...";
  } else if (
    inpt.value.toLowerCase() == "does a magic 8 ball actually work?" ||
    inpt.value.toLowerCase() == "does this work?"
  ) {
    otpt.innerHTML = "How dare you doubt me! 😠";
  } else if (inpt.value.toLowerCase() == "is javascript awesome?") {
    otpt.innerHTML = "Obviously!! 🙄";
  } else if (
    inpt.value.toLowerCase() === "should i go back to playing video games?"
  ) {
    otpt.innerHTML = "Are you leaving me!? 😠 ";
  } else if (inpt.value.toLowerCase() == "should i do my homework?") {
    otpt.innerHTML = "Are you Procrastinating!?!?!";
  } else {
    var rand = Math.random();
    console.log(rand);
    if (rand < 0.2) {
      otpt.innerHTML = " Without a doubt. ";
    } else if (rand < 0.4) {
      otpt.innerHTML = " As I see it, yes.";
    } else if (rand < 0.6) {
      otpt.innerHTML = " Concentrate and ask again. ";
    } else if (rand < 0.8) {
      otpt.innerHTML = " Don't count on it. ";
    } else if (rand < 1) {
      otpt.innerHTML = " Outlook not so good.  ";
    }
  }
}
