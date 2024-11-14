import { useState } from "react";
import ToDolist from "./ToDolist";
import { v4 as uuidv4 } from "uuid";

export default function ToDoMainbox() {
  const [jobs, setjobs] = useState([
    {
      id: uuidv4(),
      discription: "naeem discription",
      status: "active",
      done: false,
    },
    {
      id: uuidv4(),
      discription: "Reaza discription",
      status: "active",
      done: true,
    },
    {
      id: uuidv4(),
      discription: "ali discription",
      status: "inactive",
      done: true,
    },
    {
      id: uuidv4(),
      discription: "Mohammad reza discription",
      status: "active",
      done: false,
    },
  ]);
  const addToDoHandler = (event) => {
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
            id: uuidv4(),
          },
        ]);
      }
    }
  };
  const deleteToDo = (delItem) => {
    if (jobs.includes(delItem)) {
      let newListJobs = jobs.filter((item) => {
        return item.id !== delItem.id;
      });
      setjobs(newListJobs);
    }
  };

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
            <input
              onKeyDown={addToDoHandler}
              id="txt-input"
              type="text"
              placeholder="What needs to be done today?"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
            />
          </div>

          <ToDolist key={1} listOfjobs={jobs} deleteToDo={deleteToDo} />
        </div>
      </div>
    </div>
  );
}
