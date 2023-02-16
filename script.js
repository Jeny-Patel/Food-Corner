/*  
-Select shop
-place order
-press button to recieve bill
-displays bill 
-enter payment 
-press 'press me' button after paying payment 
-displays the amount user forgot pay if payment is less than the bill
-displays the amount user paid extra if payment is more than the bill
-displays have a good day message if payment is equal to the bill
-user can press return button any time to return to main shope page
-The program might not work properly if user enters non number input in placing number of item order and while paying payment because I have not yet learned how to make user input fully error proof 
*/
  
  var input=[];
  var checkPay;
  var taxBill;
  var inputPayment;  
  var itCameFrom;
  var userPaid
  var safteyKey
  let imgCoffe
  let imgfast_food
  let imgstart
  
  //makes bill
  makeBill= function () {
    
    background(218,204,70);
    
    safetyKey=3
    textSize(17);
    stroke(0,0,0);
    
    //displays customer order
    fill(233,156,226);
    rect(350,90,500,180);
    noStroke();
    
    //titles
    fill(0,0,0);
    text("Food Items",370,120);
    text("Price",583,120);
    text("No. of food items ordered",648,120);
    fill(55,4,4);
    textSize(20);
    
    numberOfOptions=1;
    menuItem=0;
    
    //displays food items 
    while(numberOfOptions<6){

     textSize(15);
     text(menuList[menuItem],370,122+(25*numberOfOptions));
     menuItem++;
     numberOfOptions++;

    }
    
    numberOfOptions=1;
    menuItem=0;
    
    //displays food items 's price
    while(numberOfOptions<6){
   
     textSize(15);
     text("$ "+menuItemPrice[menuItem],590,121+(25*numberOfOptions));
     menuItem++;
     numberOfOptions++;
  
    }
    
    numberOfOptions=1;
    menuItem=0;
    
    //displays no. of food items customer ordered
    while(numberOfOptions<6){
    
     textSize(15);
     text(input[menuItem].value(),745,121+(25*numberOfOptions));
     menuItem++;
     numberOfOptions++;

    }
       
//bill without tax    
    bill=input[0].value()*this.menuItemPrice[0]+input[1].value()*this.menuItemPrice[1]+input[2].value()*this.menuItemPrice[2]+input[3].value()*this.menuItemPrice[3]+input[4].value()*this.menuItemPrice[4];
  
    //displays bill
    textSize(30);
    fill(28,22,119);
    text("Your Bill",122,85);
    text("Your Order",540,85);
    fill(254,253,255);
    stroke(3,2,6);
    rect(50,90,260,300);
    
    //displays total bill without tax 
    stroke(83,89,81);
    fill(234,48,40);
    textSize(20);
    text("Total without Tax:  $"+nf(bill,1,2),53,120);
    
    //checks if user gets dicount 
    var discountBill;
      
    //if bill is more than 30 user gets 20% discount
    if(bill>=30){
      
      //calculates discounted bill
      discountBill=bill-(bill*0.2);
      
      //displays discount and discounted bill
      text("Discount of:  $"+nf((bill*0.2),1,2),53,150);
      text("New Total:  $"+nf(discountBill,1,2),53,180);
      
      //displays bill with tax
      taxBill=discountBill+(discountBill*0.12);
      text("Tax 12%:  $"+nf((discountBill*0.12),1,2),53,210);
      text("Total with Tax:  $"+nf(taxBill,1,2),53,240);
      
      //asks for payment
      fill(114,86,239);
      text("Pay Here",130,270);
      textSize(25);
      text("↓",164,290);
      
    }//if user doesn't get 20% discount
    else{
     
      //displays bill with tax 
      taxBill=bill+(bill*0.12);
      text("Tax 12%:  $"+nf((bill*0.12),1,2),53,150);
      text("Total with Tax:  $"+nf(taxBill,1,2),53,180);
    
      //asks for payment 
      fill(114,86,239);
      text("Pay Here",130,210);
      textSize(25);
      text("↓",164,230);
      text("↓",164,260);
      text("↓",164,290)
    
    }
    
    //takes payment
    inputPayment = createInput();
    inputPayment.position(96, 310);
    inputPayment.value('');
    
    itCameFrom=2;
    
    //prompts user to press press me button after paying bill
    noFill();
    rect(130,340,90,20);
    fill(0,0,0);
    textSize(15);
    text("PRESS ME",135,355);
    
    //prompts user to press button if user wants to cancel order
    fill(251,242,184);
    stroke(0,0,0)
    rect(335,450,191,30);
    fill(0,0,0);
    noStroke();
    textSize(14);
    text("Press to Cancel Order",360,470);
    
    }
    
  
