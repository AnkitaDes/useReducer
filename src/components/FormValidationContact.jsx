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

const reducer = () => {};

export default function FormValidationContact() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-gray-200 p-7 rounded-xl mx-auto min-h-screen min-w-sm max-w-2xl mt-10">
      <h1 className="bg-amber-300 p-5 rounded-xl text-2xl font-bold text-center">
        Form Validation Contact
      </h1>
    </div>
  );
  q;
}
