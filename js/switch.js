/**
 * Created by mattpowell on 5/6/16.
 */


//function coolfunction() {
  //  var hits = "1";
 
    //switch(hits){
      //  case "1":
        //    alert("It's a single");
          //  break;
        //case "3":
          //  alert("It's a triple");
//}
//}

var text = "";

for (var i = 0; i < 12; i++) {
    if(i===9){break;}
    text += "Output is " + i + ". ";
}

function print() {
    document.getElementById("box").innerHTML = text;
}

