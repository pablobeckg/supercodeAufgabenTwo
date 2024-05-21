function showURL(): void {
    const currentURL: string = window.location.href;
    const urlDisplayElement: HTMLElement | null = document.getElementById('url-display');
    
    if (urlDisplayElement) {
      urlDisplayElement.textContent = currentURL;
    }
  }
  
  const showURLButton: HTMLElement | null = document.getElementById('show-url-button');
  if (showURLButton) {
    showURLButton.addEventListener('click', showURL);
  }
  