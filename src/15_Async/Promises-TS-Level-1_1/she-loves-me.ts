export const stringPromise = new Promise<string>((resolve, reject) => {
  const trueFalse = Math.random() > 0.5;
  if (trueFalse) {
    resolve("She loves me.");
  } else {
    reject("She loves me not");
  }
});

stringPromise
  .then((love) => {
    console.log(love);
  })
  .catch((notLove) => {
    console.log(notLove);
  })
  .finally(() => {
    console.log("Now I know what is going on”");
  });
