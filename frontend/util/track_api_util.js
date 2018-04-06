export const fetchToto = id => {
  return $.ajax({
    method: "GET",
    url: `api/tracks/${id}`
  });
};
