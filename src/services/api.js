import axios from "axios";

const BASE = "https://fakestoreapi.com";

// axios instance (clean & scalable)
const api = axios.create({
  baseURL: BASE,
  timeout: 5000,
});

// PRODUCTS
export const fetchProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

// CATEGORIES
export const fetchCategories = async () => {
  const res = await api.get("/products/categories");
  return res.data;
};

// CATEGORY PRODUCTS
export const fetchByCategory = async (cat) => {
  const res = await api.get(`/products/category/${cat}`);
  return res.data;
};

// SINGLE PRODUCT
export const fetchSingle = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};