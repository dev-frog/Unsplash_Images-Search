const API_CLIENTID = process.env.API_UNSPLSAH;
// it showing some error that i can't fix right now
const API_URL = `https://api.unsplash.com/search/photos?per_page=3&client_id=P2g3I5cJgH_YS3sCOIBU-muRRfq2QaIr0FPxkZT1yDI`;
console.log(API_CLIENTID)

export default {
  search(imageSearch,page) {
    const url = `${API_URL}&query=${imageSearch}&page=${page}`;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => result.results);
  },
};
