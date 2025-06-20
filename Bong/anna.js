// Selecting Elements
const body = document.body;
const val = body.querySelector('#val');
const submit = body.querySelector('#submit');
const place = body.querySelector('#place');


//Event once submit button is clicked
// Take the value and recursively create divs in place 
submit.addEventListener('click', function(){
    const inputvalue = parseInt(val.value);
    createDivs(inputvalue);
});

function createDivs(inputvalue){
   // If inputvalue is 0 or not an integer
   // Alert the user "Please enter a valid number"
   if(inputvalue === 0 || isNaN(inputvalue)){
       alert('Please enter a valid number');
   }git add
   else{
       // Create divs with height and width of 100px
       for(let i = 0; i < inputvalue; i++){
           let div = document.createElement('div');
           div.classList.add('gtr');
           place.appendChild(div);
       }
   }
}
