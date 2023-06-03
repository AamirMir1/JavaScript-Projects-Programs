// ______________ Alarm App ______________

let AlarmBtn = document.getElementById('AlarmBtn')
let date = document.getElementById('Date');
let StopAlarm = document.getElementById('StopBtn')
function ringBell() {
    let alarmAudio = new Audio('./alarm.mp3');
    alarmAudio.play()
    StopAlarm.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Click')
        alarmAudio.pause()
    })
}

AlarmBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let alarmTime = new Date(date.value)
    let nowTime = new Date()
    let test = alarmTime - nowTime
    if (test >= 0) {
        setTimeout(() => {
            ringBell()
            console.log("Your alarm is set")
        }, test);
    }
    console.log(test)

})