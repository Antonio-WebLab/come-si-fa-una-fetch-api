const listEl = document.querySelector('ul');
async function callAPI() {
  const response = await fetch("https://api.github.com/search/users?q=dazero");
  const repos = await response.json();

  repos.items.forEach(function(item) {
     console.log(item.full_name);
    listEl.innerHTML += `
      <li>
        <img src="${item.avatar_url}" />
        <a href="${item.html_url}">${item.login}</a>
      </li>
    `;
  });
}
callAPI();
// credit and thanks to Filippo Mangione :)