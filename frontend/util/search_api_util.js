export const fetchResults = ({query}) => {
  return $.ajax({
    method: "GET",
    url: `api/search?query=${query}`
  });
};
