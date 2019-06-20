let count=0;
let applePrice=10;
let totalBill=0;
let userPayment=0;
let AppleQuantity=0;
let OrangeQuantity=0;
let BananaQuantity=0;
function add(){
 userPayment=Number(document.getElementById('mytotal-money').value);
 totalBill=Number(document.getElementById('bill').innerHTML);
 if(userPayment <= totalBill ){
         alert('you have low balence')
 }
 else {
     // let add = document.querySelector('#add').innerHTML;
     document.querySelector("#add").innerHTML=AppleQuantity;
     AppleQuantity++;
     document.querySelector("#add").innerHTML=AppleQuantity;
     document.getElementById('bill').innerHTML=(AppleQuantity*10 )+(OrangeQuantity*15);

    
  
 }
   
}

function addOrange(){
        userPayment=Number(document.getElementById('mytotal-money').value);
        totalBill=Number(document.getElementById('bill').innerHTML);
        if(userPayment <= totalBill ){
                alert('you have low balence')
        }
        else {
            // let add = document.querySelector('#add1').innerHTML;
            document.querySelector("#add1").innerHTML=OrangeQuantity;
            OrangeQuantity++;
            document.querySelector("#add1").innerHTML=OrangeQuantity;
            document.getElementById('bill').innerHTML=(AppleQuantity*10 )+(OrangeQuantity*15);
       
           
         
        }
          
       }


       function add2OneNum(){
        userPayment=Number(document.getElementById('mytotal-money').value);
        totalBill=Number(document.getElementById('bill').innerHTML);
        if(userPayment <= totalBill ){
                alert('you have low balence')
        }
        else {
            // let add = document.querySelector('#add1').innerHTML;
            document.querySelector("#add2").innerHTML=BananaQuantity;
            BananaQuantity++;
            document.querySelector("#add2").innerHTML=BananaQuantity;
            document.getElementById('bill').innerHTML=(AppleQuantity*10 )+(OrangeQuantity*15)+(BananaQuantity*7);
       
           
         
        }
          
       }






















































   
   
    
    











