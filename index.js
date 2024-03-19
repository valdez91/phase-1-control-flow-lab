function scuberGreetingForFeet(ride){
if (ride <=400){
  return 'This one is on me!';
}
else if (ride >2000 && ride <=2500){
  return 'I will gladly take your thirty bucks.';
}
else if (ride > 2500){
  return 'No can do.';
}
else {
  return 'That will be twenty bucks.';
}
 
}

function ternaryCheckCity(destination){
 if (destination==='NYC' || destination==='not NYC'){
  return "Ok, sounds good.";
 }
 else if(destination!=='NYC'){
  return "No go.";
 }
}

function switchOnCharmFromTip(tip){
  if (tip==='generous' ){
    return "Thank you so much.";
  }
  else if(tip === 'not as generous'){
    return "Thank you.";
  }
  else if (tip='anything else'){
    return "Bye." ;
  }
}