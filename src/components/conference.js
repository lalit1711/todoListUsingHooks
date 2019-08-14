import React ,{ useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddTodoList from './AddTask'
import OldTask from './OldTask'
import UpcomingTask from './UpcomingTask'
import LocalStorageService from '../services/local.service';
const _localStorageService = new LocalStorageService();

export function Conference(props){
    const [_todoList, updatelist] = useState(_localStorageService.getTasksFromLocal().sort((a,b)=>{
        return Date.parse("01/01/2011 "+a.time) - Date.parse("01/01/2011 "+b.time)
    }));
    const [_currentTask, updateCurrentTask] = useState(_localStorageService.getCurrentTask(_todoList,">"))
    const [_oldTask, updateOldTask] = useState(_localStorageService.getCurrentTask(_todoList,"<"))
    const updateTask = (value, pro, tim) => {
        const _newTask  = [..._todoList, {text:value, priorty:pro, time:tim}].sort((a,b)=>{
            return Date.parse("01/01/2011 "+a.time) - Date.parse("01/01/2011 "+b.time)
        });
        UpdateTasks(_newTask);
    }


    const deleteTask = (task) => {
        const _newTask = [..._todoList].filter(
            v => v.text !== task
        );
        UpdateTasks(_newTask);
    }

    const UpdateTasks = (_newTask) => {
        updatelist(_newTask);
        _localStorageService.setTasksInLocal(_newTask);
        updateOldTask(_localStorageService.getCurrentTask(_newTask, "<"))
        _newTask = _localStorageService.getCurrentTask(_newTask, ">");
        
        updateCurrentTask(_newTask)
    }


    return(
        <div className="row">
            <div className = "col-md-4">
                <h4>Todo-list <li style={style.liBorder}>UpComing Task =>  {_currentTask.length ? _currentTask[0].text : "No tasks"   }  {_currentTask.length ? _currentTask[0].time : "--:--" }</li></h4>
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
            <div className="col-md-4">
            <h1>Not Complete Tasks <li style={style.liBorder}>Upcoming</li></h1>
                <UpcomingTask data={_currentTask} />
            </div>
            <div className="col-md-4">
            <h1>Previous Tasks <li style={style.liBorder}>Old Task</li></h1>
                <OldTask data={_oldTask}/>
            </div>
        </div>
    )
}



const style = {
    liBorder:{
        border: "1px solid black",
        width: "97%",
        padding: "10px 7px",
        margin: "10px 7px",
        borderRadius:5,
        listStyleType: "none"
    },
    ulBorder:{
        width: "90%",
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
        padding: "1px 3px",
        cursor:"pointer",
        borderRadius:50
    },
    high:{
        background:"red"
    }
}


export default Conference
