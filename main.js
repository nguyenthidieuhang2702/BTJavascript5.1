document.getElementById("tinhTienThue").onclick = function() {
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    var tienThue = ""


    if (thuNhapChiuThue < 0) {
        tienThue = "Số tiền thu không hợp lệ";
    } else if (thuNhapChiuThue <= 60) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.05;

    } else if (thuNhapChiuThue <= 120) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.1;

    } else if (thuNhapChiuThue <= 210) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.15;

    } else if (thuNhapChiuThue <= 384) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.2;

    } else if (thuNhapChiuThue <= 624) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.25;

    } else if (thuNhapChiuThue <= 960) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.3;

    } else if (thuNhapChiuThue > 960) {
        tienThue = "Họ tên:" + hoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapChiuThue * 0.35;
    }
    document.getElementById("footerTinhTienThue").innerHTML = tienThue;
}

document.getElementById("tinhTienCap").onclick = function() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = document.getElementById("kenhCaoCap").value;
    var soKetNoi = document.getElementById("soKetNoi").value;

    var nhaDan = "";
    var doanhNghiep = "";
    var loaiKhachHang = "";
    var tienCap = "";

    if (loaiKhachHang === nhaDan) {
        tienCap = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + 4.5 + 20.5 + 7.5 * soKenhCaoCap;

    } else if (loaiKhachHang === doanhNghiep && soKetNoi <= 10) {
        tienCap = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + 15 + 7.5 * soKetNoi + 50 * soKenhCaoCap;;

    } else if (loaiKhachHang === doanhNghiep && soKetNoi >= 10) {
        tienCap = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: $" + 15 + (7.5 + 5) * soKetNoi + 50 * soKenhCaoCap;
    }
    document.getElementById("footerTinhTienCap").innerHTML = tienCap;
}