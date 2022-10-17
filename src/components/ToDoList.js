import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Do App</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">시작해야 할 업무</option>
        <option value="DOING">수행중인 업무</option>
        <option value="DONE">완료한 업무</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
