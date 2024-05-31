import { ToDo } from "../models/ToDo";
import "./ToDoPresentation.css";

interface IToDoPresentationProps {
  toDo: ToDo;
  removeTodo: (toDo: ToDo) => void;
  toggleCompleted: (toDo: ToDo) => void;
}

export const ToDoPresentation = ({
  toDo,
  removeTodo,
  toggleCompleted,
}: IToDoPresentationProps) => {
  return (
    <>
      <li key={toDo.id}>
        <p className={toDo.isCompleted ? "taskDone" : ""}>{toDo.task}</p>

        <div>
          <button
            className="toDoButton"
            onClick={() => {
              removeTodo(toDo);
            }}
          >
            Ta bort
          </button>
          <button
            className="toDoButton"
            onClick={() => {
              toggleCompleted(toDo);
            }}
          >
            &#10004;
          </button>
        </div>
      </li>
    </>
  );
};
