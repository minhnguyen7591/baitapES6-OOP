export class Employee extends Person {
  constructor(soNgay, luongNgay, ...restPerson) {
    super(...restPerson);
    this.soNgay = soNgay;
    this.luongNgay = luongNgay;
  }
  calcLuong() {
    this.tinhLuong = this.luongNgay * this.soNgay;
    return this.tinhLuong;
  }
}
