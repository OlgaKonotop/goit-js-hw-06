const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);



for (let i = 0; i < itemEl.length; i += 1) {
 
  console.log  (`Category: ${itemEl[i].querySelector(' h2').textContent}  Elements: ${itemEl[i].querySelectorAll('ul li').length}`)

}
