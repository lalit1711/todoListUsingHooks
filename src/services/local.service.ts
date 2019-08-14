import { promised } from "q";

export class LocalStorageService{
    getTasksFromLocal = (): any => {
        let _localTask = localStorage.getItem('tasks') 
        if(_localTask == null){
            _localTask = JSON.stringify([]);
        }
        return JSON.parse(_localTask);
    }

    setTasksInLocal = (task: any): any => {
        localStorage.setItem("tasks", JSON.stringify(task));
            
    }

    getCurrentTask = (_data: any): any => {
        return _data.filter((a: any) => 
            Date.parse("01/01/2011 "+a.time) > Date.parse("01/01/2011 "+new Date().toLocaleTimeString('en-US', { hour12: false, 
                hour: "numeric", 
                minute: "numeric"}))
        )
    }
}

export default LocalStorageService