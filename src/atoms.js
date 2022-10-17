import { atom, selector } from "recoil";

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
