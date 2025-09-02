// src/components/FormField.js
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export default function FormField({ field, value, onChange, error }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4" style={{position:"relative"}}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
      <input
        type={field.type === "password" ? !showPassword ? "password" : "text" : field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {field.type === "password" && (
        <span
          className="absolute right-3 top-9 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
