var second = [24, 11, 2, 245];
var third = [24, 10, 23, 245];
var fourth = [24, 110, 2, 244];

function isOdd(n) {
    var x = n.length
    console.log(x)
 
    //debugger;
    while (x>0) {
        if (n.shift() % 2 === 0) {
          console.log(n);
          return false || isOdd(n);
       } 
        else { 
              console.log('There is an odd');
               return true;
        }
    }
    
    x--;    
}


function shift(n) {
    n.shift(),
    console.log(n);
}

//shift(second);
isOdd(second);
isOdd(third);
isOdd(fourth);  

  //fruits.shift();
  //console.log(fruits.length);
  //document.getElementById("demo").innerHTML = fruits;