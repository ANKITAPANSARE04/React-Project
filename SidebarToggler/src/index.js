import React from "react";
import Sidebar from "./Sidebar";
import ReactDOM from "react-dom";
import Select from "react-select";
import "./sidebar.css";
const options = [
  { value: "Ahocolate", label: "Ahocolate" },
  { value: "Btrawberry", label: "Btrawberry" },
  { value: "anilla", label: "Canilla" },
  { value: "chocolate", label: "Dhocolate" },
  { value: "strawberry", label: "Etrawberry" },
  { value: "vanilla", label: "Fanilla" },
  { value: "chocolate", label: "Ghocolate" },
  {
    value: "strawberry",
    label:
      "Htrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberrytrawberry"
  },
  { value: "vanilla", label: "Ianilla" },
  { value: "chocolate", label: "Jhocolate" },
  { value: "strawberry", label: "Ktrawberry" },
  { value: "vanilla", label: "Lanilla" },
  { value: "chocolate", label: "Mhocolate" },
  { value: "strawberry", label: "Ntrawberry" },
  { value: "vanilla", label: "Oanilla" },
  { value: "chocolate", label: "Phocolate" },
  { value: "strawberry", label: "Qtrawberry" },
  { value: "vanilla", label: "Ranilla" }
];

function capital_letter(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}
function App() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
