function colourMix(rgb_colour1, rgb_colour2){
    if (rgb_colour1 === "red" && rgb_colour2 === "blue"){
        return "fuchsia";
    }
    if (rgb_colour1 === "blue" && rgb_colour2 === "red"){
        return "fuchsia";
    }
    if (rgb_colour1 === "red" && rgb_colour2 === "green"){
        return "yellow";
    }
    if (rgb_colour1 === "green" && rgb_colour2 === "red"){
        return "yellow";
    }
    if (rgb_colour1 === "green" && rgb_colour2 === "blue"){
        return "aqua";
    }
    if (rgb_colour1 === "blue" && rgb_colour2 === "green"){
        return "aqua";
    }
    if (rgb_colour1 === "red" && rgb_colour2 === "red"){
        return "red";
    }
    if (rgb_colour1 === "blue" && rgb_colour2 === "blue"){
        return "blue";
    }
    if (rgb_colour1 === "green" && rgb_colour2 === "green"){
        return "green";
    }
    return "Error";
}

function largestProduct(val1, val2, val3){
    if (val1 < val2) {
        if (val1 < val3) {
            return val2 * val3;
        }
    }

    if (val2 < val1) {
        if (val2 < val3) {
            return val1 * val3;
        }
    }

    if (val3 < val1) {
        if (val3 < val2) {
            return val1 * val2;
        }
    }

    return val1 * val2;
}

function dayOfTheWeek(day_num){
    if (day_num === 1) {
        return "Sunday";
    }
    if (day_num === 2) {
        return "Monday";
    }
    if (day_num === 3) {
        return "Tuesday";
    }
    if (day_num === 4) {
        return "Wednesday";
    }
    if (day_num === 5) {
        return "Thursday";
    }
    if (day_num === 6) {
        return "Friday";
    }
    if (day_num === 7) {
        return "Saturday";
    }
    return "Error";
}

function payRaise(status, years, salary){
    if (status === 'F') {
        if (years >= 10) {
            return salary + (salary * 0.05);
        }
        if (years < 4) {
            return salary + (salary * 0.015);
        }
    }

    if (status === 'P') {
        if (years > 10) {
            return salary + (salary * 0.03);
        }
        if (years < 4) {
            return salary + (salary * 0.01);
        }
    }

    return salary + (salary * 0.02);
}

function isLeap(year){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export {colourMix, largestProduct, dayOfTheWeek, payRaise, isLeap}