document.addEventListener("DOMContentLoaded",()=>{
const list = document.querySelector('ul');
const close = document.getElementsByClassName("close");
const savebutton = document.getElementById("button-36");
const filter = document.getElementById('todo__filter')

const doneTasks = document.getElementsByClassName('_done');
const notDoneTasks = document.getElementsByClassName('_notDone');
const allTasks = document.getElementsByClassName('goal');

//localStorage.clear();
load();


//addtask---------------------
  savebutton.addEventListener('click',()=> {
    let li = document.createElement("li");
    let inputValue = document.getElementById("inputgoal").value;
    li.className ="goal _notDone";
    let t = document.createTextNode(inputValue);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("goals").appendChild(li);    
      list.append(li)
      li.appendChild(t);
    }
    document.getElementById("inputgoal").value = "";
    //delete task-----------------
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.parentNode.removeChild(div);
      }
    }
  //delete task-----------------
    update();
		save();
  })
 
 //addtask---------------------

 //checker---------------------
 list.addEventListener('click', event => {
  const element = event.target.closest('li');

  if (event.target.closest('#deleting')) {
    event.target.parentElement.remove();
  }
  if (element) {
      element.classList.toggle('_done');
      element.classList.toggle('_notDone');
    }


  update();

  save();
});
 //checker---------------------

//filter---------------------
 filter.addEventListener('click', event => {
  event.preventDefault();

  let currentFilter = event.target.closest('a');

  if (currentFilter){
    if (currentFilter.getAttribute('id') === 'done')
      display(doneTasks, notDoneTasks);

    if (currentFilter.getAttribute('id') === 'notDone')
      display(notDoneTasks, doneTasks);

    if (currentFilter.getAttribute('id') === 'all'){
      display(doneTasks, notDoneTasks, true);
    }
  }
  save();
});
//filter---------------------

 //localstorage--------------------------
  function save(){
    localStorage.setItem('list', list.innerHTML);
  }

  function load(){
    list.innerHTML = localStorage.getItem('list');
    update();
  }

  function update(){
		document.querySelector('#done').firstElementChild.innerText = doneTasks.length;
		document.querySelector('#notDone').firstElementChild.innerText = notDoneTasks.length;
		document.querySelector('#all').firstElementChild.innerText = allTasks.length;
	}
//localstorage--------------------------

//filter_display---------------------
  function display(show, hide, isDisplayAll = false){
		if (!isDisplayAll){
			for(item of show){
				item.style.visibility = 'visible';
				item.style.position = 'relative';
			}
			for(item of hide){
				item.style.visibility = 'hidden';
				item.style.position = 'absolute';
			}
		}
		else{
			for(item of show){
				item.style.visibility = 'visible';
				item.style.position = 'relative';
			}
			for(item of hide){
				item.style.visibility = 'visible';
				item.style.position = 'relative';
			}
		}
	}
//filter_display---------------------

})