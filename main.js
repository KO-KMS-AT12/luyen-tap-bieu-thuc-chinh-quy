//Bài 1: Kiểm tra chuỗi đưa vào có đúng dạng dd/mm/yyyy
function bai1(date) {
    let regexp = /^(?:(?:31(\/|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (regexp.test(date)) console.log("Ngay thang dung dinh dang dd/mm/yyyy : " + date);
    else console.log("Ngay thang khong dung dinh dang");
}

bai1('01/04/2019');
bai1('09-04-2019');
bai1('09042019');

// Bài 2: Đếm số từ trong một chuỗi

function bai2(str) {
    console.log("So tu trong chuoi '" + str + "' la " + str.split(/\s+\b/).length);
}

bai2('hello ... world !!! I am Peter');

// Bài 3: Đếm số nguyên âm/phụ âm trong một chuỗi
function bai3(str) {
    let demNguyenAm = 0;
    let demPhuAm = 0;
    let newStr = str.split('');
    for (let i of newStr) {
        if (/[ueoai]/.test(i)) {
            demNguyenAm++;
        } else if (/[^ueoai\W]/.test(i)) {
            demPhuAm++;
        }
    }
    console.log(demNguyenAm, demPhuAm);
}

bai3('hello ... world !!! I am Peter');

// Bài 4: Kiểm tra mã số bảo mật hợp lệ
function bai4(str) {
    let regexp = /^(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    if (regexp.test(str)) {
        console.log('Ma bao mat hop le');
    } else {
        console.log('Ma bao mat khong hop le')
    }
}

bai4('NMT03nmt');
bai4('1a4A5');
bai4('11111');
bai4('1gaga4f5');