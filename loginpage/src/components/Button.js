
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
    >
      {text}
    </button>
  );
};

export default Button;
