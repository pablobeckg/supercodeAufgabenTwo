type SuperBall = {
  element: HTMLElement;
  backgroundColor: string;
  textColor: string;
};

const createSuperBall = (id: string, bgColor: string, txtColor: string): void => {
  const element = document.getElementById(id);
  const title = document.querySelector("h1");
  if (element) {
    const superBall: SuperBall = {
      element: element,
      backgroundColor: bgColor,
      textColor: txtColor,
    };

    element.addEventListener("click", () => {
      document.body.style.backgroundColor = superBall.backgroundColor;
      if(title) {
        title.style.color = superBall.textColor;
      }
    });
  }
}

createSuperBall("superBall1", "purple", "yellow");
createSuperBall("superBall2", "green", "pink");
createSuperBall("superBall3", "orange", "cyan");
createSuperBall("superBall4", "magenta", "blue");
