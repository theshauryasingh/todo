import React from 'react'
import './App.css'
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <section className='task_column'>section 1</section>
        <section className='task_column'>section 2</section>
        <section className='task_column'>section 3</section>
      </main>
    </div>
  )
}

export default App


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
