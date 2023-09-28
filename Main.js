
var names = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
  var maxResults = 5; // Limit the number of displayed results

  function autocomplete() {
    var input = document.getElementById('autocomplete-input').value;
    var autocompleteResults = document.getElementById('autocomplete-results');
    autocompleteResults.innerHTML = '';

    if (input.trim() === '') {
      return; // No input, so don't display results
    }

    var count = 0; // To limit the number of displayed results

    for (var i = 0; i < names.length; i++) {
      if (names[i].toLowerCase().startsWith(input.toLowerCase())) {
        var node = document.createElement('div');
        node.textContent = names[i];
        node.onclick = function() {
          document.getElementById('autocomplete-input').value = this.textContent;
          clearResults();
        };
        autocompleteResults.appendChild(node);

        count++;
        if (count >= maxResults) {
          break; // Reached the maximum number of results
        }
      }
    }
  }

  function clearResults() {
    var autocompleteResults = document.getElementById('autocomplete-results');
    autocompleteResults.innerHTML = '';
  }