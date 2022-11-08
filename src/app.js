/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let combination = [];
  let domains = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        //combination.push(pronoun[i] + adj[j] + noun[x] + ".com");
        domains +=
          '<li class="list-group-item">' +
          pronoun[i] +
          adj[j] +
          noun[x] +
          ".com" +
          "</li>";
      }
    }
  }

  document.getElementById("domains").innerHTML = domains;
};
