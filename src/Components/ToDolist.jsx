import ToDoitem from "./ToDoitem";

export default function ToDolist({ listOfjobs, deleteToDo ,checkBoxHandler}) {
  return (
    <ul key={1} className="list-reset">
      {listOfjobs.map((job) => {
        
        return (
          <ToDoitem
            deleteToDo={deleteToDo}
            checkBoxHandler={()=>checkBoxHandler(job)}
            item={job}
            key={job.id}
            discription={job.discription}
            status={job.status}
            done={job.done}
          />
        );
      })}
    </ul>
  );
}
