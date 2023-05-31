const Pagination = ({ data, page, setPage, rowsPerPage, setRowsPerPage }) => {
  const handleChangePage = (value) => {
    if (value < 1) {
      return;
    }
    if (value > Math.ceil(data.length / rowsPerPage)) {
      return;
    }
    setPage(value);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
  };
  return (
    <div className="flex">
      <span className="pt-1 pr-2">Rows per page :</span>
      <select
        className="mt-1 mr-5 bg-transparent"
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <span className="pt-1 mr-5">
        {page * rowsPerPage} of {data.length}{" "}
      </span>
      <div className="flex">
        <button
          className="m-2"
          onClick={() => {
            handleChangePage(page - 2);
          }}
        >
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.41 1.41L12 0L6 6L12 12L13.41 10.59L8.83 6L13.41 1.41ZM7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          className="m-2"
          onClick={() => {
            handleChangePage(page - 1);
          }}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          className="m-2 text-black font-bold"
          onClick={() => {
            handleChangePage(page + 1);
          }}
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.59 1.41L5.17 6L0.59 10.59L2 12L8 6L2 0L0.59 1.41Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          className="m-2 text-black font-bold"
          onClick={() => {
            handleChangePage(page + 2);
          }}
        >
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.59 10.59L2 12L8 6L2 0L0.59 1.41L5.17 6L0.59 10.59ZM6.59 10.59L8 12L14 6L8 0L6.59 1.41L11.17 6L6.59 10.59Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Pagination;
