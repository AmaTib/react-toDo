import { ToDo } from "../models/ToDo";

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
        <button
          onClick={() => {
            removeTodo(toDo);
          }}
        >
          Ta bort
        </button>
        <button
          onClick={() => {
            toggleCompleted(toDo);
          }}
        >
          &#10004;
        </button>
      </li>
    </>
  );
};
