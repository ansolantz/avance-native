
import { BARCODE_LOOKUP_KEY } from 'react-native-dotenv'
import axios from "axios";

class ApiServices {
  getBarcodeInfo(barcode) {
    console.log(`https://api.barcodelookup.com/v2/products?barcode=${barcode}&key=${BARCODE_LOOKUP_KEY}`)

    return axios.get(`https://api.barcodelookup.com/v2/products?barcode=${barcode}&key=${BARCODE_LOOKUP_KEY}`);
  }
}

const apiService = new ApiServices();
export default apiService;
