function NguoiDungService() {
  this.layDanhSachNguoiDung = function() {
    return axios({
      method: "GET",
      url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung"
    });
  };

  this.themNguoiDung = function(nguoiDung) {
    return axios({
      method: "POST",
      url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      data: nguoiDung
    });
  };
}
