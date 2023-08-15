import axios from "axios";
class smartCartAPI {
  async fetchProduct(productId) {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const smartcartAPI = new smartCartAPI();

export default smartcartAPI;


