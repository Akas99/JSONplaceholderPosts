import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function PostItem({ title, body, userId, ind }) {
  const [expanded, setExpanded] = useState(false);
  const { currentPage, itemsPerPage } = useSelector((state) => state.post);

  const indexOfLastItem = (currentPage * itemsPerPage)-1;
  const indexOfFirstItem = indexOfLastItem+1 - itemsPerPage;
  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <>
    {ind>=indexOfFirstItem && ind<=indexOfLastItem?<div className="cursor-pointer w-full">
        <li className="bg-white w-full shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
          <h2 className="text-xl">Заголовок: {title}</h2>
          <h3>Автор: {userId}</h3>
          <p>
            {body.length > 100 && !expanded
              ? "Содержание: " + body.slice(0, 100)
              : "Содержание: " + body}{" "}
          </p>
          <p className="text-red-400" onClick={toggleExpand}>
            {body.length > 100 && !expanded ? "подробнее" : "свернуть"}{" "}
          </p>
        </li>
      </div>:null}
    </>
  );
}
