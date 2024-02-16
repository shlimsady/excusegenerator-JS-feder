window.onload = function(e) {
  let who = [
    "he",
    "she",
    "they",
    "it",
    "the aliens",
    "the monster",
    "the ghost"
  ];
  let action = [
    "ate",
    "threw",
    "destroyed",
    "burned",
    "tore apart",
    "swallowed",
    "vaporized"
  ];
  let what = [
    "my arms",
    "my dog",
    "my homework",
    "my car",
    "my lunch",
    "my computer"
  ];
  let when = [
    "yesterday",
    "today",
    "tomorrow",
    "last week",
    "last month",
    "next year"
  ];

  // Add event listener to the button
  document
    .getElementById("generateButton")
    .addEventListener("click", function() {
      const stat = generateRandomExcuse(who, action, what, when);

      const statElement = document.getElementById("excuse"); // Changed to "excuse" to match HTML

      statElement.innerHTML = "<span style='color:red'>" + stat + "</span>";
    });
};

function generateRandomExcuse(who, action, what, when) {
  const whoRandom = who[Math.floor(Math.random() * who.length)];
  const actionRandom = action[Math.floor(Math.random() * action.length)];
  const whatRandom = what[Math.floor(Math.random() * what.length)];
  const whenRandom = when[Math.floor(Math.random() * when.length)];

  return whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
}
