export const paginate = (total: number, start: number, limit: number) => {
  const totalItems = Number(total);
  let currentPage = Number(start) / Number(limit) + 1;
  const pageSize = Number(limit);
  const maxPages = 5;
  const totalPages = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let startPage: number;
  let endPage;
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i,
  );

  return {
    total_items: totalItems,
    current_page: Math.floor(currentPage),
    previous_page: currentPage - 1,
    next_page: currentPage + 1,
    page_size: pageSize,
    total_pages: totalPages,
    start_page: startPage,
    end_page: endPage,
    start_index: startIndex,
    end_index: endIndex,
    pages: pages.toString(),
  };
};

export const paginateData = (
  array: any,
  page_number: number,
  page_size: number,
) => {
  return array.slice(
    page_number * page_size,
    page_number * page_size + page_size,
  );
};
