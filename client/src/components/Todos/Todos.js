import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

const Todos = () => {
  const { user } = UserAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (user.accessToken) {
      fetchTodos(user.accessToken);
    }
  }, [user.accessToken]);

  const fetchTodos = async (token) => {
    const res = await axios.get("http://localhost:3001/api/todos", { headers: { Authorization: `Bearer ${token}` } });
    setTodos(res.data);
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Todos List</h1>
      {todos && todos.map((item) => <p key={item.id}><b>Title:</b> {item.title}</p>)}
    </div>
  );
};

export default Todos;
