// TaskList.js
import React, { useState, useEffect } from 'react';
import GanttChart from './GanttChart';
import axios from 'axios';

const TaskList = ({ projectId }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`/api/tasks?projectId=${projectId}`)
            .then(response => setTasks(response.data))
            .catch(error => console.log(error));
    }, [projectId]);

    return (
        <div>
            <h3>Tarefas</h3>
            <GanttChart tasks={tasks} />
        </div>
    );
};

export default TaskList;
