// src/constants/formFields.js
export const formFields = {
  login: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter username",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@._-]+$/,
      errorMsg: "Username must contain combination of alphanumeric values with special characters only.",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@._-]+$/,
      errorMsg: "Same as user-name, but username and password should not be same",
      customValidation: (value, allValues) =>
        value !== allValues.username || "Same as user-name, but username and password should not be same",
    },
  ],

  signup: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your name",
      pattern: /^[A-Za-z ]+$/,
      errorMsg: "Only Alphabets will be allowed",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Choose a username",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@._-]+$/,
      errorMsg: "Username must contain combination of alphanumeric values with special characters only.",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your Gmail",
      pattern: /^[\w.-]+@gmail\.com$/,
      errorMsg: "Same as Google email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "+91xxxxxxxxxx",
      pattern: /^\+\d{1,3}\d{10}$/,
      errorMsg: "Country code and phone number will be allowed only",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@._-]+$/,
      errorMsg: "Same as user-name, but username and password should not be same",
      customValidation: (value, allValues) =>
        value !== allValues.username || "Same as user-name, but username and password should not be same",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Re-enter password",
      errorMsg: "Password must be same as Password",
      customValidation: (value, allValues) =>
        value === allValues.password || "Password must be same as Password",
    },
  ],
};
