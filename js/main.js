import { Person } from "./person";
import { Student } from "./student";
import { Employee } from "./employee";
import { Customer } from "./customer";
import { listPerson } from "./listPerson";

const dsND = new listPerson();
const validation = new Validation();

function setLocalStorage() {
  //localStorage, JSON: obj có sẵn của JS
  // mangND (array) => JSON (sử dung stringify() )
  localStorage.setItem("DSND", JSON.stringify(dsND.mangND));
}

function getLocalStorage() {
  //getItem => return JSON (kiểu dữ liệu lưu ở DB backend)
  //JSON => array (JSON parse)
  const dataLocal = JSON.parse(localStorage.getItem("DSND"));
  // console.log(dataLocal);
  if (dataLocal !== null) {
    //có dữ liệu
    hienThiTable(dataLocal);
    dsND.mangND = dataLocal;
  }
}
//gọi khi load web
getLocalStorage();

function themNguoiDung() {
  const ten = document.getElementById("txtHoTen").value;
  const diachi = document.getElementById("txtĐiaChi").value;
  const ma = document.getElementById("txtMa").value;
  const email = document.getElementById("txtEmail").value;
  const loai = document.getElementById("loaiND").value;
  const toan = document.getElementById("txtDiemToan").value;
  const ly = document.getElementById("txtDiemLy").value;
  const hoa = document.getElementById("txtDiemHoa").value;
  const soNgay = document.getElementById("txtSoNgay").value;
  const luongNgay = document.getElementById("txtLuongNgay").value;
  const tenCTy = document.getElementById("txtTenCTy").value;
  const hoaDon = document.getElementById("txtHoaDon").value;
  const danhGia = document.getElementById("txtDanhGia").value;

  var isValid = true; //gia sử dữ liệu đúng

  //Tên: không bỏ trống, phải là ký tự chữ
  isValid &=
    validation.checkEmpty(
      ten,
      "spanHoTen",
      "Tên người dùng không được để trống"
    ) &&
    validation.checkName(
      ten,
      "spanHoTen",
      "Tên người dùng chỉ được chứa ký tự chữ"
    );
  //Địa chỉ:
  isValid &= validation.checkEmpty(
    diachi,
    "spanĐiaChi",
    "Địa chỉ người dùng không được để trống"
  );
  //Mã: không bỏ trống, không được trùng
  isValid &=
    validation.checkEmpty(ma, "spanMa", "Mã người dùng không được để trống") &&
    validation.checkID(ma, "spanMa", "Mã không được trùng", listND.mangND);
  //EMAIL: kiểm tra định dạng email
  isValid &= validation.checkEmail(
    email,
    "spanEmail",
    "Email chưa đúng định dạng"
  );

  //Score : điểm phải là số nguyên (interger) hoặc số thực (float) và từ 0-10
  isValid &= validation.checkScore(
    renLuyen,
    "spanRenLuyen",
    "Điểm phải từ 0 đến 10"
  );

  if (isValid) {
    //các thao tác sau khi dữ liệu đúng
    //? Tạo đối tượng Sinh viên
    // instance : thể hiện của lớp đối tượng
    const nv = new Student(
      ten,
      diachi,
      ma,
      email,
      Number(toan),
      Number(ly),
      Number(hoa)
    );
    nv.calcDTB();
    dsND.themND(nv);
    //gọi hàm hiển thị
    setLocalStorage();
    hienThiTable(listND.mangND);
  }
}

function hienThiTable(mang) {
  const content = "";
  //tạo từng thẻ tr

  mang.map(function (ND, index) {
    //string template / template literal
    var trND = `<tr>
            <td>${ND.ten}</td>
            <td>${ND.diachi}</td>
            <td>${ND.ma}</td>
            <td>${ND.email}</td>
            <td>${ND.dtb}</td>
            <td>${ND.luong}</td>
            <td>
                
            </td>
        </tr>`;
    //content(mới) = content(cũ) + trSV
    content += trND;
  });

  // console.log(content);
  document.getElementById("tbodyNguoiDung").innerHTML = content;
}

function xoaNguoiDung(ma) {
  dsND.xoaND(ma);
  hienThiTable(dsND.mangND);
  setLocalStorage();
}
