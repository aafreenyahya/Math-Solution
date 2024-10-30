//////////////Math Solution//////////////

var userAsk = prompt("What do you want?  \nforward counting  \nbackward counting  \nmultipication table");
var forwardCounting = "forward counting";
var backwardCounting = "backward counting";
var multitab = "multiplication table";

if(userAsk === forwardCounting){
   var userstarting =+prompt("Give starting point");
   var userending =+prompt("Give ending point");

      var counting1 = "";

   if(userstarting <= userending){
      for (var i = userstarting; i <= userending; i++ ){
         counting1 += i + " ";
         document.write(counting1);
      }
   }

else{
   document.write("InValid Range!!!")
}

}

else if(userAsk === backwardCounting ){
   var userstarting =+prompt("Give starting point");
   var userending =+prompt("Give ending point");

   var counting2 = " ";

   if(userstarting >= userending){
      for (var i = userstarting; i >= userending; i-- ){
         counting2 += i + " ";
         document.write(counting2);
      }
   }

   else{
      document.write("InValid Range!!!")
   }
}

else if(userAsk === multitab){
   var table =prompt("Which num of Table you want?")

   var num = table;
   var tableTable = ""

   for(var i = 1; i <= 10; i++){
      tableTable += num + " x "  + i + "= " + (num * i) + "<br>"
   }
   document.write(tableTable);
}

else{
   document.write("InValid Range!!");
}










