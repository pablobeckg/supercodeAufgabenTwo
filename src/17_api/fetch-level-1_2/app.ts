// type eliseo = {
//   postId: number;
//   id: number;
//   name: string;
//   email: string,
//   body: string,
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// .then((response: Response) => {
//   if(!response) {
//     console.log('Go to listen some Jazz')
//   }
//   return response.json()
// })
// .then((comments: eliseo[]) => {
//   if (!comments || !comments.length) {
//     throw new Error('No coments available');
//   }
//   comments.forEach(comment => {
//     console.log(comment.email)
//   });
// })
// .catch((error) => {
//   console.error(error)
// })
// .finally(() => {
//   console.log('Hola')
// })

type posts = {
  userId: number;
  id: number;
  title: string;
  body: string,
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response: Response) => {
  if(!response) {
    console.log('Something went wrong')
  }
  return response.json()
})
.then((posts: posts[]) => {
  if (!posts || !posts.length) {
    throw new Error('No posts available');
  }
  console.log(posts)
  return posts
})
.then((posts) => {
  console.log(Math.max(...posts.map(post => post.id)));
  const shortestTitlePost = posts.sort((a, b) => a.title.length - b.title.length)[0];
  console.log(shortestTitlePost.title);

  const longestBody = posts.reduce((longest, post) => {
    return post.body.length > longest.length ? post.body : longest;
  }, posts[0].body);
  console.log(longestBody);
})
.catch((error: Error) => {
  console.log(error)
})
.finally(() => {
  console.log('Hi')
})
