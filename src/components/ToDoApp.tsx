import { ChangeEvent, useState } from "react";
import { ToDo } from "../models/ToDo";
import { AddToDo } from "./AddToDo";
import { ToDosPresentation } from "./ToDosPresentation";

export const ToDoApp = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e: ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  function addTodo(todoText: string) {
    if (todoText != "") {
      setToDos([
        ...toDos,
        {
          task: todoText,
          isCompleted: false,
          id: Date.now(),
        },
      ]);
    } else {
      alert("skriv något");
    }
    setUserInput("");
  }

  function removeTodo(toDo: ToDo) {
    setToDos(toDos.filter((clickedToDo) => toDo.id !== clickedToDo.id));
  }

  function toggleCompleted(toDo: ToDo) {
    setToDos(
      toDos.map((clickedTodo) => {
        if (clickedTodo.id === toDo.id) {
          return { ...clickedTodo, isCompleted: !clickedTodo.isCompleted };
        } else {
          return clickedTodo;
        }
      })
    );
    setTaskCompleted(!taskCompleted);

    console.log(toDos);
  }

  return (
    <>
      <h1>What</h1>
      <h1>ToDo's</h1>
      <AddToDo
        addToDo={addTodo}
        userInput={userInput}
        handleUserInput={handleUserInput}
      />
      <ToDosPresentation
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
        toDos={toDos}
      />
    </>
  );
};
