const authors = [{
    id:"1",
    name: "Albert",
    surname:"Camus",
    age:50,
    books : [
        {
            id:1,
            title:"Test Title",
            score:9,
            isPublished: true

        },
        {
            id:2,
            title:"Test 2"

        }
    ]
}]

const books = [{
    id: "1",
    title: "Yabancı",
    author: authors[0],
    score: 15.21,
    isPublished: true
},{
    id: "2",
    title: "Deneme Kitap",
    author: authors[0],
    score: 9.21,
    isPublished: true
}]

module.exports = {authors,books}