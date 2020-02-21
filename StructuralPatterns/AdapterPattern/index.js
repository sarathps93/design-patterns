const locaStorage = require("./localStorage");

console.log("Local storage length:", locaStorage.length);

const uid = locaStorage.getItem("user_id");

console.log("user_id", uid);

if (!uid) {
  console.log("User id not found. Setting the user id and token");
  locaStorage.setItem("token", "TJVAhheiufg2344hui");
  localStorage.setItem("user_id", "12345");
} else {
  locaStorage.clear();
}
