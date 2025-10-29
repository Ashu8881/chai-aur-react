import { createRoot } from "react-dom/client";
// import {jsx as _jsx} from "react/jsx-runtime.js";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>testing react 121</h1>
//     </div>
//   );
// }
// const anotherElement = (
//      <a href="https:// google.com" target="_blank">visit google</a>
// )

// const reactElement = React.createElement('a', {hrer:'https://google.com' ,target :"_blank",},"click me to visit")
createRoot(document.getElementById("root"))
  .render(

  // reactElement
  // <div>
  // <MyApp/>
  <App />
  //</div>
  // anotherElement
  );
