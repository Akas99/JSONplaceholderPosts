import React from "react";
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setNextPage, setPrevPage } from "../store/postSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const { posts, currentPage, itemsPerPage } = useSelector((state) => state.post);
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPrevPage());
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setNextPage());
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const renderPageLinks = () => {
    const pageLinks = [];

    for (let i = 1; i <= totalPages; i++) {
      const isCurrentPage = i === currentPage;

      const linkClass = isCurrentPage
        ? "border-red-400 text-red-400"
        : "border-transparent text-black hover:text-gray-700 hover:border-gray-300";
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      pageLinks.push(
        <p
          key={i}
          className={`border-t-2 cursor-pointer pt-4 px-4 inline-flex items-center text-sm font-medium ${linkClass}`}
          aria-current={isCurrentPage ? "page" : undefined}
          onClick={() => dispatch(setPage(i))}
        >
          {i}
        </p>
      );
    }

    return pageLinks;
  };

  return (
    <nav className="border-t mt-3 pb-3 border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px pl-6 w-0 flex-1 flex">
        {currentPage>1?<p
          className="border-t-2 cursor-pointer border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-black hover:text-gray-700 hover:border-gray-300"
          onClick={handlePreviousPage}
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-5 w-5 text-black hover:text-gray-700"
            aria-hidden="true"
          />
          предыдущий
        </p>:<p
          className="border-t-2 opacity-20 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-black"
          onClick={handlePreviousPage}
        >
          <ArrowNarrowLeftIcon
            className="mr-3 h-5 w-5 text-black"
            aria-hidden="true"
          />
          предыдущий
        </p>}
      </div>
      <div className="hidden md:-mt-px md:flex">{renderPageLinks()}</div>
      <div className="-mt-px pr-6 w-0 flex-1 flex justify-end">
        {currentPage===totalPages?<p
          className="border-t-2 opacity-20 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-black"
          onClick={handleNextPage}
        >
          следующий
          <ArrowNarrowRightIcon
            className="ml-3 h-5 w-5 text-black"
            aria-hidden="true"
          />
        </p>:<p
          className="border-t-2 cursor-pointer border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-black hover:text-gray-700 hover:border-gray-300"
          onClick={handleNextPage}
        >
          следующий
          <ArrowNarrowRightIcon
            className="ml-3 h-5 w-5 text-black hover:text-gray-700"
            aria-hidden="true"
          />
        </p>}
      </div>
    </nav>
  );
}
