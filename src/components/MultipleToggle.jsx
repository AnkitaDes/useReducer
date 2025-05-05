import { useReducer } from "react";

const initialState = {
  darkMode: false,
  sidebar: true,
  modal: false,
};

export default function MultipleToggle() {
  return (
    <div className={` rounded-xl p-5 text-center`}>
      <h1 className="bg-amber-200 rounded-xl p-5 ">Multiple Toggle</h1>
    </div>
  );
}
