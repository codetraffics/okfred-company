const Button = ({ iconUrl, href }) => {
  return (
    <a
      className="bg-primary-color capitalize animate-bounce hover:bg-blue-400 rounded-full px-5 py-2 text-white flex items-center justify-center w-16 h-16"
      href={href}
    >
      {iconUrl}
    </a>
  );
};

export default Button;
