function bai1() {
    var sum = 0;
    while (number != -1) {
        var number = parseInt(prompt("Nhap vao 1 so bat ki"))
        if (number == -1) {
            break;
        }
        sum += number;
    }
    document.write(sum);
}

bai1();

function bai2() {
    var i = 1;
    while (i < 100) {
        document.write("<hr width = " + i + "%>");
        i++;
    }
}

//bai2();
