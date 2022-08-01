// Սա այն զանգվածն է, որը կպահի անելիքների ցանկի տարրերը
let todoItems = [];

function addTodo(text) {
    const todo = {
        text,
        checkid: false,
        id: Date.now(),
    }
    todoItems.push(todo);
    console.log(todoItems);
}

// select form in html
const form = document.querySelector(".js-form")

// add submit event listener