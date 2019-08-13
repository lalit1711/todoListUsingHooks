import React ,{ useState } from 'react';
import '../App.css';
const task = [
    {text: "makking breakfast", priorty:"high", time:"10:00"},
    {text: "getting ready for office", priorty:"low", time:"11:00"},
    {text: "Writing Code", priorty:"modrate", time:"9:00"}
]
export function Conference(props){
    const [_todoList, updatelist] = useState([...task].sort((a,b)=>{
        return Date.parse("01/01/2011"+" "+a.time) - Date.parse("01/01/2011"+" "+b.time)
    }));
    const updateTask = (value, pro, tim) => {
        const _newTask  = [..._todoList, {text:value, priorty:pro, time:tim}].sort((a,b)=>{
            return Date.parse("01/01/2011"+" "+a.time) - Date.parse("01/01/2011"+" "+b.time)
        });
        updatelist(_newTask);
    }
    const deleteTask = (task) => {
        const _newTask = [..._todoList].filter(
            v => v.text !== task
        );
        updatelist(_newTask);
    }
    return(
        <div>
            <h1>Todo-list</h1>
            <ul style={style.ulBorder}>
            {
                _todoList.map((value,i) => {
                    return(
                        <li key={i} style={style.liBorder} className={value.priorty}>{i+1}. &nbsp; {value.text} @ {value.time}
                            <span style={style.span} title="delete task" onClick= {v => {deleteTask(value.text)}}>x</span>
                        </li>
                    )
                })
            }
            <li style={style.liBorder}><AddTodoList addTask={updateTask} /></li>
            </ul>
        </div>
    )
}

function AddTodoList(prop) {
    const [_addTask, addTask] = useState("");
    const [_addTime, addTime] = useState("");
    const [_prior, updatePro] = useState("high");
    const handleSubmit =(e) => {
        e.preventDefault();
        if(_addTask.trim() && _addTime.trim()){
            prop.addTask(_addTask, _prior, _addTime.toString())
            addTask("");
            addTime("");
        }
    }
    return(
        <form onSubmit={handleSubmit} method="get" action="#">
            <input type="text" value={_addTask} style={style.inputBox} placeholder="Enter the task..." onChange = {
                e => {
                    addTask(e.target.value)
                }
            }/> &nbsp;
            <label>Enter time</label>
            &nbsp;
            <input type="time" value={_addTime} style={style.inputBox}  onChange = {
                e => {
                    addTime(e.target.value)
                }
            }/>
            <br/>
            <input type="radio" name="priority" onChange = {e => updatePro("high")}/> High &nbsp; 
            <input type="radio" name="priority" onChange = {e => updatePro("modrate")}/> Modrate &nbsp; 
            <input type="radio" name="priority" onChange = {e => updatePro("low")}/> Low &nbsp;
            <input type="submit" style={style.button} hidden />
        </form>
    )
}

const style = {
    liBorder:{
        border: "1px solid black",
        width: "80%",
        padding: "10px 7px",
        margin: "10px 7px"
    },
    ulBorder:{
        border: "1px solid black",
        width: "50%",
        padding: "10px 7px",
        marginLeft: "30px",
        listStyleType: "none"
    },
    inputBox:{
        width: "35%",
        border: "none",
        fontSize: "14px",
        paddingVertical: "-5px",
        marginBottom:10
    },
    button:{
        color: "white",
        "padding": "10px 7px",
        "background": "blue",
        fontSize:20,
        fontWeight:600,
        borderRadius: 5,
        float:"right",
        marginTop:"-27px",
        cursor:"pointer"
    },
    span:{
        float:"right",
        border:"1px solid black",
        padding: "0px 2px",
        cursor:"pointer"
    },
    high:{
        background:"red"
    }
}


export default Conference
