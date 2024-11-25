// tabs
const tabs = document.querySelectorAll(".ingredient__button");
const tabItem = document.querySelectorAll(".ingredient__box-item");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach( tab  => { tab.classList.remove("show")});

    tab.classList.add("show");


    let line = document.querySelector(".ingredient__line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    tabItem.forEach(content => { content.classList.remove('show')})
    tabItem[index].classList.add('show')
  });
});
