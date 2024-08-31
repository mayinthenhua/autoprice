
function displayInvalidMessage(isdisplay){
    
    if(isdisplay){

        $('#invalid-value').removeClass('d-none');
    }else{
        $('#invalid-value').addClass('d-none');
    }
}
function setRangeValueMessage(min,max,value){
    if(value<min){
        $('#invalid-message').html(`Vui lòng giảm số lượng hoặc đơn giá. <br> Cần giảm khoảng ${formatNumber(min-value)}`);
        $('#total-range').html(`Giá trị tìm được khoảng: <i style='color:red;' class="bi bi-file-arrow-down-fill"></i>... <strong> ${formatNumber(min)} ... ${formatNumber(max)}</strong> <br> Lớn hơn giá trị mong muốn.`);
    }
    else if(value > max){
        $('#invalid-message').html(`Vui lòng tăng số lượng hoặc đơn giá. <br>Cần tăng khoảng ${formatNumber(value-max)}`);
        $('#total-range').html(`Giá trị tìm được khoảng: <strong> ${formatNumber(min)} ... ${formatNumber(max)}</strong>...<i style='color:red;' class="bi bi-file-arrow-down-fill"></i>  <br> Nhỏ hơn giá trị mong muốn.`);

    }
    else{
        $('#invalid-message').html('Vui lòng giảm tốc độ hoặc thay đổi giá trị khác cho phù hợp.');
        $('#total-range').html(`Giá trị tìm được khoảng: <strong> ${formatNumber(min)} ...<i style='color:red;' class="bi bi-file-arrow-down-fill"></i>... ${formatNumber(max)}</strong> `);
    }
}
function timeoutMsg(calculatedTotalCurrent){
    $('#invalid-message').html(`Thời gian tính quá lâu. Kết quả chỉ được tính tới:${formatNumber(calculatedTotalCurrent)} <br> Thử tăng tốc độ lên`);
}
function totalInvalidMsg(){
    $('#invalid-message').html(`Chưa cài đặt giá trị hóa đơn mong muốn.`);
}
