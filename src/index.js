console.log("To Do App");

const GET_DATA_URL =
  "https://simple-json-server-scit.herokuapp.com/todo/sradusi";
const ADD_NEW_USER_URL = "https://simple-json-server-scit.herokuapp.com/todo";
const UPDATE_TO_USER_URL =
  "https://simple-json-server-scit.herokuapp.com/todo/sradusi";

const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = false;

fetch(GET_DATA_URL)
  .then((r) => r.json())
  .then((json) => {
    console.log(json);

    if (json.id === "sradusi") {
      todo = json.todo;
      userExist = true;
    }
  });

document.getElementById("add-task-button").addEventListener("click", () => {
  if (userExist) {
    // update user data
    console.log("add task to todo list");
    const itemValue = inputTask.value;
    if (itemValue) {
      console.log(todo);
      todo.push({
        checked: false,
        item: itemValue,
      });
      const payload = {
        id: "sradusi",
        todo: todo,
      };

      fetch(UPDATE_TO_USER_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }
  } else {
    // add user to server
    const itemValue = inputTask.value;
    if (itemValue) {
      const payload = {
        id: "sradusi",
        todo: [
          {
            checked: false,
            item: itemValue,
          },
        ],
      };

      fetch(ADD_NEW_USER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }
  }
});
