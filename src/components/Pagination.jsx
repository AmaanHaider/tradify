import { Button } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <Button  key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;