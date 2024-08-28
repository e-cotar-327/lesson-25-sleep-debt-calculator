const getSleepHours = (day) => {
    /*if (day === 'monday') {
        return 8;
      } else if (day === 'tuesday') {
        return 6;
      } else if (day === 'wednesday') {
        return 8;
      } else if (day === 'thursday') {
        return 6;
      } else if (day === 'friday') {
        return 8;
      } else if (day === 'saturday') {
        return 10;
      } else if (day === 'sunday') {
        return 4;
      } else {
        console.log('Something wrong');
      }*/
     day = day.toLowerCase();
    switch (day) {
        case "monday":
            return 8
            break;
        case "tuesday":
            return 7
            break;
        case "wednesday":
            return 8
            break;
        case "thursday":
            return 7
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 9
            break;
        case 'sunday':
            return 8
            break;
        default:
            return "Something wrong!"
    }
};
console.log(getSleepHours('wednesday'));

const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log(`You've got the perfect amount of sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
        //console.log(`You've got more sleep than needed.`);
        console.log(`You've got ${actualSleepHours - idealSleepHours} more hours this week.`);
    } else if (actualSleepHours < idealSleepHours) {
        //console.log(`You should get some rest.`);
        console.log(`You should get some rest, because you've slept ${idealSleepHours - actualSleepHours} hours less than you should have this week.`);
    } else {
        console.log('Something is wrong, check your code.');
    }
}
calculateSleepDebt();