import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
export const LoginPage = ({ startLogin }) => (
  <div>
    <h3>Budget App</h3>
    <p>It's time to get your expenses under control.</p>
    <button onClick={startLogin}>Login with Google</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
