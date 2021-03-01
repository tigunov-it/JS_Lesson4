'use strict'

//ES6
class Post {
    constructor(autor, text, date) {
        this.autor = autor;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(autor, text, date, highlighted) {
        super(autor, text, date);
        this.highlighted = highlighted;
    }
}

const post1 = new Post("Vladimir", "С Новым годом", "31 декабря");
post1.edit("Спокойной ночи!");
console.log(post1);

const post2 = new AttachedPost("Dmitry", "Вы там держитесь", "01 января", true);
console.log(post2);