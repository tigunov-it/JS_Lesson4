'use strict'
//ES5
function Post(autor, text, date) {
    this.autor = autor;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(autor, text, date, highlighted) {
    Post.call(this, autor, text, date);
    this.highlighted = highlighted;

}

const post1 = new Post("Vladimir", "С Новым годом", "31 декабря");
post1.edit("Спокойной ночи!");
console.log(post1);

const post2 = new AttachedPost("Dmitry", "Вы там держитесь", "01 января", true);
console.log(post2);