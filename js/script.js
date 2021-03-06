/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/* * *
 * global variables
 * * */

const studentList = document.querySelectorAll(".student-item");
let studentsPerPage = 10; // Default 10 students per page
let pageNumber = 1; // Default start at page 1
const pageSelector = document.querySelector(".page");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
  let startIndex = page * studentsPerPage - studentsPerPage;
  let endIndex = page * studentsPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i + 1 > startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
  appendPageLinks();
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks() {
  const pagination = document.querySelector(".pagination");

  let totalPages = Math.ceil(studentList.length / studentsPerPage);

  const ul = document.createElement("ul");

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    if (i === pageNumber) {
      a.className = "active";
    }
    a.textContent = i;

    // to only allow clickability of non-curent page number
    if (i !== pageNumber) {
      a.setAttribute("href", "#");
    }

    li.appendChild(a);
    ul.appendChild(li);
  }
  //
  console.log(ul);
  deletePaginationLinks();
  pagination.appendChild(ul);
}

function deletePaginationLinks() {
  let paginationLinks = document.querySelector(".pagination");
  pageSelector.removeChild(paginationLinks);
}

const ulClick = document.querySelector(".pagination");
ulClick.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    pageNumber = parseInt(e.target.innerHTML);
    showPage(studentList, pageNumber);
  }
});

// Remember to delete the comments that came with this file, and replace them with your own code comments.

showPage(studentList, pageNumber);
