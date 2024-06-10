function greetUser(): void {
    try {
        const username: string | null = window.prompt("Write your Username");
        if (!username) {
            throw new Error("Non written name");
        }
        console.log(`Hi, ${username} welcome!`);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log("An unknown error occurred");
        }
    }
}

greetUser();
