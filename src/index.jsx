import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import uuid from 'node-uuid'
import Moment from 'moment';

// Reducers
import appReducer from './reducers/index';
import App from './components/app';

// Creating store
let store = createStore(appReducer);

const app = document.createElement("div");
app.setAttribute('id', 'react-app');
document.body.appendChild(app);

var state = {};

var addNewTask = function() {

  // On créer la tâche à rajouter dans la liste de tâche
  var id = 1;
  state.tasks.map(function(task){
      if(id < task.id) id = task.id;
  });
  id = id + 1;
  var newTask = Object.assign({}, state.newTask, {id: id, errors: {}});

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

  searchTask(state.taskSearch.value);
}

var updateNewTask = function(newTask) {
  setState({newTask: newTask});
}

var deleteTask = function(task) {
    var tasks = state.tasks;

    var index = tasks.indexOf(task);

    tasks.splice(index, 1);

    setState({tasks:tasks});

    searchTask(state.taskSearch.value);
}

var searchTask = function(searchValue) {

    var taskSearch = state.taskSearch;

    taskSearch.value = searchValue;

    var tasks = state.tasks;
    var filteredTasks = null;

    if(searchValue) {
        var regexp = new RegExp(searchValue, 'i');
        filteredTasks = tasks.filter(function(task) {
            return regexp.test(task.title);
        });
    }

    setState({taskSearch: taskSearch, filtered_tasks: filteredTasks});
}

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#react-app')
);
