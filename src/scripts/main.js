import {getUsers, getPosts} from "./data/DataManager.js"
import {PostList} from "./feed/PostList.js"
import {NavBar} from "./nav/NavBar.js"
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
/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const startGiffyGram = () => {
    showNavBar();
  showPostList();
}
// Are you defining the function here or invoking it?
startGiffyGram();

