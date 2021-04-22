import { Component } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

const mockToDoListData = [
  {
    checked: false,
    item: "task1",
  },
  {
    checked: true,
    item: "task2",
  },
  {
    checked: false,
    item: "task3",
  },
];

export class ToDoList extends Component {
  state = {
    toDoList: mockToDoListData,
  };

  removeItem = (itemText) => {
    this.setState({
      toDoList: this.state.toDoList.filter(
        (itemData) => itemData.item !== itemText
      ),
    });
  };

  render() {
    return (
      <div className="to-do-list">
        {this.state.toDoList.map((itemData) => (
          <ToDoItem
            checkValue={itemData.checked}
            label={itemData.item}
            removeItem={this.removeItem}
          />
        ))}
      </div>
    );
  }
}
