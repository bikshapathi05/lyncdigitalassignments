      var addTask = document.getElementById("addTaskBtn");
      var ulElement = document.getElementsByClassName("inCompletedTask")[0];
      var completedUl = document.getElementsByClassName("completedTask")[0];

      function changeText() {
          document.getElementsByName("taskcontent")[0].value = "";
      }

      function performTask() {
          // creating li elemtnets
          var taskcontent = document.getElementsByName("taskcontent")[0].value;
          var liElement = document.createElement("li");
          var checkBox = document.createElement("input");
          var span = document.createElement("span");
          var editBox = document.createElement("input");
          var editButton = document.createElement("button");
          var deleteButton = document.createElement("button");
          checkBox.setAttribute("type", "checkbox");
          editButton.innerText = "Edit";
          //    editButton.setAttribute("id", "editBtn");
          deleteButton.innerText = "Delete";
          //    deleteButton.setAttribute("id", "delBtn");
          liElement.appendChild(checkBox);
          liElement.appendChild(span);
          liElement.appendChild(editBox);
          liElement.appendChild(editButton);
          liElement.appendChild(deleteButton);
          if (taskcontent !== "Enter Task") {
              ulElement.appendChild(liElement);
          }
          span.innerText = taskcontent;
          editBox.style.display = "none";

          function editnSaveTask() {
              if (editButton.innerText.toLocaleLowerCase() == "edit") {
                  span.style.display = "none";
                  editBox.style.display = "inline";
                  editBox.value = span.innerText;
                  editButton.innerText = "save";
                  checkBox.style.display = "none";
              }
              else if (editButton.innerText.toLocaleLowerCase() == "save") {
                  span.innerText = editBox.value;
                  span.style.display = "inline";
                  editBox.style.display = "none";
                  editButton.innerText = "edit";
                  checkBox.style.display = "inline";
              }
          }
          // deleteting task
          function deleteTask() {
              this.parentNode.remove();
          }

          function checkBoxTask() {
              // console.log(this.checked);
              //if checkbox checked append task to completed tasks list and removing from incompleted task
              if (this.checked == true) {
                  completedUl.appendChild(this.parentNode);
                  this.parentNode.childNodes[3].style.display = "none";
                  //console.log(this.parentNode.childNodes[3].style.display = "none");
                  //this.parentNode.remove();
              }
              //if checkbox unchecked append task to incompleted tasks list and removing from completed task
              else if (this.checked == false) {
                  ulElement.appendChild(this.parentNode);
                  this.parentNode.childNodes[3].style.display = "inline";
                  // console.log(completedUl.getElementsByTagName("li")[0]);
              }
          }
          editButton.onclick = editnSaveTask;
          deleteButton.onclick = deleteTask;
          checkBox.onchange = checkBoxTask;
          document.getElementsByName("taskcontent")[0].value = "Enter Task";
      }
      addTask.onclick = performTask;
      onkeypress = function (e) {
              if (e.keyCode === 13) {
                  performTask();
              }
          }
          //        window.onclose = function () {
          //            localStorage.setItem("name", "biksu");
          //        }
      window.onbeforeunload = closingCode;

      function closingCode() {
          // do something...
          var totalPage = window.document.body.getElementsByClassName("container")[0].innerHTML;
          localStorage.setItem("todoTask", totalPage);
      }
//      window.onload = function () {
//          var page = localStorage.getItem("todoTask"); 
//              window.document.body.getElementsByClassName("container")[0].innerHTML = page;
//          
//      }