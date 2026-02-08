const books=[
    {name:"book 1", genre:"hsitory"},
    {name:"book 2", genre:"hsitory"},
    {name:"book 3", genre:"fiction"},
    {name:"book 4", genre:"hsitory"},
    {name:"book 5", genre:"fiction"},
    {name:"book 6", genre:"story"},
    {name:"book 7", genre:"hsitory"},
    {name:"book 8", genre:"fiction"},
    {name:"book 9", genre:"hsitory"},
    {name:"book 10", genre:"hsitory"}
];

 const library1 =books.filter( (bk) => bk.genre==="fiction")  //this will return all the books that have the gnere = fiction

 console.log(library1);
 