function Validation() {
  // value: giá trị từ user
  // spanID: id của thẻ thông báo lỗi
  //message: nội dung thông báo
  this.checkEmpty = function (value, spanID, message) {
    if (value === "") {
      //!chưa hợp lệ
      //thông báo lỗi
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      //trả kết quả false
      return false;
    }

    //?hợp lệ
    document.getElementById(spanID).innerHTML = "";
    document.getElementById(spanID).style.display = "none";
    //trả kết quả true
    return true;
  };
  this.checkID = function (value, spanID, message, mangND) {
    // some(): duyệt mảng, kiểm tra theo điều kiện => return true/false
    const isExist = mangND.some(function (ND, index) {
      // return biểu thức so sanh
      return ND.ma === value;
    });

    if (isExist) {
      //đã tồn tại mã
      //!chưa hợp lệ
      //thông báo lỗi
      document.getElementById(spanID).innerHTML = message;
      document.getElementById(spanID).style.display = "block";
      //trả kết quả false
      return false;
    }
    //?hợp lệ
    document.getElementById(spanID).innerHTML = "";
    document.getElementById(spanID).style.display = "none";
    //trả kết quả true
    return true;
  };
  this.checkName = function (value, spanID, message) {
    //biểu thức chính quy (regexp)
    var pattern =
      /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

    // test(), match() => giúp kiểm tra value có phù hợp chuẩn của biểu thức không
    // value.match(pattern) => return true (nếu hợp lệ)
    if (value.match(pattern)) {
      //?hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      //trả kết quả true
      return true;
    }
    //!chưa hợp lệ
    //thông báo lỗi
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    //trả kết quả false
    return false;
  };

  this.checkEmail = function (value, spanID, message) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(pattern)) {
      //?hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      //trả kết quả true
      return true;
    }
    //!chưa hợp lệ
    //thông báo lỗi
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    //trả kết quả false
    return false;
  };

  this.checkScore = function (value, spanID, message) {
    var pattern = /^(\d{1,2}(\.\d{1,2})?)$/;
    if (value.match(pattern) && value >= 0 && value <= 10) {
      //?hợp lệ
      document.getElementById(spanID).innerHTML = "";
      document.getElementById(spanID).style.display = "none";
      //trả kết quả true
      return true;
    }
    //!chưa hợp lệ
    //thông báo lỗi
    document.getElementById(spanID).innerHTML = message;
    document.getElementById(spanID).style.display = "block";
    //trả kết quả false
    return false;
  };
}
