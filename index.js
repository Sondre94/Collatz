let inputEl = document.getElementById('input-el')

function submit(number) {
    console.log(inputEl.value)
    while(number != 1){

        //print the num
        console.log(number);
  
        //if the number is even
        if(number % 2 == 0){
  
          number = parseInt(number / 2); 
  
        }else{
          //if the number is odd
          number = (number * 3) + 1;
        }
      }
  
    // print the last number
    console.log(number);
  }

  submit(144)