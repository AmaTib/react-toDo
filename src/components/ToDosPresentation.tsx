import { ToDo } from "../models/ToDo";
import { ToDoPresentation } from "./ToDoPresentation";

interface IToDosPresentationProps {
  toDos: ToDo[];
  removeTodo: (toDo: ToDo) => void;
  toggleCompleted: (toDo: ToDo) => void;
}

export const ToDosPresentation = ({
  toDos,
  removeTodo,
  toggleCompleted,
}: IToDosPresentationProps) => {
  return (
    <>
      <ul>
        {toDos.map((toDo) => (
          <ToDoPresentation
            key={toDo.id}
            toDo={toDo}
            removeTodo={removeTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </>
  );
};
