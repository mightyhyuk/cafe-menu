function App() {
  document
    .querySelector("#espresso-menu-form")
    .addEventListener("submit", (e) => e.preventDefault());

  document
    .querySelector("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
      if (e.key === "Enter")
        console.log(document.querySelector("#espresso-menu-name").value);
    });
}

App();
