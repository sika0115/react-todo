import React from "react";

//CSS-in-JSの例
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px" /*内側の余白*/,
  margin: "8px" /*外側の余白*/,
  borderRadius: "8px" /*角丸*/
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props; //propsから取り出す
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
