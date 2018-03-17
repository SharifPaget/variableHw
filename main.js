$(document).ready()
  var familyMembers;
  var moneyPerPerson = 1000
  var english;

  var HelpUnlimitedMoney = ""
  var NewStartMoney = ""
  var BetterTomorrowMoney = ""
  var HomeSafeMoney = ""
  var HomeMoney = ""
//I'm including the NGOs here as variable in the event that we can figure out how much money they will assist refugee families with. As of right now, we don't have any other variables to attach the specific NGOs. For example, maybe HelpUnlimted would only be avaible to families, versus a single person or couples. Once we have the additinoal information we can include them.

//Everything in the top row will be input. What the user puts in.
var totalAmount
//Once the user puts in required information, the totalAmountGrant will be available.

var onePerson = 800
var couple = 950
var threePeople = 1000
var fourPeople = 1100
 //These are the epenses. This is what will be in the backend. These variable will be subtracted from the totalAmountGrant
var totalAmountAfterExpenses
