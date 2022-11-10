function TaskOne(){
  let ele1 = document.getElementById('Header');
  let ele2 = document.getElementById('Footer');
  [ele1.innerHTML,ele2.innerHTML] = [ele2.innerHTML,ele1.innerHTML];
}
TaskOne()

function TaskTwo(){
  let a = 10;
  let b = 5;
  let S = a*b;
  document.getElementById('main').innerHTML += `<span><br/>Area = ${S}</span>` 
}
TaskTwo()

function TaskThree(){
  let cookie = document.cookie;
  if(!(cookie === 'undefined')){
    let conf = confirm(`Wanna save cookie ${cookie}?`)
    if(conf){
      
      let confReload = confirm('Wanna reload page with existing cookies?');
      if(confReload){
        location.reload();
      }
      else{
        document.getElementById('formThree').style = 'display:none;';
      }
    }
    else{
      document.cookie = 'undefined';
      location.reload();
    }
  }
    
  document.getElementById('numssubmit').addEventListener('click', () => {
    let values = [];
    let nums = document.getElementById('nums').value;
    if(nums.length!=0){
      let splitedNums = nums.split(' ');
      splitedNums.forEach(element => {
        values.push(parseInt(element,10));
      });
      let min = Number.MAX_VALUE;
      let max = Number.MIN_VALUE;
      values.forEach(element => {
        min = Math.min(min,element);
        max = Math.max(max,element);
      })
      let result = [min,max];
      document.cookie = result;
    }else{
      alert('Введіть числа через кому')
    }
    
  })
}
TaskThree();
  
function TaskFourOnCheck(check){
  // alert('hello world');
  if(check.value == 'default'){
    let list = document.querySelectorAll('.main-content p');
    list.forEach(element => {
      element.style = 'font-weight:400';
    })
    window.localStorage.setItem('fontWeight','default')
  }else if (check.value == 'bold'){
    let list = document.querySelectorAll('.main-content p');
    list.forEach(element => {
      element.style = 'font-weight:600';
    })
    window.localStorage.setItem('fontWeight','bold')
  }else if(check.value == 'extra-bold'){
    let list = document.querySelectorAll('.main-content p');
    list.forEach(element => {
      element.style = 'font-weight:1000';
    })
    window.localStorage.setItem('fontWeight','extra bold')
  }
}
function TaskFour(){
  let localStorage = window.localStorage;
  if(localStorage.getItem('fontWeight') == 'default'){
    let list = document.querySelectorAll('.main-content p');
    list.forEach(element => {
      element.style = 'font-weight:400';
    })
    document.getElementById('default').checked = true;
  }else if(localStorage.getItem('fontWeight') == 'bold'){
    let list = document.querySelectorAll('.main-content p');
    list.forEach(element => {
      element.style = 'font-weight:600';
    })
    document.getElementById('bold').checked = true;
  }else if(localStorage.getItem('fontWeight') == 'extra bold'){
    let list = document.querySelectorAll('.main-content p');
    list.forEach(element => {
      element.style = 'font-weight:1000';
    })
    document.getElementById('extra-bold').checked = true;
  }
}
TaskFour()