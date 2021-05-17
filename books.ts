export interface Book{
    id:string;
    title:string;
    author:string;
}

export class BookMap extends Map<string,Book>{
    constructor(){
        super();
        this.set("1", {
            id: "1",
            title: "Harry Potter und der Stein der Weisen",
            author: "Joanne K. Rowling",
          });
          this.set("2", {
            id: "2",
            title: "Clean Code",
            author: "Robert C. Martin",
          });
          this.set("3", {
            id: "3",
            title: "Der Herr der Ringe",
            author: "J. R. R. Tolkien",
          });
    }
}

export const books =new BookMap();