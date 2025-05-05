import { useReducer } from "react";

const initialState = {
  count: 0,
};

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count > 0 ? state.count - 1 : 0 };

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div className="bg-gray-300 rounded-xl mx-auto p-5 text-center">
      <h1 className="bg-amber-200 rounded-xl p-5 font-bold text-2xl">
        Counter with Reducer Hook
      </h1>
      <p className="bg-sky-200 mt-10 rounded-xl p-5">Count:{state.count}</p>
      {state.count === 0 && (
        <p className="bg-red-400 rounded-xl mt-10 p-4">
          🚫 Count cannot go beyond zero
        </p>
      )}
      <button
        className="bg-green-200 rounded-md px-5 py-3 mt-10 mr-8"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="bg-red-200 rounded-md px-5 py-3 mt-10"
        onClick={() => dispatch({ type: "decrement" })}
        disabled={state.count === 0}
      >
        Decrement
      </button>
    </div>
  );
}
