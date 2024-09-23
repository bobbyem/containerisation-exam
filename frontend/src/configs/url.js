const PORT = process.env.REACT_APP_BACKEND_PORT || 3000;
export const URL =
  `${process.env.REACT_APP_HOST_URL}:${PORT}` || "http://localhost:3000";
