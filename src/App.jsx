import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加機能
  const onClickAdd = () => {
    if (todoText === "") return; //空文字なら下3行の処理をしない
    const newTodos = [...incompleteTodos, todoText]; //現在保持しているものに加えて追加したいのでスプレッド構文
    setInCompleteTodos(newTodos); //行の追加がこれでＯＫ
    setTodoText(""); //inputの内容をリセット
  };

  //削除機能
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //1つ目の引数に何番目の要素か、2つ目の引数にいくつ削除するかを指定する
    setInCompleteTodos(newTodos);
  };

  //完了機能・・・未完了から削除して完了に追加
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); //1つ目の引数に何番目の要素か、2つ目の引数にいくつ削除するかを指定する

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
