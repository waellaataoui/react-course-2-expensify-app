import moment from "moment";
import numeral from "numeral";
import React from "react";
import { Link } from "react-router-dom";
const ExpenseListItem = (props) => {
  return (
    <Link className="list__item" to={`/edit/${props.expense.id}`}>
      <div>
        <h3 className="list__item__title">{props.expense.description}</h3>
        <span className="list__item__subtitle">
          {moment(props.expense.createdAt).format("MMMM Do, YYYY")}
        </span>
      </div>

      <h3>{numeral(props.expense.amount / 100).format("$0,0.00")}</h3>
    </Link>
  );
};
export default ExpenseListItem;
