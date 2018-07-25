class Films {

  constructor() {
    for (const iterator of categories) {
      this[iterator] = [];
    }
  }

  addFilm(film) {
    this[categories[film.category]].push(film);
  }
  // возвращает массив фильмов категории str_category
  getFilmByCat(str_category) {
    return this[str_category];
  }
}

//создадим несколько фильмов из разных категорий и добавим им комментариев
let film0 = new Film(
  "Орда",
  "Фантастика",
  new Comment("Классный фильм! Всем рекомендую к просмотру", "Инокентий", 4),
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibus quae veritatis hic rerum fugit laboriosam ducimus repellendus sunt inventore quo blanditiis vero deserunt unde velit quod dolorem sit doloremque. Assumenda aliquid qui dolorem laborum magni officiis sunt, mollitia doloribus tempora enim, adipisci ipsum! Enim provident odio modi consectetur, rerum illum porro fuga deleniti obcaecati esse alias accusamus id minus consequuntur sit iusto impedit quia quaerat dolore ea? Dignissimos, voluptatum repellat nesciunt aperiam debitis laboriosam harum ex accusantium? Obcaecati a sint deleniti cumque possimus in, sed recusandae nobis dicta commodi facilis, hic est!");

film0.addComment(new Comment("Очень плохой фильм!", "Майя", 3.5));
film0.addComment(new Comment("Неплохо, очень неплохо..", "Хиру", 5));
film0.addComment(new Comment("Игра актёров страдает, малобюджетный фильмец", "Ольга", 4.1));

let film1 = new Film(
  "Приключения капитана Нэмо",
  "Приключение",
  "",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibus quae veritatis hic rerum fugit laboriosam ducimus repellendus sunt inventore quo blanditiis vero deserunt unde velit quod dolorem sit doloremque. Assumenda aliquid qui dolorem laborum magni officiis sunt, mollitia doloribus tempora enim, adipisci ipsum! Enim provident odio modi consectetur, rerum illum porro fuga deleniti obcaecati esse alias accusamus id minus consequuntur sit iusto impedit quia quaerat dolore ea? Dignissimos, voluptatum repellat nesciunt aperiam debitis laboriosam harum ex accusantium? Obcaecati a sint deleniti cumque possimus in, sed recusandae nobis dicta commodi facilis, hic est!");

film1.addComment(new Comment("Неплохо, очень неплохо..", "Хиру", 5));
film1.addComment(new Comment("Игра актёров страдает, малобюджетный фильмец", "Ольга", 4.1));

let film2 = new Film(
  "Богатырь",
  "Фантастика",
  "",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibus quae veritatis hic rerum fugit laboriosam ducimus repellendus sunt inventore quo blanditiis vero deserunt unde velit quod dolorem sit doloremque. Assumenda aliquid qui dolorem laborum magni officiis sunt, mollitia doloribus tempora enim, adipisci ipsum! Enim provident odio modi consectetur, rerum illum porro fuga deleniti obcaecati esse alias accusamus id minus consequuntur sit iusto impedit quia quaerat dolore ea? Dignissimos, voluptatum repellat nesciunt aperiam debitis laboriosam harum ex accusantium? Obcaecati a sint deleniti cumque possimus in, sed recusandae nobis dicta commodi facilis, hic est!");

let film3 = new Film(
  "Конь по кличке Августин",
  "Комедия",
  new Comment("Классный фильм! Всем рекомендую к просмотру", "Инокентий", 4),
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibus quae veritatis hic rerum fugit laboriosam ducimus repellendus sunt inventore quo blanditiis vero deserunt unde velit quod dolorem sit doloremque. Assumenda aliquid qui dolorem laborum magni officiis sunt, mollitia doloribus tempora enim, adipisci ipsum! Enim provident odio modi consectetur, rerum illum porro fuga deleniti obcaecati esse alias accusamus id minus consequuntur sit iusto impedit quia quaerat dolore ea? Dignissimos, voluptatum repellat nesciunt aperiam debitis laboriosam harum ex accusantium? Obcaecati a sint deleniti cumque possimus in, sed recusandae nobis dicta commodi facilis, hic est!");

film3.addComment(new Comment("Очень плохой фильм!", "Майя", 2.5));
film3.addComment(new Comment("Неплохо, очень неплохо..", "Хиру", 5));
film3.addComment(new Comment("Игра актёров страдает, малобюджетный фильмец", "Ольга", 1.1));

let film4 = new Film(
  "Забастовка",
  "Боевик",
  new Comment("Классный фильм! Всем рекомендую к просмотру", "Инокентий", 4),
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibufuga deleniti obcaecati esse alias accusamus id minus consequuntur siperiam debitis laboriosam harum ex accusantium? Obcaecati a sint deleniti cumque possimus in, sed recusandae nobis dicta commodi facilis, hic est!");

film4.addComment(new Comment("Очень плохой фильм!", "Майя", 3.5));
film4.addComment(new Comment("Игра актёров страдает, малобюджетный фильмец", "Ольга", 4.1));

let film5 = new Film(
  "Восстание",
  "Драма",
  new Comment("Классный фильм! Всем рекомендую к просмотру", "Инокентий", 4),
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, iste at error saepe temporibus quas libero voluptatibus quae veritatis hic rerum fugit laboriosam ducimus repellendus sunt inventore quo blanditiis vero deserunt unde velit quod dolorem sit doloremque. Assumenda aliquid qui dolorem laborum magni officiis sunt, mollitia doloribus tempora enim, adipisci ipsum! Enim provident odio modi consectetur, rerum illum porro fuga deleniti obcaecati esse alias accusamus id minus co");

film5.addComment(new Comment("Неплохо, очень неплохо..", "Хиру", 5));
film5.addComment(new Comment("Игра актёров страдает, малобюджетный фильмец", "Ольга", 4.1));

// создадим базу фильмов - объект, внутри которого будут находиться все фильмы, со всеми данными о них и комментариями
let ALLFilms = new Films;
// добавим в базу созданные ранее фильмы
ALLFilms.addFilm(film0);
ALLFilms.addFilm(film1);
ALLFilms.addFilm(film2);
ALLFilms.addFilm(film3);
ALLFilms.addFilm(film4);
ALLFilms.addFilm(film5);