var CommonDisplay= function(menuList,menuItemPrice,shopName){
  

  this.menuList=menuList;
  this.menuItemPrice=menuItemPrice;
  
  fill(147,231,106);
  stroke(17,5,55);
  rect(10,115,320,130);
  
  noStroke();
  fill(24,19,19);
  //number before menu options
  var numberOfOptions=1;
  
  //menu item index
  var menuItem=0;
  
  textSize(20);
  text(shopName+"'s  Menu",20,108);

  //displays menu items and price
  while(numberOfOptions<6){
    
    textSize(15);
    text(numberOfOptions,20,125+(20*numberOfOptions));
    
    //new error 
    text(menuList[menuItem]+"  $"+menuItemPrice[menuItem],35,(125+(20*numberOfOptions)));
    menuItem++;
    numberOfOptions++;

    }
  
  //place order
  fill(134,253,189);
  stroke(24,19,19);
  rect(350,115,490,155);
  noStroke();
  fill(24,19,19);
  textSize(40);
  text("☟",686,112);
  textSize(23);
  text("Place your order here",460,104);
  
  numberOfOptions=1;
  menuItem=0;
  
  //prompts user to enter no. of items they want 
  while(numberOfOptions<6){
  
    textSize(15);
    text("Enter no. of  "+menuList[menuItem]+"S",365,
    125+(25*numberOfOptions));          
    menuItem++;
    numberOfOptions++;

  }
   
  //Getting no.of items user wants and saves it
  input[0] = createInput();
  input[0].position(650, 131);
  input[0].value('');
  
  input[1] = createInput();
  input[1].position(650, 157);
  input[1].value('');

  input[2] = createInput();
  input[2].position(650, 181);
  input[2].value('');

  input[3] = createInput();
  input[3].position(650, 208);
  input[3].value('');

  input[4] = createInput();
  input[4].position(650, 233);
  input[4].value('');
   
  
  //prompts user to press button to recieve bill
  stroke(0,0,0);
  fill(245,243,233);
  rect(490,290,200,30);
  noStroke();
  fill(0,0,0);
  textSize(17);
  text("Press here to recieve bill",495,310);
 
  //prompts user to press return button to return to home page 
  fill(251,242,184);
  stroke(0,0,0)
  rect(335,450,191,30);
  fill(0,0,0);
  noStroke();
  textSize(14);
  text("Press to return to Home Page",338,470);
  
  safetyKey=2;
  itCameFrom=1;
}

 //displays home page
 function welcomePage(){

  safetyKey=1
    
  //welcome message
  background(202,240,139);
  fill(255, 0, 0);
  textSize(40);
  text("Welcome to Food Corner",200,110);
  textSize(20);
  text("Which shop would you like to go !!",270,145);
  var menuBotton=0;
  var shopList=[" Ice Cream Shop"," Cafe"," Fast Food"];
  
  noStroke();
    
  //displays 3 shops options
  while(menuBotton<3){
    
    fill(253,251,249);
    rect(320,40*menuBotton+165,180,30);
    fill(138,46,133);
    text(shopList[menuBotton],320,40*menuBotton+190);
    menuBotton++;
    
  }
    
}

//size of background canvas 
function setup() {
  
  createCanvas(856, 500);
  welcomePage();
  imgCoffe = loadImage('photo-1/coffee.jpg')
  imgfast_food = loadImage('photo-1/fast food.jpg')
  
  
} 

// Displays Ice cream shop
var iceCreamShop= function(){
  
  var iceCreamOptions;
  var iceCreamPrice;
  
  background(255,179,108);
  fill(24,19,19);
  textSize(25);
  text("Welcome To Island's Ice Cream Shop",220,50);
  
  //shop name
  var shopName="Island's Ice Cream Shop";
  
  //ice Cream options
  iceCreamOptions=["CHOCOLATE CONE","STRAWBERRY CONE","DURIAN CONE"," PLAIN VANILLA CONE","ESPRESSO CONE"];
  
  //price of Ice cream
  iceCreamPrice=[8,12,10,6,13];
  
  //displays ice cream drawing 
  fill(121,0,0);
  triangle(40,400,120,400,80,500);
  fill(154,231,49);
  ellipse(80,390,87,65);
  fill(179, 16, 27);
  ellipse(80,350,30,30);
  
  //displays ice cream drawing 
  fill(121,0,0);
  triangle(740,400,820,400,780,500);
  fill(154,231,49);
  ellipse(780,390,87,65);
  fill(179, 16, 27);
  ellipse(780,350,30,30);

  //calls common display and sends user's ice cream options, price and shop name 
  CommonDisplay(iceCreamOptions,iceCreamPrice,shopName) 

}

