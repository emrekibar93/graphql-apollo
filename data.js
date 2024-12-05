const authors = [{
    id:"1",
    name: "Albert",
    surname:"Camus",
    age:50,

},
{
    id:"2",
    name: "Emre",
    surname:"Kibar",
    age:30,

}

]

const books = [{
    id: "1",
    title: "Yabancı",
    author_id: "1",
    score: 15.21,
    isPublished: true
},{
    id: "2",
    title: "Deneme Kitap",
    author_id: "2",
    score: 9.21,
    isPublished: true
},
{
    id: "3",
    title: "Yabancı 2",
    author_id: "1",
    score: 9.87,
    isPublished: true
}
]

module.exports = {authors,books}