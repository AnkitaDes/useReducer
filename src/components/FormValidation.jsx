import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  errors: {
    name: "",
    email: "",
  },
  isSubmitted: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.payload,
        errors: { ...state.errors, [action.field]: "" },
        isSubmitted: false,
      };
    case "VALIDATE_FORM":
      const errors = {};
      if (!state.name.trim()) errors.name = "Name is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
        errors.email = "Invalid email address";
      return {
        ...state,
        errors,
        isSubmitted: Object.keys(errors).length === 0,
      };
    case "RESET_FORM":
      return { initialState };
    default:
      return state;
  }
};

export default function FormValidation() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });
  };

  return (
    <div className="min-w-sm max-w-2xl min-h-screen rounded-xl bg-gray-200 mx-auto p-7">
      <h1 className="bg-amber-300 p-5 text-2xl font-bold rounded-xl text-center ">
        FORM VALIDATION
      </h1>
      <form className="flex flex-col justify-center align-middle mt-10 text-center">
        <label htmlFor="name" className="text-gray-700 ">
          Name:
          <input
            className="bg-gray-300 rounded-xl p-5 max-w-2xl ml-4"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                payload: e.target.value,
              })
            }
            placeholder="Enter your name"
          />
          {state.errors.name && (
            <p className="text-sm text-red-500 mt-1">{state.errors.name}</p>
          )}
        </label>
        <label htmlFor="email" className="text-gray-700">
          Email:
          <input
            className="bg-gray-300 rounded-xl p-5 max-w-2xl mt-5 ml-4"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                payload: e.target.value,
              })
            }
            placeholder="Enter your email"
          />
          {state.errors.email && (
            <p className="text-red-500 mt-1 text-sm">{state.errors.email}</p>
          )}
        </label>
        <button
          className="bg-blue-500 text-xl font-bold text-white px-5 py-3 rounded-xl mt-5 hover:bg-blue-800 max-w-lg mx-auto"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {state.isSubmitted && (
          <p className="text-green-600 text-lg font-medium mt-4">
            Form is submitted ssuccessfully
          </p>
        )}
      </form>
    </div>
  );
}
