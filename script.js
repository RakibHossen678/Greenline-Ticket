const seatElement=document.querySelectorAll('.kbd')
// console.log(seatElement);

let count = 0;
let seats = 40;
let total=0;
let seatName=[];
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

        
        
        
        if(!seatName.includes(Seat)){
            seatName.push(Seat) 
            
            
            
            
        }
        else{
            alert("You can't click it twice")
            count -= 1
            document.getElementById('seatCount').innerText= count
            seats += 1
            document.getElementById('seatsLeft').innerHTML=seats;
            div.classList.add('hidden')
            total-=550
            document.getElementById('totalPriceContainer').innerText = total

            document.getElementById('grandTotal').innerText=total;
           

        }
        

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
        document.getElementById('nextBtn').classList.remove('bg-gray-400')
        document.getElementById('nextBtn').classList.add('bg-[#1DD100]')
        document.getElementById('nextBtn').removeAttribute('disabled');
       
    }
    
})


document.getElementById('inputText').addEventListener('keyup',function(e){
     let numValue=(e.target.value)
     if(count===4){
        if(numValue === 'NEW15' || numValue==='Couple 20'){
            document.getElementById('applyBtn').removeAttribute('disabled');
            document.getElementById('applyBtn').classList.remove('bg-gray-400')
        document.getElementById('applyBtn').classList.add('bg-[#1DD100]')

        }

     }
     else{
        alert('You have to select at least 4 tickets')
    }
    
})




document.getElementById('applyBtn').addEventListener('click',function(){
    const inputFieldValue=document.getElementById('inputText').value;
    // console.log(inputFieldValue);
    if(count===4){
        if(inputFieldValue === 'NEW15'){
            const discounValue= document.getElementById('discounValue');           
            discounValue.innerText=total*15/100;
            // console.log(discounValue.);
            document.getElementById('grandTotal').innerText =  total - parseInt(discounValue.innerText);
            document.getElementById('span').classList.add('hidden')                        
            document.getElementById('span2').classList.remove('hidden')    
        }  
        else if(inputFieldValue==='Couple 20'){

            const discounValue= document.getElementById('discounValue');           
            discounValue.innerText=total*20/100;
            document.getElementById('grandTotal').innerText= total - parseInt(discounValue.innerText);
            document.getElementById('span').classList.add('hidden')                        
            document.getElementById('span2').classList.remove('hidden')                        
        }   
        else{
            alert('Invalid Cupon code')
        }    
       
    }
    

})