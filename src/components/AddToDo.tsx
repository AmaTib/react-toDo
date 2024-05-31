import { ChangeEvent } from "react";

interface IAddToDoProps {
  addToDo: (userInput: string) => void;
  handleUserInput: (e: ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
}

export const AddToDo = ({
  addToDo,
  userInput,
  handleUserInput,
}: IAddToDoProps) => {
  /* const [userInput, setUserInput] = useState("") */

  function handleAddToDo() {
    addToDo(userInput);
  }

  /* function handleUserInput(e: ChangeEvent<HTMLInputElement>){
        setUserInput(e.target.value)
    } */

  return (
    <>
      <input type="text" value={userInput} onChange={handleUserInput} />
      <button onClick={handleAddToDo}>Lägg till</button>
    </>
  );
};
