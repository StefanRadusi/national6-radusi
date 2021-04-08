import { renderArticles } from "./article";
import { getApiPostData } from "./utils/api";

console.log("javascript-AJAX-CRUD-homework-solution");

document.getElementById("get-data").addEventListener("click", () => {
  getApiPostData(renderArticles);
});
