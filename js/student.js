export class Student extends Person {
  constructor(toan, ly, hoa, ...restPerson) {
    super(...restPerson);
    this.diemToan = toan;
    this.diemLy = ly;
    this.diemHoa = hoa;
  }
  calcDTB() {
    this.diemTB = Number(this.diemToan + this.diemLy + this.diemHoa) / 3;
    return this.diemTB;
  }
}
