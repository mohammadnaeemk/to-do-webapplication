import ToDoitem from "./ToDoitem";

export default function ToDolist({ listOfjobs }) {
  return (
    <ul key={1} className="list-reset">
      {listOfjobs.map((job, index) => {
        return<ToDoitem
          key={index}
          discription={job.discription}
          status={job.status}
          done={job.done}
        />
      })}
    </ul>
  );
}
