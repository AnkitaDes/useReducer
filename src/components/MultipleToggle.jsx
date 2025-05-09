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
      className={`relative min-h-screen transition-colors duration-500 ${
        state.darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }  p-10 text-center min-w-sm max-w-3xl mx-auto rounded-xl`}
    >
      <h1 className="p-5 font-bold text-2xl">Multiple Toggle</h1>
      <button
        className="bg-blue-800 text-white font-bold px-4 py-3 rounded-md mt-10"
        onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      >
        {state.darkMode ? "Disable darkMode" : "Enable darkMode"}
      </button>
      <button
        className="bg-green-600 text-white font-bold px-4 py-3 rounded-md ml-4 mt-10"
        onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
      >
        {state.modal ? "Hide Modal" : "Show Modal"}
      </button>

      {state.modal && (
        <>
          <div className="absolute inset-0 bg-black opacity-30 z-40 rounded-xl"></div>
          <div className=" absolute top-1/2 left-1/2 w-2/3 transform -translate-x-1/2 -translate-y-1/2 max-w-md  bg-white p-6 shadow-xl mt-10 z-50 rounded-xl text-gray-700 transition-all duration-500 ease-in-out scale-100 opacity-100">
            <button
              className="absolute top-3 right-5 text-xl font-bold text-gray-500 hover:text-gray-800 "
              onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
            >
              x
            </button>
            <p className="p-5">This is a modal window</p>
          </div>
        </>
      )}
    </div>
  );
}
