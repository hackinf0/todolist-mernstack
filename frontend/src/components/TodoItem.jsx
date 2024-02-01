import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

function TodoItem({ title, isChecked, id,handleDelete }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);

    isChecked(id);
  };

  return (
    <div className="flex flex-row items-center font-[inter]">
      <div className={`flex items-center pl-5 mb-2 ${checked? 'bg-green-400' :'bg-[#9e9dff]'} shadow-sm w-[500px] h-12`}>
        <input
          type="checkbox"
          value={checked}
          onClick={handleCheck}
          className="text-gray-50"
        />
        <span className={`ml-3 font-bold ${checked ? "line-through text-white" : ""}`}>{title}</span>
      </div>
      <div className="m-5 w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center">
      <TrashIcon onClick={()=>handleDelete(id)} className="w-7 h-7 text-red-500" />
      </div>
    </div>
  );
}

export default TodoItem;
