// работа с aside -- боковым меню

// заполняем боковое меню категориями
let nav_ul = document.querySelector("nav ul");
for (const m of categories) {
  let li = document.createElement("li");
  li.classList.add("category");
  let a = document.createElement("a");
  a.setAttribute("href", "#"), a.classList.add("name-category");
  a.innerText = m;
  li.appendChild(a);
  nav_ul.appendChild(li)
}

let g_actual_cat = categories[2]; // название открытой категории фильмов
// первоначально будет открыта категория фантастики  
let curent_category = document.getElementsByClassName("category")[2];
curent_category.classList.add("active-category");
// отрисовываем фильмы из первоначальной категории
showFilmsByCategory(categories[2]);

let chosen_category; // категория по которой кликаем
let all_li_ByCategories = document.getElementsByClassName("category");
for (let ind = 0; ind < all_li_ByCategories.length; ind++) {
  all_li_ByCategories[ind].addEventListener("click", function () {
    changeNavItemStyle(all_li_ByCategories[ind]);
    showFilmsByCategory(categories[ind]);
    g_actual_cat = categories[ind];
    feedbackOnClick();
    return false;
  });
}
// вызываем функцию так же здесь, чтобы можно было оставлять отзывы
// до перехода по категориям
feedbackOnClick();


function feedbackOnClick() {
  // работа с кнопкой "добавить отзыв"
  let btn_feedback = document.getElementsByClassName("btn-feedback");
  let collec_films = document.getElementsByClassName("film");

  for (let i = 0; i < collec_films.length; i++) {
    btn_feedback[i].addEventListener("click", function () {
    
      
      collec_films.item(i).querySelector("#add-comment").classList.toggle("display-none");
      onClickSubmit(collec_films.item(i), i);
    });
  }
}

function changeNavItemStyle(item) {
  chosen_category = item;
  if (chosen_category == curent_category) {
    return false;
  }
  curent_category.classList.remove("active-category");
  curent_category = chosen_category;
  chosen_category.classList.add("active-category");
}

function showFilmsByCategory(str_category) {
  clearMain();

  let filmsByCat = ALLFilms.getFilmByCat(str_category);
  let main = document.querySelector("main");
  for (const key of filmsByCat) {
    main.appendChild(createSectionFilm(key));
  }
}

function onClickSubmit(film, indexInCollec) {
  
  let btn_sub = film.querySelector("#btn-addComment"); 
  btn_sub.onclick = function() {    
    let film_obj = ALLFilms.getFilmByCat(g_actual_cat)[indexInCollec];
    let text = film.querySelector("#text-comment").value;
    let name = film.querySelector("#name").value;
    let stars = +film.querySelector("#flying").value;
    let comment = new Comment(text, name, stars);
    // если комментарии уже были, очищаем блок с комментариями
    if (film_obj.comments.length) {
      film.querySelector(".comments > div:last-child").innerHTML = "";
    }
    else { // если нет, то удаляем надпись "будьте первым"
      film.querySelector(".no-com").style.display = "none";
    }
    
    ALLFilms.getFilmByCat(g_actual_cat)[indexInCollec].addComment(comment);
    
    // очищаем форму
    film.querySelector("#text-comment").value = "";
    film.querySelector("#name").value = "";
    film.querySelector("output").value = 2.5;
    film.querySelector("#flying").value = "";
    // скрываем форму
    film.querySelector("#add-comment").classList.toggle("display-none");
    // отображаем дополненный блок комментариев
    film.querySelector(".comments").appendChild(createDivComment(film_obj));
    // отображаем изменённый рейтинг фильма
    film.querySelector(".stars").innerText = film_obj.averageRating();
    return false;
  }
}

