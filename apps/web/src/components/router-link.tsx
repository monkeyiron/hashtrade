import { Link } from "react-router-dom";

export const RouterLink = ({ href, children, ...props }: any) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};
