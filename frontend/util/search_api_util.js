export const fetchResults = ({query}) => {
  return $.ajax({
    method: "GET",
    url: `api/searches?query=${query}`
  });
};
