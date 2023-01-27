export function getHashMap(newsArray, field) {
  let hashMap = {};
  for (let news of newsArray) {

    if(news[field] === null || news[field]  === '') continue;

    if ( !hashMap[news[field]]) {
      hashMap[news[field]] = 1;
    } else hashMap[news[field]] += 1;
  }
  return hashMap;
}


