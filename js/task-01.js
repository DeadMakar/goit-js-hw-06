const categoriesListRef = document.querySelector("#categories");
// console.log(categoriesListRef);
const categoryItemRef = categoriesListRef.children;
// console.log(categoryItemRef);
console.log(`Number of categories: ${categoryItemRef.length}`);

Array.from(categoryItemRef).forEach((item) => {
  const categoryTitleRef = item.firstElementChild.textContent;
  const categoryElemRef = item.lastElementChild.children;
  console.log(`Category: ${categoryTitleRef}`);
  console.log(`Elements: ${categoryElemRef.length}`);
});
