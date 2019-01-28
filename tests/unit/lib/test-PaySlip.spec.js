import { mount } from "vue";
import PaySlip from "@/lib/PaySlip"

describe('PaySlip', () => {
  test('it should calculate all the parts of salary', () => {
    var paySlip = new PaySlip(Number(60050));
    paySlip.calculateIncomeComponents({ rate: Number(0.325), threshold: Number(37000), offset: Number(3572) });
    // console.log(paySlip);
    expect(paySlip.grossIncome).toEqual(5004);
    expect(paySlip.incomeTax).toEqual(922);
    expect(paySlip.netIncome).toEqual(4082);
    expect(paySlip.super).toEqual(450);
  })
  test('it should calculate all the parts of salary', () => {
    var paySlip = new PaySlip(Number(60050));
    paySlip.calculate();
    // console.log(paySlip.grossIncome, paySlip, paySlip.super);
    expect(paySlip).toBeTruthy();
    expect(paySlip.grossIncome).toEqual(5004);
    expect(paySlip.incomeTax).toEqual(922);
    expect(paySlip.netIncome).toEqual(4082);
    expect(paySlip.super).toEqual(450);
  })
})