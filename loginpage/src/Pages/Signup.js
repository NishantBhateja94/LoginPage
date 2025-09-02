import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { formFields } from "../constants/formFields";
export default function Signup() {
  const navigate = useNavigate();
  const fields = formFields.signup;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const validate = () => {
    let newErrors = {};
    fields.forEach((field) => {
      const value = values[field.name] || "";
      if (field.pattern && !field.pattern.test(value)) {
        newErrors[field.name] = field.errorMsg;
      }
      if (field.customValidation) {
        const result = field.customValidation(value, values);
        if (result !== true) newErrors[field.name] = result;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Signup successful");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-xl p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create New Account</h2>
        {fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={values[field.name] || ""}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
