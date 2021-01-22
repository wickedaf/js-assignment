

//Problem kilometerToMeter
function kilometerToMeter(input) {
  if (typeof input == "number" && input >= 0) {
    var meter = input * 1000;
  } else {
    return "Provided input is not a length";
  }
  return meter;
}



//Problem budgetCalculator
function budgetCalculator(watchCount, mobileCount, laptopCount) {
  var watchPrice = 50;
  var mobilePrice = 100;
  var laptopPrice = 500;

  var totalBudget =
    watchCount * watchPrice +
    mobileCount * mobilePrice +
    laptopCount * laptopPrice;
  return totalBudget;
}


//Problem hotelCost
function hotelCost(days) {
  var firsPhaseCostPerDays = 100;
  var secondPhaseCostPerDays = 80;
  var thirdPhaseCostPerDays = 50;
  var totalCost;

  if (days <= 10) {
    totalCost = days * firsPhaseCostPerDays;
  } else if (days <= 20) {
    var secondPhaseDays = days - 10;
    var secondPhaseCost = secondPhaseDays * secondPhaseCostPerDays;
    var firstPhaseCost = 10 * firsPhaseCostPerDays;
    totalCost = firstPhaseCost + secondPhaseCost;
  } else {
    var thirdPhaseDays = days - 20;
    var thirdPhaseCost = thirdPhaseDays * thirdPhaseCostPerDays;
    var firstPhaseCost = 10 * firsPhaseCostPerDays;
    var secondPhaseCost = 10 * secondPhaseCostPerDays;
    totalCost = firstPhaseCost + secondPhaseCost + thirdPhaseCost;
  }
  return totalCost;
}



function megaFriend(arr){
    var megaFriendName = arr[0];
    for(var i=0; i<arr.length; i++){
      if(arr[i].length > megaFriendName.length){
        megaFriendName = arr[i];   
      }
     }
   return megaFriendName;
   }
   
