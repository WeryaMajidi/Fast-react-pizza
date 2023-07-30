import { Link, useNavigate } from "react-router-dom";

const classes = "text-sm text-blue-400 hover:text-blue-700 hover:underline";

function LinkButton({ to, children }) {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={classes} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;
