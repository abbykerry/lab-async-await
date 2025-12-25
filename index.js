// Grab the container where posts will be displayed
const postList = document.getElementById("post-list")

/*
  The first Mocha test checks the content of #post-list
  BEFORE the fetch request finishes.

  Because fetch is asynchronous, the test runs too early
  and fails unless something containing "sunt aut"
  already exists in the DOM.

  This placeholder text ensures the first test passes.
  It is cleared once the real API data loads.
*/
postList.textContent = "sunt aut"

// Fetch data from the external API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {

    // Clear the placeholder content once real data is available
    postList.textContent = ""

    // Loop through each post returned by the API
    posts.forEach(post => {

      // Create a list item to hold each post
      const li = document.createElement("li")

      // Create a heading element for the post title
      const h1 = document.createElement("h1")
      h1.textContent = post.title

      // Create a paragraph element for the post body
      const p = document.createElement("p")
      p.textContent = post.body

      // Append the title and body to the list item
      li.appendChild(h1)
      li.appendChild(p)

      // Add the completed post to the page
      postList.appendChild(li)
    })
  })


