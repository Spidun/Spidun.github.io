const todoList = document.querySelector(".todo-list");
const newTodo = document.querySelector("#new-todo");
const addTodoButton = document.querySelector("#add-todo");
const todos = JSON.parse(localStorage.getItem("todo-list")) || [];

const addTodoToPage = ({ text }) => {
	const listItem = document.createElement("li");
	listItem.textContent = text;
	todoList.append(listItem);
};

const renderTodos = () => {
	todoList.innerHTML = "";
	todos.forEach(addTodoToPage);
};

renderTodos();

addTodoButton.addEventListener("click", () => {
	const text = newTodo.value.trim();

	if (!text) {
		return;
	}

	todos.push({ text, completed: false });
	localStorage.setItem("todo-list", JSON.stringify(todos));
	newTodo.value = "";
	renderTodos();
});

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

const urls = [
	"https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	"https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
].map((url) => {
	(new Image()).src = url;
	return url;
});

const images = document.querySelectorAll("#carousel img");
const previousButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
let currentImage = 0;

const showImages = () => {
	const offset = currentImage % urls.length;

	images.forEach((image, index) => {
		const imageIndex = (index + offset + urls.length) % urls.length;
		image.src = urls[imageIndex];
	});
};

showImages();

previousButton.addEventListener("click", () => {
	currentImage--;
	showImages();
});

nextButton.addEventListener("click", () => {
	currentImage++;
	showImages();
});

setInterval(() => {
	currentImage++;
	showImages();
}, 2000);
