
  const shoppingList = document.querySelector('ul');
  const inputText= document.querySelector('input');
  const addButton = document.querySelector('button');
  
    addButtonFunction = function (){
    let currentListItem = inputText.value;
    inputText.value = '';
    const item = document.createElement('li');
    const itemName = document.createElement('span');
    const deleteButton = document.createElement('button');
    item.appendChild(itemName);
    item.appendChild(deleteButton);
    itemName.textContent = currentListItem;
    deleteButton.textContent = 'Delete';
    shoppingList.appendChild(item);
    deleteButtonFunction = function(e) {
      shoppingList.removeChild(item);
    }
    deleteButton.addEventListener("click",deleteButtonFunction);
    inputText.focus();  
}
addButton.addEventListener("click", addButtonFunction);
