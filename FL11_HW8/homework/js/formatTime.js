function formatTime(number){
    let day = Math.floor(number / 1440)
    let hours = Math.floor(number % 1440 / 60)
    let minutes = Math.floor(number % 1440 % 60)
    return day + ' day(s)' + hours + ' hour(s)' + minutes + ' minute(s)';
}

formatTime(3601);
