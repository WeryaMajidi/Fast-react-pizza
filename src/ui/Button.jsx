import { Link } from "react-router-dom";

const base =
  "rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
const styles = {
  primary: base + " px-4 py-2",
  small: base + " px-2 py-1 text-xs",
  rounded: base + " h-7 w-7 text-base flex items-center justify-center p-0 ",
  secondary:
    "text-sm rounded-full border-2 border-stone-300 px-4 py-1.5 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-500 focus:bg-stone-300 focus:text-stone-500 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
};
//
function Button({ children, disabled, to, type, onClick }) {
  //
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  //
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  //
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
