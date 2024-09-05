const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const hiddenText = document.getElementById("hiddenText").textContent.split("\n");

searchInput.addEventListener("change", function() {
  const searchCode = parseInt(searchInput.value);
  let found = false;
  for (let i = 0; i < hiddenText.length; i++) {
    const line = hiddenText[i].trim();
    if (line.startsWith(searchCode.toString())) {
      // Extract the text after the code and before the trailing comma
      searchResults.value = line.substring(line.indexOf(" ") + 1, line.lastIndexOf(",")).trim();
      found = true;
      break;
    }
  }

  if (!found) {
    searchResults.value = "Code not found.";
  }
});

  //const searchInput = document.getElementById("searchInput");
  //const searchResults = document.getElementById("searchResults");
  //const hiddenText = document.getElementById("hiddenText").textContent.split("\n");

  searchInput.addEventListener("change", function() {
    //const searchCode = parseInt(searchInput.value);
    let found = false;
    for (let i = 0; i < hiddenText.length; i++) {
      const line = hiddenText[i];
      if (line.startsWith(searchCode.toString())) {
        searchResults.value = line.substring(line.indexOf(" ") + 1).trim();
        found = true;
        break;
      }
    }

    if (!found) {
      searchResults.value = "Code not found.";
    }
  });

//const searchInput = document.getElementById("searchInput");
//const searchResults = document.getElementById("searchResults");
//const hiddenText = document.getElementById("hiddenText").textContent.split("\n");

searchInput.addEventListener("change", function() {
  //const searchCode = parseInt(searchInput.value);
  let found = false;
  for (let i = 0; i < hiddenText.length; i++) {
    const line = hiddenText[i].trim();
    if (line.startsWith(searchCode.toString())) {
      searchResults.value = line.substring(line.indexOf(" ") + 1).trim();
      found = true;
      break;
    }
  }

  if (!found) {
    searchResults.value = "Code not found.";
  }
});