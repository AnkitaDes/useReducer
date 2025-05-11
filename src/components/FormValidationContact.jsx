import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  contact: "",
  errors: {
    name: "",
    email: "",
    contact: "",
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

    case "VALIDATE_FIELD": {
      const errors = {};

      if (!state.name.trim()) errors.name = "Name is required";

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
        errors.email = "Invalid email address";

      if (!/^\d{10}$/.test(state.contact))
        errors.contact = "Contact must be a 10-digit number";

      return {
        ...state,
        errors,
        isSubmitted: Object.keys(errors).length === 0,
      };
    }

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

export default function FormValidationContact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FIELD" });
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET_FORM" });
  };
  return (
    <div className="bg-gray-200 p-7 rounded-xl mx-auto min-h-screen min-w-sm max-w-2xl mt-10">
      <h1 className="bg-amber-300 p-5 rounded-xl text-3xl font-bold text-center">
        Form Validation Contact
      </h1>
      <form className="space-y-6">
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          Name
          <input
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
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
            <p className="text-sm text-red-600 mt-1">{state.errors.name}</p>
          )}
        </label>
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700"
        >
          Email:
          <input
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 "
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
            <p className="text-sm text-red-600 mt-1">{state.errors.email}</p>
          )}
        </label>
        <label
          htmlFor="contact"
          className="block text-lg font-medium text-gray-700"
        >
          Contact:
          <input
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={state.contact}
            placeholder="Enter your contact"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "contact",
                payload: e.target.value,
              })
            }
          />
          {state.errors.contact && (
            <p className="text-sm text-red-600 mt-1"> {state.errors.contact}</p>
          )}
        </label>
        <button
          className="flex-1 bg-blue-500 text-white font-bold py-3 px-5 rounded-xl hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {state.isSubmitted && (
          <p className="text-green-600 font-semibold text-center mt-6">
            Form is submitted successfully
          </p>
        )}
        <button
          className="flex-1 bg-green-500 text-white font-bold px-5 py-3 rounded-xl hover:bg-green-700 transition"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
  q;
}
