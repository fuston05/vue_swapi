export async function fetchData(reqPage, pageData, resName) {
  if (reqPage === null) return;

  const res = await fetch(
    `${process.env.VUE_APP_API}/${resName}/?page=${reqPage}`
  );

  const data = await res.json();

  const _resource = data.results;

  // items per page
  const _perPage = pageData.perPage ? pageData.perPage : data.results.length;

  // current page
  let _page = reqPage ? parseInt(reqPage) : 1;

  // calc total pages
  let _totalPages = Math.floor((data.count - 1) / _perPage + 1);

  // next/prev page calculation
  let _nextPage = data.next
    ? data.next
        .split("/")
        .splice(-1)[0]
        .slice(-1)
    : null;

  let _prevPage = data.previous
    ? data.previous
        .split("/")
        .splice(-1)[0]
        .slice(-1)
    : null;

  return [_perPage, _page, _totalPages, _nextPage, _prevPage, _resource];
}
