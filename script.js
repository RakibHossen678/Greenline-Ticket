const seatElement=document.querySelectorAll('.kbd')
// console.log(seatElement);

let count = 0;
let seats = 40;
let total=0;
for (const seat of seatElement) {
    seat.addEventListener('click',function(){

        if(count<4){
            seat.classList.add('bg-[#1DD100]');
        seat.classList.add('text-white');
        count += 1;
        const seatCount = document.getElementById('seatCount').innerText= count;

        seats-=1
        document.getElementById('seatsLeft').innerHTML=seats;

        const seatsContainer = document.getElementById('seatsContainer')
        let Seat = seat.innerText;
        const div=document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-between')
        div.classList.add('pb-1')
        const p = document.createElement('p')
        p.innerText = Seat ;
        const p2=document.createElement('p')
        p2.innerText='Economy'
        const p3=document.createElement('p')
        p3.innerText='550TK'


      
        // div.classList.add('leading-loose')
        // div.classList.add('tracking-widest')

        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        seatsContainer.appendChild(div)
        
        const ticketPrice=parseInt(document.getElementById('ticketPrice').innerText);

        total=total+ticketPrice
        const totalPriceContainer = document.getElementById('totalPriceContainer');
        totalPriceContainer.innerText=total

        const grandTotal=document.getElementById('grandTotal')
        grandTotal.innerText=total

        // console.log( totalPriceContainer);
            
        }
        else{
            alert("You can't select more than 4")           

        }

        
        
        
        



        
    })
    
}


document.getElementById('nextBtn').addEventListener('click' , function(){
    document.getElementById('success').classList.remove('hidden') ;

})
document.getElementById('continue').addEventListener('click' , function(){
    document.getElementById('success').classList.add('hidden') ;

})

let numValue;
document.getElementById('number').addEventListener('keyup',function(e){
     numValue=(e.target.value)
     if(numValue.length >= 1 && count>=1){
        document.getElementById('nextBtn').removeAttribute('disabled');
    }
    
})


// const number = ;
// let numValue=parseInt(number.value)
// console.log(numValue);
