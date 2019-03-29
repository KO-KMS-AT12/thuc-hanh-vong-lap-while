function bai1() {
    var number = parseInt(prompt("Nhap vao 1 so bat ki"))
    var sum = 0;
    while (number != -1) {
        number = parseInt(prompt("Nhap vao 1 so bat ki(chi dung khi nhap -1)"));
        sum += number;
    }
    document.write(sum);
}

// bai1();

function bai2() {
    var i = 1;
    while (i < 100) {
        document.write("<hr width = " + i + "%>");
        i++;
    }
}

bai2();