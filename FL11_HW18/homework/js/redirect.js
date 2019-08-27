  function redirect(e) {
    const userNames = document.querySelectorAll('.lists');
    for(let i = 0; i < userNames.length; i++) {
       if(e.target === userNames[i]) {
  
        document.querySelector('.container').style.display = 'none';
  
        const xhr = new XMLHttpRequest();
        let id = e.target.parentElement.parentElement.id;
        xhr.open('GET','https://jsonplaceholder.typicode.com/posts/' + id, true);
        isLoading();
        xhr.onload = function() {
          if(xhr.status == 200) {
            const post = JSON.parse(xhr.responseText);
            let postsList = `
                          <div class="container" style="text-alight: center;position: relative">
                            <h3>Post ${id}</h3>
                            <ul class="list-group">
                              <li class="list-group-item bg-primary post-header">${post.title}</li>
                            </ul>
                          </div>
                          `;        
            document.body.innerHTML = postsList;
          }
          const xhr2 = new XMLHttpRequest();
          xhr2.open('GET','https://jsonplaceholder.typicode.com/comments?postId=' + id, true);
          xhr2.onload = function() {
            const comments = JSON.parse(xhr2.responseText);
            for(let i in comments) {
              let commentsList = '';
              commentsList += `
                                <li class="list-group-item list-group-item-info">
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">${comments[i].name}</h5>
                                  </div>
                                <p class="mb-1">${comments[i].body}</p  
                                `;
              const list = document.createElement('ul');
              list.className = 'list-group';
              list.innerHTML = commentsList;
              document.querySelector('.container').appendChild(list);
            }
          }
          xhr2.onerror = function() {
            console.log('Something went wrong');
            denyLoading();
          }
          xhr2.send(null)
        }
        xhr.onerror = function() {
          console.log('Something went wrong');
          denyLoading();
        }
        xhr.send(null);
       }
    }
  }

  document.addEventListener('click', redirect);