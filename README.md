# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


// import logo from './logo.svg'
// import './App.css'
// import { useState } from 'react'

// function App() {
//   const [list, setlist] = useState([])
//   const [userInput, setuserInput] = useState('')
//   const [pendings, Setpendings] = useState(0)

//   //Taking Input
//   const functin = (e) => {
//     setuserInput(e.target.value)
//   }
//   const submition = () => {
//     setlist([...list, userInput])
//     setuserInput('')
//     Setpendings((prevpendings) => prevpendings + 1)
//   }

//   const deletelist = (ind) => {
//     console.log('Hello', ind) // Error
//     const remainingArray = list.filter((item, index) => {
//       console.log(index)
//       return index !== ind
//     })
//     console.log(remainingArray)
//     setlist([...remainingArray])
//   }

//   const d = new Date().toLocaleString()
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>React ToDo List</h2>
//       </header>
//       <h3 style={{ color: '#405cf5' }}> PENDING TASK : {pendings}</h3>
//       <h3 style={{ color: 'black' }}> {d}</h3>
//       <div>
//         {/* INPUT */}
//         <input
//           type="text"
//           className="input"
//           placeholder="Enter Your Task .."
//           value={userInput}
//           onChange={(e) => functin(e)}
//         />
//         <button onClick={() => submition()} className="button-9">
//           Submit
//         </button>
//         {list.map((item, index) => {
//           return (
//             <div className="list-containers">
//               <div className="list-items-main">
//                 <div className="list-index-container">{index + 1} .</div>
//                 <div className="list-item-container">{item}</div>
//                 <div className="list-btn-container">
//                   <button
//                     className="button-11"
//                     onClick={() => deletelist(index)}
//                   >
//                     Done
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default App
