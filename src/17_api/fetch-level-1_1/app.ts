type list = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

fetch('https://picsum.photos/v2/list')
.then((response: Response) => {
  if (!response.ok) {
    console.log('Broken Link')
  }
  return response.json()
})
.then((list: list[] ) => {
  list.forEach(object => {
    console.log(object.url)
  });
})
.catch((error: Error) => {
  console.log(error)
})
.finally(() => {
    console.log(':D')
})