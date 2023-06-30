function listPerson() {
  this.mangND = []; //mảng đối tượng
  //Phương thức
  this.themND = function (ND) {
    // ND: 1 người dùng mới cần thêm
    this.mangND.push(ND);
  };
  this.xoaND = function (Ma) {
    // index: vị trí cần xóa
    var index = this.timIndex(ma);
    console.log(index);
    if (index > -1) {
      //tìm thấy
      //splice(vị trí bắt đầu của phần tử cần xóa,số lượng cần xóa)
      // 0 1 2
      //[5,6,7,8]  => splice(0,3) => [8]
      this.mangSV.splice(index, 1);
    }
  };
}
export { listPerson };
