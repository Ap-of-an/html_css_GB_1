var mySwitch = document.getElementsByClassName("switch");
var slider = document.getElementsByClassName("slider");
function ch_bg(obj) { /* вызывается при нажатии на переключатель слайдера */
  if(obj.classList['value'] == "switch active-switch"){
    return;
  }
  let i;
  let num_curent =  +obj.id[obj.id.length-1];
  let flag = false;
  if (num_curent == 0 || num_curent == 1 ||num_curent == 2) {
    for(i = 0; i < 3; i++) { /* цикл для первого слайдера */
      if(mySwitch[i].classList['value'] == "switch active-switch"){
        mySwitch[i].classList.remove("active-switch");
        break;
      }
    }
    flag = true;
  }
  else {
    for(i = 3; i < 6; i++) { /* цикл для второго слайдера */
      if(mySwitch[i].classList['value'] == "switch active-switch"){
        mySwitch[i].classList.remove("active-switch");
        break;
      }
    }
  }
  obj.classList.add("active-switch");
  
  let num_previous = +mySwitch[i].id[mySwitch[i].id.length-1];
  let offset = num_curent * -1366;
  if (flag) {
    slider[0].style.backgroundPosition = offset + "px" + " 0";
  }
  else {
    /* так как порядковые номера у нас увеличились на 3,
     то нужно отнять(а при текущей реализации прибавть) 3*1768 */
    offset += 3*1366; 
    slider[1].style.backgroundPosition = offset + "px" + " 0";
  }
  
  /* анимация текста */
  let crnt_text = document.getElementById("prew_"+num_curent);
  let prvs_text = document.getElementById("prew_"+num_previous);
  prvs_text.style.visibility = "hidden";
  prvs_text.style.opacity = "0";
  crnt_text.style.visibility = "visible";
  crnt_text.style.opacity = "1";
}

var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
 
function dealWithScrolling(e) {
  let scrolling = document.getElementById("nav-sticky");
  if (window.pageYOffset > 600) { scrolling.style.display = "block"; }
  else {  scrolling.style.display = "none"; }
 
  if (window.pageYOffset > 740) { scrolling.style.opacity = "1"; } 
  else { scrolling.style.opacity = "0"; }
}

function active_fn_tags(obj) {
  if (obj.classList['value'] == "active-fn-tag") {
    return;
  }
  let temp1 = document.getElementById("for-ftrd"),
      temp2 = document.getElementById("for-new");
  if (obj.id == temp1.id) {
    temp2.classList.remove("active-fn-tag");
    document.getElementsByClassName("featured")[0].style.display = "block";
    document.getElementsByClassName("new")[0].style.display = "none";
  }
  else {
    temp1.classList.remove("active-fn-tag");
    document.getElementsByClassName("new")[0].style.display = "block";
    document.getElementsByClassName("featured")[0].style.display = "none";
  }
  obj.classList.add("active-fn-tag");
}
