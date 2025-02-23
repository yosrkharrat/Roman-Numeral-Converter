const input=document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");

const convertToRoman = (num) => {
    const ref = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    
    let res = "";
    ref.forEach(([symbol, value]) => {
        while (num >= value) {
            res += symbol;
            num -= value;
        }
    });

    return res;
};

button.addEventListener("click",function(){
  if (input.value==""){
    output.textContent="Please enter a valid number"
  }
  else if(input.value<1){
    output.textContent="Please enter a number greater than or equal to 1"
  }
  else if(input.value>3999){
    output.textContent="Please enter a number less than or equal to 3999"
  }
  else{
    output.textContent = input.value +" in Roman numerals is: " + convertToRoman(input.value);
  }
});
