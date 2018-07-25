let categories = ["Комедия", "Боевик", "Фантастика", "Драма", "Приключение"];

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy = date.getFullYear();
  return dd + '.' + mm + '.' + yy;
}

class Comment {
  constructor (text, author, stars) {
    this.date = formatDate( new Date() );
    this.text = text;
    this.author = author;
    this.stars = stars;
  }
}

// возвращает индекс в массиве категорий, соответствующий строке string
function numberOfCategory(string) {
  let len = categories.length;
  let flag = false, i;
  for (i = 0; i < len; i++) {
    if (categories[i] == string) {
      flag = true;
      break;
    }
  }
  if(flag) {  return i; }
  console.log("Ошибка. Категории " + string + " в массиве категорий нет.");
  return -1;
}

class Film {
  
  constructor(name, category, comment, description) {
    this.name = name; // название фильма

    // индекс в массиве категорий, указывающий на название категории
    this.category = numberOfCategory(category); 
    if (this.category == -1) {
      this.category = "Без категории";
    }
    this.comments = [];
    if(comment) {
      this.comments.push(comment); 
    }
    this.description = description;
    this.rating = 0;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  averageRating() {
    let sum = 0, counter = 0;    
    for (const i of this.comments) {
      sum += i.stars;
      counter++;
    }
    if(sum == 0) {
      return 0;
    }
    return (sum / counter).toFixed(1);
  }

  getcategory() {
    return categories[this.category];
  }
}