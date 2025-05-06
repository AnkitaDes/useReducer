import { useReducer } from "react";

const initialState = false;

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return !state;
    default:
      return state;
  }
}

export default function Toggle() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-gray-200 rounded-xl p-5 mt-10 mx-auto text-center ">
      <h1 className="bg-amber-200 rounded-xl p-5 font-bold text-2xl">Toggle</h1>
      {state && (
        <p className="bg-gray-300 rounded-xl p-5 mt-10 ">
          Hello! Welcome to React Reducer Hook
        </p>
      )}

      <button
        className="bg-blue-400 rounded-md px-5 py-3 mt-10 font-bold text-white"
        onClick={() => dispatch({ type: "toggle" })}
      >
        {state ? "Hide" : "Show"}
      </button>
    </div>
  );
}
