import {getUsers, getPosts} from "./data/DataManager.js"
import {PostList} from "./feed/PostList.js"
import {NavBar} from "./nav/NavBar.js"
import {Footer} from "./nav/Footer.js"
/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
// let postElement = document.querySelector(".postList");
// let navElement = document.querySelector("nav");
// let enrtyElement = document.querySelector(".entryForm")
const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}
const showFooter = () => {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = Footer();
}

const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })
/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const startGiffyGram = () => {
    showNavBar();
  showPostList();
  showFooter();
}
// Are you defining the function here or invoking it?
startGiffyGram();

