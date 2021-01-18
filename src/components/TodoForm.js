import React, {useState, useEffect, useRef} from 'react'; //hooks

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '' );

    const inputfocus = useRef(null)

    useEffect(() => {
        inputfocus.current.focus()
    })
    
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        });
        setInput('');//clear box
    };

    return (

            <form className="todo-form" onSubmit={handleSubmit}>
              {props.edit ? ( 
              <>
              <input 
                type="text" 
                placeholder="Update your task" 
                value={input}  
                name="text" 
                className="todo-input edit"
                onChange={handleChange}
                ref={inputfocus}//add focus
              />
              <button className="todo-button edit">Update To Do</button>
              </>

              ) :( 
                <>
              <input 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange}
                ref={inputfocus}//add focus
              />
              <button className="todo-button">Add To Do</button>
              </>
              
              )}

           </form>

    )
};

export default TodoForm;
 