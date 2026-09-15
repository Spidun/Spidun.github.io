console.log("site.js linked successfully");

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

const welcome = document.querySelector("#welcome");

if (isMorning) {
	welcome.textContent = "Good Morning!";
} else if (isAfternoon) {
	welcome.textContent = "Good Afternoon!";
} else if (isEvening) {
	welcome.textContent = "Good Night!";
}

localStorage.setItem("It's a secret to everybody.", "Nothing to see here.");
