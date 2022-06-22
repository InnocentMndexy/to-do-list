import React, { useState } from 'react'
import '../App.css'
import todocss from'../components/todo.module.css';

const ToDo = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
   

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t)=>
      t.id===editTodo.id
        ?(t= {id: t.id,todo})
        :{id:t.id,todo:t.todo}
      );

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
       return;
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo])
  };

  const handleEdit =(id)=> {
    const editTodo = todos.find((i)=>i.id ===id);
    setTodo(editTodo.todo);
    setEditId(id);
  }
  return (

    <div className={todocss.wrap}>
      <div className={todocss.container}>
        <div className={todocss.alltasks}>
          <h2 className={todocss.tasklisttitle}>My Lists</h2>
          <ul className={todocss.tasklist}>
            {/* <img src="./icon/brightness.png" alt=""> */}
            <li className="listname activelist">My Day</li>
            <li className={todocss.listname}>Important</li>
            <li className={todocss.listname}>Planned</li>
            <li className={todocss.listname}>All</li>
            <li className={todocss.listname}>Completed</li>
            <li className={todocss.listname}>Assigned to me</li>
            <li className={todocss.listname}>Taskes</li>
            <li className={todocss.listname}>Untitled group</li>
          </ul>

          <form action="">
            <input type="text" className="new list" placeholder="new list name" aria-label="new list name" />
            <button className={todocss.btncreate} aria-label="create new list">+</button>
          </form>
        </div>
      </div>

      <div className={todocss.todolist}>
        <div className={todocss.todobody}>
          <div className={todocss.todoheader}>
            <h2 className={todocss.listtitle}>Task List</h2>
          </div>
          <br /><br />
          <form id="new-task-form" onSubmit={handleSubmit}>
            <input type="text" name="new-task-input" id="new-task-input" placeholder="What do you have planned?" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <input type="submit"  id="new-task-submit" value="Add task" />
          </form>

          <div className={todocss.tasklist}>
            <h2>Tasks</h2>

            <div id="tasks">
                {todos.map((t) => (
                  <div className={todocss.task}>
                  <div className={todocss.content}>
                    <input type="text" className="text" value={t.todo} readOnly key={t.id}/>
                  </div>

                  <div className={todocss.actions}>
                    <button className={todocss.edit} onClick={()=>handleEdit(t.id)}>Edit</button>
                    <button className={todocss.delete} onClick={()=>handleDelete(t.id)}>Delete</button>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ToDo;