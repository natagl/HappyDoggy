import axios from "axios";
import oauth from "axios-oauth-client";

let axiosAuthCall = oauth.client(axios.create(), {
  //axios-oauth-client install ans import
  url: "https://api.petfinder.com/v2/oauth2/token",
  grant_type: "client_credentials",
  client_id: "LJcTbQPaDtk8vT3rvPCzgvQ0n7pWl8xKkraAl1NVgX1jBOMHxm",
  client_secret: "B1HJymTLslTMRFgRGfH8LbxdDOI8iG7H5XIKNw4L"
});

export default axiosAuthCall;
