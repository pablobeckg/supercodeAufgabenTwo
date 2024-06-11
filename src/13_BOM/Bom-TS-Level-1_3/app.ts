function displayBrowserInfo(): void {
    const browserName = window.navigator.userAgent;
    const OSArchitecture = window.navigator.platform;
    const browserVersion = window.navigator.appVersion;
    const windowResolution = `${window.screen.width} x ${window.screen.height}`;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;
    const colorDepth = window.screen.colorDepth;
    const pixelDepth = window.screen.pixelDepth;

    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = `
        <h2>Browser- und Systeminformationen</h2>
        <p><strong>Browsername:</strong> ${browserName}</p>
        <p><strong>Betriebssystem-Architektur:</strong> ${OSArchitecture}</p>
        <p><strong>Browser-Version:</strong> ${browserVersion}</p>
        <p><strong>Window Auflösung:</strong> ${windowResolution}</p>
        <p><strong>Innenhöhe des Dokuments:</strong> ${innerHeight}</p>
        <p><strong>Innenbreite des Dokuments:</strong> ${innerWidth}</p>
        <p><strong>Color Depth:</strong> ${colorDepth}</p>
        <p><strong>Pixel Depth:</strong> ${pixelDepth}</p>
    `;
    document.body.appendChild(infoDiv);
}

(document.querySelector('button') as HTMLButtonElement).addEventListener('click', () => {
    displayBrowserInfo();
})
