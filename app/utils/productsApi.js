import axios from "axios";
const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "https://strapi-ecommerce-db.onrender.com/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

//get products
const getProducts = () => axiosClient.get("/products?populate=*");

//get product by id
const getProductById = (id) => axiosClient.get(`/products/${id}?populate=*`);

//get products by category
const getProductsByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

//Add to cart
const addToCart = (data) => axiosClient.post("/carts", data);

//get user cart items
const getUserCartItems = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate][0]=img&filters[email][$eq]=${email}`
  );

//delete item from user cart
const deleteItemFromCart = (id) => axiosClient.delete(`/carts/${id}`);

//create order
const createOrder = (data) => axiosClient.post("/orders", data);

export default {
  getProducts,
  getProductById,
  getProductsByCategory,
  addToCart,
  getUserCartItems,
  deleteItemFromCart,
  createOrder,
};
