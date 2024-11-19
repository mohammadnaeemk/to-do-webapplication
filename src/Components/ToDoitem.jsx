import ColseIcon from "./images/CloseIcon";
import EditIcon from "./images/EditIcon";

export default function ToDoitem({
  keyId,
  item,
  discription,
  status,
  done,
  deleteToDo,
  checkBoxHandler
}) {
  const isChecked = status === "inactive"; // Simplify checked determination

  return (
    <li
      key={keyId}
      className="relative flex items-center justify-between px-2 py-6 border-b"
    >
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkBoxHandler}
          className=""
        />

        <p
          className={`inline-block mt-1 ml-2 text-gray-600 ${
            isChecked ? "line-through" : ""
          }`}
        >
          {discription}
        </p>
      </div>

      <button
        type="button"
        className="absolute right-0 flex items-center space-x-1"
      >
        <EditIcon />

        <ColseIcon onClick={() => deleteToDo(item)}/>
      </button>
    </li>
  );
}
