let inputEl = document.getElementById('input-el')
let count = 0
let collatsArr = []
const max = Math.max(collatsArr)

function submit() {


  let collatz = (number) => {
    while(number != 1){

      if(number % 2 == 0){
        collatsArr.push(number)
        number = number / 2; 
      }
      else{
        number = (number * 3) + 1;
      }
    }
    
  collatsArr.push(number)
  console.log(collatsArr)
}
collatz(inputEl.value)
let max = Math.max.apply(0, collatsArr);

    // resultat
  
    document.getElementById('inputNum').innerHTML = "Utfører Collatz funksjonen på tallet " +  inputEl.value 
    document.getElementById('collatzLength').innerHTML = "Antall steg før tallet endte på 1: " + collatsArr.length
    document.getElementById('collatzMax').innerHTML = "Høyeste tall nådd i sekvensen: " + max



}