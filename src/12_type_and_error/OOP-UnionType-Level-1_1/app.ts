type Result = "success" | "error" | "pending";
let myResult: Result = "success";

function handleResult(result: Result): void {
    switch (result) {
        case "success":
            console.log("Operation was successful!");
            break;
        case "error":
            console.log("There was an error with the operation.");
            break;
        case "pending":
            console.log("The operation is still pending.");
            break;
        default:
            console.log("Unknown result.");
    }
}

handleResult(myResult);
handleResult('error');
handleResult('pending');
handleResult('');
