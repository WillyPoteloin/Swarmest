import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

const app = document.createElement("div");
app.setAttribute('id', 'react-app');
document.body.appendChild(app);

var state = {};

var addNewTask = function() {

  // On créer la tâche à rajouter dans la liste de tâche
  var newTask = Object.assign({}, state.newTask, {id: state.tasks.length + 1, errors: {}});

  if(!newTask.title) {
    newTask.errors.title = 'Vous devez rensigner le titre de la tâche';
  }

  // On regarde si la nouvelle tâches a des erreurs
  if(Object.keys(newTask.errors).length > 0) {
    setState({newTask: newTask});
  }
  else {
    // On rajoute la tâche dans la liste de tâches
    var tasks = state.tasks;
    tasks.push(newTask);

    // On remet les valeurs par défaut de la nouvelle tâche
    var newTask = {title: "", tag:null, errors: {}};

    setState({tasks: tasks, newTask: newTask});
  }
}

var updateNewTask = function(newTask) {
  setState({newTask: newTask});
}

var setState = function(changes) {
  Object.assign(state, changes);
  ReactDom.render(<App {...state} />, document.querySelector('#react-app'));
}

setState({
  tasks: [
    {id: 1, title: "Task 1", tag:{id: 1, color:"blue", title:"Tag 1"}},
    {id: 2, title: "Task 2", tag:null},
    {id: 3, title: "Task 3", tag:{id: 2, color:"green", title:"Tag 2"}},
    {id: 4, title: "Task 4", tag:{id: 3, color:"red", title:"Tag 3"}},
  ],
  newTask: {title: "", tag:null, errors: {}},
  updateNewTask: updateNewTask,
  addNewTask: addNewTask
});
