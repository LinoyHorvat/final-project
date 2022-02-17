import axios from 'axios';

let myUrl = 'http://localhost:8000/api/'; //development

if (process.env.NODE_ENV === 'production') {
  myUrl = 'api';
}
export default axios.create({
  baseURL: myUrl,
});
