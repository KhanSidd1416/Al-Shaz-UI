import axios from "axios";

const API_BASE_URL = "http://localhost:5005";

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};

export const fetchProductsByCategory = async (categoryName) => {
  const response = await axios.get(`${API_BASE_URL}/products/${categoryName}`);
  return response.data;
};

export const fetchWishlist = async (wishlist) => {
  const response = await axios.post(`${API_BASE_URL}/products/wishlist`, { wishlist });
  return response.data;
};

export const incrementProductViews = async (productId) => {
  try {
    await axios.put(`${API_BASE_URL}/products/view/${productId}`);
  } catch (error) {
    console.error("Error incrementing views:", error);
  }
};

export const fetchPopularProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular products:", error.response?.data || error.message);
    return [];
  }
};
