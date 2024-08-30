export const CustomPagination = ({ pagination }) => {
  const { currentPage, totalPages, onPageChange } = pagination;

  return (
    <div className="custom-pagination">
      {currentPage !== 1 && (
        <button onClick={() => onPageChange(1)}>First</button>
      )}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      {currentPage !== totalPages && (
        <button onClick={() => onPageChange(totalPages)}>Last</button>
      )}
    </div>
  );
};
