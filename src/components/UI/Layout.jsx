import PropTypes from "prop-types";

export default function Layout({ children }) {
  return <div className="flex flex-col overflow-hidden">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.array,
};
