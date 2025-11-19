const queryStringFromAPI = '?page=2&limit=10&sort=name&order=asc&tags=javascript,react,nodejs';

function parseQueryString(queryString) {
  // 여기에 코드 작성
  // 배열 형태도 처리 (쉼표로 구분된 값)
}

console.log(parseQueryString(queryStringFromAPI));
// {
//   page: '2',
//   limit: '10',
//   sort: 'name',
//   order: 'asc',
//   tags: ['javascript', 'react', 'nodejs']
// }