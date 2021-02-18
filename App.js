import React from 'react'
import Task from './components/Task'
import TaskInput from './components/TaskInput'

import 'antd/dist/antd.css';

import { Typography, Space } from 'antd';
const { Title, Text, Link  } = Typography;


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      tasks: [
        { id:0, title: 'Create todo-react app', done: false },
        { id:1, title: 'Make breakfast', done: true },
        { id:2, title: 'Go away', done: false }
      ]
    }
  }
  
  doneTask = id  => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    })
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    })
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: task.lenght !== 0 ? task.lenght : 0,
        title: task,
        done: false
      });
      return tasks;
    })
  }


  render() {
    const { tasks }  = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return <div className="App">
      <Title>Active tasks : {activeTasks.length}</Title>
      <Text>
          {[...activeTasks, ...doneTasks].map(task => (
          <Task
          doneTask={() => this.doneTask(task.id)}
          deleteTask={() => this.deleteTask(task.id)}
          task={task}
          key={task.id}/>
        ))}
      </Text>
      
      <TaskInput addTask={this.addTask}/>
    </div>
      
    
  }
}


export default App;
