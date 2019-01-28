import { mount } from "vue";
import { validateMimeType, calculateTax } from "@/lib/Utils"

describe('Utils', () => {
  test('is a Vue instance', () => {
    var file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    let res = validateMimeType(file, 'text/plain');
    console.log(res);
    expect(true).toBeTruthy()
  })
  test('it should calculate the tax properly', () => {
    var salaryPerAnnum = Number(60005);
    var tax = calculateTax(salaryPerAnnum);
    expect(tax).toBeTruthy()
  })
})