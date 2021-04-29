import { Counter } from "../../components/Counter/Counter";

export function About() {
  console.log("About render");

  return (
    <div className="about">
      <h2>To Do App Info</h2>
      <p>This app will store your task on server</p>
      <p>Fell free to add as many as you like on the home page</p>
      <Counter />
    </div>
  );
}
