export async function fetchData(reqPage, pageData, resName) {
  if (reqPage === null) return;
  let data = {};

  if (sessionStorage.getItem(resName)) {
    data = JSON.parse(sessionStorage.getItem(resName));
  } else {
    const res = await fetch(
      `${process.env.VUE_APP_API}/${resName}/?page=${reqPage}`
    );

    data = await res.json();

    // add to sessionStorage
    data.count && sessionStorage.setItem(resName, JSON.stringify(data));
  }

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

export async function getData(arr) {
  let numItems = arr.length;
  let resArr = [];

  for (let i = 0; i < numItems; i++) {
    let res = await fetch(arr[i]);

    let data = await res.json();
    // some have a 'title', some have 'name'
    data.name ? resArr.push(data.name) : resArr.push(data.title);
  }
  return resArr;
}
