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
    if(confirm(`Wanna save cookie ${cookie}?`)){
      if(confirm('Wanna reload page with existing cookies?')){
        location.reload();
      }
      else{
        document.getElementById('formThree').style = "display:none;";
      }
    } 
    else{
      document.cookie = undefined;
      location.reload();
    }
  }
    
  document.getElementById('numssubmit').addEventListener("click", (evt) => {
    evt.preventDefault();
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
    }
    else{
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
    document.getElementById('extra-bold ').checked = true;
  }
}
TaskFour()

let usedBlock = "";
let textInBlock = "";
function TaskFive(){
  const img1 = document.querySelectorAll('.img5');

  img1.forEach(ele => {
    const form = ele.closest('div').querySelector('.hiddenform');

    ele.addEventListener('mouseover', () => {
      ele.style.display = "none";
      form.style.display = "block";
    });

    const sbmtbtn = ele.closest('div').querySelector('.submit');

    sbmtbtn.addEventListener("click", () => {
      form.style.display = "none";
      ele.style.display = "block"; 

      usedBlock += ele.closest("div").classList[0].toString() + "\n";
      let area = ele.closest("div").querySelector(".input");
      textInBlock += area.value + "\n";
      area.value = "";
      localStorage.setItem("listText",textInBlock);
      localStorage.setItem("lastBlock", usedBlock);
    })
  });
  window.addEventListener("load", function () {
    if (localStorage.getItem("listText")) {
        let list = localStorage.getItem("listText").split("\n");
        list.pop();
        let block = localStorage.getItem("lastBlock").split("\n");
        block.pop();
        for(let i = 0; i < block.length; i++){
          let text = "<table>";
          list[i].split("\n").forEach((element) => {
              text += `<tr><td>${element}</td></tr>`;
          });
          text += "</table>";
          document.querySelector(`.${block[i]}`).innerHTML += text;
        }
        localStorage.setItem("listText", "");
        localStorage.setItem("lastBlock", "");
    }
  });
}
TaskFive();