function createSectionFilm(film) {
  let f = document.createElement("section");
  f.classList.add("film");

  // заполняю секцию простой вставкой html-кода, ибо времени мало осталось(())
  f.innerHTML = '<div class="name_stars">\
    <h2>Film name</h2>\
    <div>Рейтинг фильма: <span class="stars">4.5</span></div>\
  </div>\
  <div class="poster_description">\
    <div class="poster">\
      <img src="img/film-img.jpg" alt="Постер фильма">\
    </div>\
    <div class="description">\
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibus quae veritatis hic rerum fugit laboriosam ducimus repellendus sunt inventore quo blanditiis vero deserunt unde velit quod dolorem sit doloremque. Assumenda aliquid qui dolorem laborum magni officiis sunt, mollitia doloribus tempora enim, adipisci ipsum! Enim provident odio modi consectetur, rerum illum porro fuga deleniti obcaecati esse alias accusamus id minus consequuntur sit iusto impedit quia quaerat dolore ea? Dignissimos, voluptatum repellat nesciunt aperiam debitis laboriosam harum ex accusantium? Obcaecati a sint deleniti cumque possimus in, sed recusandae nobis dicta commodi facilis, hic est!</p>\
    </div>\
  </div>\
  <div class="comments">\
    <div class="comment_button">\
      <h3>Отзывы: <span class="no-com"><br>Ещё никто не оценил этот фильм. Будьте первым! =></span></h3>\
      <div class="btn-feedback">добавить отзыв</div>\
    </div>\
    <form id="add-comment"  class="display-none" action="#" method="post">\
      <label for="name">Введите ваше имя: \
        <input id="name" maxlength="20" type="text" placeholder="Иван" autocomplete="off" required>\
      </label>\
      <label for="count-stars">Оцените фильм по 5-бальной шкале:\
        <div>\
          <input oninput="level.value = flevel.valueAsNumber" name="flevel" id="flying" type="range" min="0" max="5" step="0.1" required>\
          <output for="flying" name="level">2.5</output>\
        </div>\
      </label>\
      <label for="text-comment">Ваш комментарий <span class="maxLenth-text">(максмум 300 символов)</span>:</label>\
      <textarea id="text-comment" maxlength="300" autocomplete="off" required></textarea>\
      <div id="btn-addComment">Отправить</div>\
    </form>\
  </div>';

  // заполняю нужные поля данными из объекта film
  f.querySelector(".name_stars h2").innerText = film.name;
  f.querySelector(".stars").innerText = film.averageRating();
  f.querySelector(".description p").innerText = film.description;
  if (film.comments.length == 0) {
    f.querySelector(".no-com").style.display = "block";
  }
  // формируем блок с комментариями
  let div_Comments = createDivComment(film);
  // добавляем его к html-коду секции фильма
  f.querySelector(".comments").appendChild(div_Comments);

  return f;
}

function createDivComment(film) {
    let temp = document.createElement("div");
    for (const it of film.comments) {
      let comment = document.createElement("div");
      comment.classList.add("comment"); {
        comment.innerHTML = '\
      <div class="date_author">\
        <p class="author">Автор: <span class="author-name">author</span></p>\
        <p class="comment-date">Дата отзыва: <span class="date">01-01-2000</span></p>\
      </div>\
      <p class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium officiis corporis cumque sit ipsam animi aut a, ea in odit earum reiciendis, repudiandae vitae ratione enim! Nemo quisquam iure velit ut consequuntur consectetur, sint doloremque dignissimos recusandae ullam. Provident illo eligendi, ex incidunt commodi aspernatur quam consequuntur aut porro.</p>\
      <p class="author-stars">Оценка фильма: <span class="author-stars-amount">3.5</span></p>\
      ';
      }
      comment.querySelector(".author-name").innerText = it.author;
      comment.querySelector(".date").innerText = it.date;
      comment.querySelector(".comment-text").innerText = it.text;
      comment.querySelector(".author-stars-amount").innerText = it.stars;
      
      temp.insertAdjacentElement("afterBegin", comment);
    }
    return temp;
}

function clearMain() {
  document.querySelector("main").innerHTML = "";
}
