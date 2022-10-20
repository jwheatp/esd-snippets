import express from "express"

const articles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus risus ut facilisis aliquet. Donec posuere, odio commodo tempor ullamcorper, arcu lacus iaculis tellus, ac consectetur mi nisl sit amet tortor. Morbi in rutrum purus. Cras ac laoreet metus, at vestibulum lorem. Proin eget iaculis sem. Maecenas urna ipsum, mattis condimentum enim ut, placerat tristique turpis. In in viverra orci. Nullam at efficitur felis, eu sodales orci. Duis sed molestie nibh. Quisque congue luctus ultricies. In eget libero dolor."
  },
  {
    id: 2,
    title: "Nam aliquet ligula at enim porttitor placerat.",
    content: "Nam aliquet ligula at enim porttitor placerat. Nullam interdum risus et nibh pretium porttitor. Quisque efficitur malesuada rhoncus. Nulla elementum auctor mauris, mollis varius sapien fermentum quis. Vestibulum sit amet tempus nibh, non rhoncus odio. Quisque mollis, orci aliquet tincidunt condimentum, tellus felis pellentesque magna, dapibus varius lorem nunc id purus. Ut in porta nunc, a tempor nisl. Morbi a semper purus, nec dignissim libero. Nam accumsan eget orci at mollis."
  },
]


const router = express.Router()

router.get('/', (req, res) => {
  res.render('blog/index', { articles })
})

router.get('/article/:id', (req, res) => {
  const id = req.params.id

  // récupérer le bon article
  // ancienne approche
  // let article;
  // for(let i = 0; i < articles.length; i++) {
  //   if(article[i].id == id) {
  //     article = article[i]
  //     break
  //   }
  // }

  const article = articles.find(a => a.id == id && a.year > 20)

  res.render('blog/article', { article })
})

export default router
