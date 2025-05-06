import { useReducer } from "react";

const initialState = {
  darkMode: false,
  sidebar: true,
  modal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "TOGGLE_MODAL":
      return { ...state, modal: !state.modal };

    default:
      return state;
  }
}

export default function MultipleToggle() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      className={`${
        state.darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }  p-10 text-center`}
    >
      <h1 className="p-5 font-bold text-2xl">Multiple Toggle</h1>
      <button
        className="bg-blue-800 text-white font-bold px-4 py-3 rounded-md mt-10"
        onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      >
        {state.darkMode ? "Disable darkMode" : "Enable darkMode"}
      </button>
      <button
        className="bg-blue-600 text-white font-bold px-4 py-3 rounded-md ml-4 mt-10"
        onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
      >
        {" "}
        {state.modal ? "Close Modal" : "Open Modal"}
      </button>

      {state.modal && (
        <div className="bg-gray-200 p-5 mt-10 z-50 rounded-lg w-1/2 mx-auto text-gray-700 transition-all duration-500 ease-in-out animate-fadeIn">
          <p className=" p-5">This is a modal window</p>
        </div>
      )}
    </div>
  );
}
