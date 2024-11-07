import { useState } from "react";
import ToDolist from "./ToDolist";

export default function ToDoMainbox() {
  const [jobs, setjobs] = useState([
    {
      discription: "naeem discription",
      status: "active",
      done: false,
    },
    {
      discription: "Reaza discription",
      status: "active",
      done: true,
    },
    {
      discription: "ali discription",
      status: "inactive",
      done: true,
    },
    {
      discription: "Mohammad reza discription",
      status: "active",
      done: false,
    },
  ]);
  const addToDoHandler = (event)=> {
    if (event.key === "Enter") {
      if (
        event.target.value !== null &&
        event.target.value !== "" &&
        event.target.value !== undefined
      ) {
        setjobs([
          ...jobs,
          {
            discription: event.target.value,
            status: "inactive",
            done: false,
          },
        ]);
      }
    }
  }
  
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
          <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-purple-600">
              {" "}
              TO DO APP
            </h1>
          </div>
          <div className="relative">
            <input onKeyDown={addToDoHandler}
              id="txt-input"
              type="text"
              placeholder="What needs to be done today?"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
            />
          </div>

          <ToDolist key={1} listOfjobs={jobs} />
        </div>
      </div>
    </div>
  );
}
