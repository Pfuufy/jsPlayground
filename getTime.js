
function getTime() {
    const now = new Date();
    return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
}

console.log(getTime());