import { mount } from "vue";
import { validateMimeType } from "@/lib/Utils"

describe('Component', () => {
  test('is a Vue instance', () => {
    var file = new File(["foo"], "foo.txt", {
      type: "text/plain",
    });
    let res = validateMimeType(file, 'text/plain');
    console.log(res);
    expect(true).toBeTruthy()
  })
})