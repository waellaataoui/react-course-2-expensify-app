import React from "react";
import ReactDOM from "react-dom";
const Info = (props) => (
  <div>
    <h1> info</h1>
    <p> the info is :{props.info}</p>
  </div>
);
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info pls dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p> Please Authenticate first</p>
      )}
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="some details" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="some details" />,
  document.getElementById("app")
);
