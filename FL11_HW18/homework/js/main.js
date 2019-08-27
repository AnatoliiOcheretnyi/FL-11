function usersList() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    isLoading();
    xhr.onload = function() {
      if(this.status == 200){
        const users = JSON.parse(this.responseText);
        let output = '';
        for(let i in users) {
          output += `<li class="user card" id="${users[i].id}">
                       <ul class="list-group bg-light">
                         <li class="lists bg-info text-white">${users[i].name}</li>
                         <li class="m-2">
                           <button class="edit btn btn-outline-success">Edit</button>
                           <button class="delete btn btn-outline-danger">Delete</button>
                         </li>
                       </ul>
                    </li>`;
        } 
        document.querySelector('.users-list').innerHTML = output;
        let parentList = document.querySelectorAll('.user');
        for(let i = 0; i < parentList.length; i++) {
          let parent = parentList[i];
          let sibling = parentList[i].firstElementChild;
          getUserAvatar(parent, sibling); 
        }  
        denyLoading();
      }
    }
    xhr.onerror = function() {
      console.log('Something went wrong');
      denyLoading();
    }
    xhr.send(null);
  }
  usersList();

  function getUserAvatar(parent, sibling) {
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {"x-api-key": "b441444d-c64c-4c35-997d-ee59f946f2c2"}
    })
    .then(response => response.json())
    .then((json) => {
     let img = document.createElement('img');
     img.setAttribute('src', json[0].url);
     img.classList = 'cat';
     parent.insertBefore(img, sibling);
  
     let width = window.getComputedStyle(img,null).getPropertyValue("width");
     img.style.height = width;
    })
    .catch((err) => console.log(err))
  }
  
  function isLoading() {
    document.querySelector('.spinner').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
  }
  
  function denyLoading() {
    document.querySelector('.spinner').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
  }

  function editUser(e) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const saveBtn = document.createElement('input');
    saveBtn.setAttribute('type', 'button');
    saveBtn.value = 'Save';
    saveBtn.className = 'btn btn-primary ml-2';
    form.appendChild(input);
    form.appendChild(saveBtn);
  
    let currentId = e.target.parentElement.parentElement.parentElement.id;
  
    const editButtons = document.querySelectorAll('.edit');
    for(let i = 0; i < editButtons.length; i++) {
      if(e.target === editButtons[i]) {
  
        e.target.parentElement.appendChild(form);
        saveBtn.addEventListener('click', (e) => {
          e.preventDefault();
  
          const xhr = new XMLHttpRequest();
          xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users/' + currentId, true);
          isLoading();
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function() {
              if (xhr.status === 200) {
                  const userInfo = JSON.parse(xhr.responseText);
                  if(userInfo.name === '') {
                    alert('Write Name');
                  } else{
                    e.target.parentElement.parentElement.previousElementSibling.innerHTML = userInfo.name;
                  }
                  e.target.parentElement.parentElement.removeChild(form);
              }
              denyLoading();
          }
          xhr.onerror = function() {
            console.log('Something went wrong');
            denyLoading();
          }
          xhr.send(JSON.stringify({
            name: input.value
          }));
        });
      }
    }
  }
  
  function deleteUser(e) {
    let currentId = e.target.parentElement.parentElement.parentElement.id;
    const deleteButtons = document.querySelectorAll('.delete');
    for(let i = 0; i < deleteButtons.length; i++) {
      if(e.target === deleteButtons[i]) {
       
        const xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'https://jsonplaceholder.typicode.com/users/' + currentId, true);
        isLoading();
        xhr.onload = function () {
          const users = JSON.parse(xhr.responseText);
          if ( xhr.status == 200) {
            console.log(users);
          } else {
            console.error(users);
          }
          denyLoading();
        }
        xhr.onerror = function() {
          console.log('Something went wrong');
          denyLoading();
        }
        xhr.send(null);
      }
    }
  }

  document.addEventListener('click', editUser);
  document.addEventListener('click', deleteUser);