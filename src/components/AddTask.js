import React, {useState} from 'react';
export function AddTodoList(prop) {
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
        margin: "10px 7px",
        borderRadius:5,
        listStyleType: "none"
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
        padding: "1px 3px",
        cursor:"pointer",
        borderRadius:50
    },
    high:{
        background:"red"
    }
}


export default AddTodoList;