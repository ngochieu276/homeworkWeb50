import React, { Fragment } from "react";

const InputForm = (props) => {
  return (
    <Fragment>
      <label>
        {props.label}
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </Fragment>
  );
};

export default InputForm;
