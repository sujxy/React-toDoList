import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => {
          const value = event.target.value;
          props.onEntry(value);
        }}
        type="text"
        value={props.text}
      />
      <button
        onClick={() => {
          props.onPost();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
