// <<<<<<< aisha
import axios from 'axios';
// =======
// import axios from "axios";
// export const API = "  http://localhost:8000/meals";
// >>>>>>> tansuu

export const $api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});