// Displays cafe
var cafe= function(){
  
  var coffeeOptions;
  var coffeePrice;

  background(236,212,62);
  fill(24,19,19);
  
  textSize(25);
  text("Welcome To Rock Cafe",290,50);
  image(imgCoffe,70,275,210,150);
  
  //shop name
  var shopName="Rock Cafe";
  
  //coffee options
  coffeeOptions=["COLD BREW COFFEE","ESPRESSO CON PANNA","DOUBLE  ESPRESSO","ESPRESSO MACCHIATO","CAPPUCCINO"];
  
  //price of Ice cream
  coffeePrice=[12,15,10,11,13];
  
  //calls common display and sends user's coffee options, price, shop name
  CommonDisplay(coffeeOptions,coffeePrice,shopName);   
 
}

// Displays food shop
var foodShop= function(){
  
  var foodOptions;
  var foodPrice;
  
  background(250, 138, 107);
  fill(24,19,19);
  textSize(25);
  text("Welcome To Food Circus",285,50);
  image(imgfast_food,60,275,210,130)
  //shop name
  var shopName="Food Corner";
  
  //food options
  foodOptions=["GRILLED CHICKEN WRAP","VEGGIE BURGER","CHICKEN SOUVLAKI","GRILLED AHI TUNA","SPICY SALMON"];
  
  //price of Ice cream
  foodPrice=[12,15,13,14,10];
  
  //calls common display and sends user's food options, price, shop name 
  CommonDisplay(foodOptions,foodPrice,shopName);   
 
}

//displays shop on which user clicks on 
function mouseClicked(){
   
  //user presses ice cream shop button 
  if(mouseX>=320&&mouseX<=500&&mouseY>=165&&mouseY<=195&&safetyKey==1){
    //calls ice cream shop
    iceCreamShop();
  }
  
  //user presses cafe button 
  if(mouseX>=320&&mouseX<=500&&mouseY>=205&&mouseY<=235&&safetyKey==1){
    
    //calls cafe
    cafe();

  }
    
  //user prsses fast food shop button 
  if(mouseX>=320&&mouseX<=500&&mouseY>=245&&mouseY<=275&&safetyKey==1){
    
    //calls food shop
    foodShop();
    
  }
  
  //if user press button to get bill 
  if(mouseX>=490&&mouseX<=690&&mouseY>=290&&mouseY<=320&&safetyKey==2){
     
        //removes input bar from the screen
        var remove1=0;
        while(remove1<=4){
          input[remove1].remove()
          remove1++;
      
      }
      
      //calls makeBill function
      makeBill();
  }
  
  if (mouseX>=500&&mouseX<=670&&mouseY>=380&&mouseY<=410){
   //removes input bar from the screen
    var remove3 =0;
    while(remove3<=4){
  
      input[remove3].remove()
      remove3++;
      
    }
    welcomePage()
  }
  //if user press pay button
  if(mouseX>=130&&mouseX<=220&&mouseY>=340&&mouseY<=360&&safetyKey==3){
    
    //prompts user to enter payment 
    userPaid=inputPayment.value();
    
    //remaining amount user forgot to pay
    var remaining= taxBill-userPaid;
    
    //extra amount user paid 
    var extra= userPaid-taxBill;
    
    fill(98,251,100);
    stroke(0,0,0);
    rect(350,290,300,100);
    
    noStroke();
    fill(0,0,0);
    
    textSize(20);
    
    //if user paid something 
    if (inputPayment.value()>0.0){
      //if user paid less than their total tax bill
      if (taxBill-inputPayment.value()>0.01){

        //displays remaining amount
        text("You forget to pay:   $"+nf(remaining,1,2),360,330);
        text("Thanks for shopping with us :)",360,360);

      }//if user paid more
      else if(inputPayment.value()-taxBill>0.01){

         //displays change
         text("Your change:   $"+nf(extra,1,2),360,330);
         text("Thanks for shopping with us :)",360,360);

      }//if user paid exact amount
      else{
        text("Have a nice day",360,330)
        text("Thanks for shopping with us :)",360,360);
      }
      
    } //if user didn't pay anything 
    else{
      text("Have a nice day",430,340)
    } 
   
  } 

  //if user press return to homepage button
  if(mouseX>=335&&mouseX<=526&&mouseY>=450&&mouseY<=480&&itCameFrom==1){
    
    //removes input bar from the screen
    var remove2 =0;
    while(remove2<=4){
      input[remove2].remove()
      remove2++;
      
    }
    
    //calls welcome page
    welcomePage();
    
  }
  
  //if user cancels order
  if(mouseX>=335&&mouseX<=526&&mouseY>=450&&mouseY<=480&&itCameFrom==2){
    
    //removes payment entry box from screen
    inputPayment.remove()
    
  //calls welcome page
    welcomePage();
  }
} 