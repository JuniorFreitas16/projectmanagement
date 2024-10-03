// GanttChart.js
import React, { useEffect } from 'react';
import gantt from 'dhtmlx-gantt';

const GanttChart = ({ tasks }) => {
    useEffect(() => {
        gantt.init("gantt_here");
        gantt.parse(tasks);
    }, [tasks]);

    return <div id="gantt_here" style={{ width: '100%', height: '400px' }}></div>;
};

export default GanttChart;
