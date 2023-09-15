import React from "react";
import { Pagination } from "@mui/material";

interface Props {
  count: number;
  setPage: Function;
}

const PaginationComponent = (props: Props) => {
  const { count, setPage } = props;
  const ChangeHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
      <Pagination
        // defaultPage={1}
        page={undefined}
        count={count}
        variant="outlined"
        onChange={ChangeHandler}
      />
    </>
  );
};

export default PaginationComponent;
