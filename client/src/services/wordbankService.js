// You can create all the fetches to your own APIs and externals APIs here
import axios from "axios";

const getAllWordbank = async () => {
  const response = await axios.get(`/api/wordbank`);

  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { getAllWordbank };