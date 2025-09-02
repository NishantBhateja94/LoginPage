// src/pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
import { formFields } from "../constants/formFields";
export default function LoginUser() {
  const navigate = useNavigate();
  const fields = formFields.login;
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
      alert("Login successful");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Sign in  to continue</p>
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
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}
