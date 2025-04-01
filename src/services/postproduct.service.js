import api from "./api";

const API_URL = import.meta.env.VITE_BASE_URL + "/post";

const createPostProduct = async (post) => {
  const response = await api.post(API_URL, post, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};

const getAllPostsProduct = async () => {
  return await api.get(API_URL);
};

const getProductById = async (id) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data; // 
};

const PostService = {
  createPostProduct,
  getAllPostsProduct,
  getProductById,
};

export default PostService;
