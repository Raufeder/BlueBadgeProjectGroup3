let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:8080/";
    break;
  case "personary-client.herokuapp.com":
    APIURL = "https://personary.herokuapp.com/";
    break;
  default:
}

export default APIURL;
