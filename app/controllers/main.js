var nguoiDungService = new NguoiDungService();

getListUser();

getEle("btnThemNguoiDung").addEventListener("click", function() {
  document.getElementsByClassName("modal-title")[0].innerHTML =
    "Thêm người dùng";

  var footer = `
        <button class="btn btn-success" onclick="ThemNguoiDung()">Thêm</button>
    `;

  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});

/**
 * Them nguoi dung
 */
function ThemNguoiDung() {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var nguoiDung = new NguoiDung(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    soDT,
    loaiNguoiDung
  );

  nguoiDungService
    .themNguoiDung(nguoiDung)
    .then(function(result) {
      console.log(result);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function getListUser() {
  nguoiDungService
    .layDanhSachNguoiDung()
    .then(function(result) {
      renderTable(result.data);
    })
    .catch(function(errors) {
      console.log(errors);
    });
}

function renderTable(mangNguoiDung) {
  var contentHTML = "";

  mangNguoiDung.map(function(item, index) {
    contentHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.taiKhoan}</td>
                    <td>${item.matKhau}</td>
                    <td>${item.hoTen}</td>
                    <td>${item.email}</td>
                    <td>${item.soDT}</td>
                    <td>${item.maLoaiNguoiDung}</td>
                </tr>
            `;
  });

  document.getElementById("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

function getEle(id) {
  return document.getElementById(id);
}
