function scuberGreetingForFeet(feet){
  // Write your code here!

  let charges
   //freeride for feet less than 400
  if (feet <= 400) {
    charges = "This one is on me!"
  }
  //pay 30 dollars for more than 2000 feet
    else if (feet > 2000 && feet < 2500) {
     charges = "I will gladly take your thirty bucks."
}
//does not allow more than 2500 feet
    else {
  charges = "No can do."
}
return charges;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? 'Ok, sounds good.' : "No go."

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}