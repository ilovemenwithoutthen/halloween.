let adjective1 = prompt("Enter an adjective.")
let creature = prompt("Enter the name of a spooky creature.")
let adjective2 = prompt("Enter an adjective.")
let friend = prompt("Enter the name of a friend.")
let adjective3 = prompt("Enter an adjective.")
let adjective4 = prompt("Enter an adjective.")
let creature2 = prompt("Enter the name of a spookey creature.")



let story =
`on a dark and ${adjective1} Halloween night, I decide to go trick-or-treating. \
I put ony my favorite constume, which was a ${adjective2} ${creature} that looked ${adjective3}. my friend, ${friend}, dressed up as a ${adjective4}${creature2}.`;

let madLibOutputDiv=document.getElementById("madLibOutput");
madLibOutputDiv.innerHTML= `<p>${story}</p>`