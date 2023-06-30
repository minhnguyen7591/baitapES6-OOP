export class Customer extends Person {
  constructor(tenCTy, hoaDon, danhGia, ...restPerson) {
    super(...restPerson);
    this.tenCTy = tenCTy;
    this.hoaDon = hoaDon;
    this.danhGia = danhGia;
  }
}
