import ToDoitem from "./ToDoitem";

export default function ToDolist({listOfItems}) {
    return (
        <ul className="list-reset">
          {/* dddddddd */}
        <ToDoitem listOfItems={listOfItems}></ToDoitem>
        <ToDoitem></ToDoitem>
      </ul>
    )
}