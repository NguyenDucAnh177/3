function getCurrentDate(){
    var option ={month:'long', day:'numeric', year:'numeric'}
    var now = new Date().toLocaleDateString("vi-VN", option);
    return now;
}



exports.getCurrentDate = getCurrentDate;