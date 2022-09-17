import InvalidUuidError from "../../../errors/invalid-uuid.error";
import UniqueEntityId from "../unique-entity-id.vo";
import { validate as uuidValidate } from "uuid";

// function spyValidateMethod() {
//   return jest.spyOn(UniqueEntityId.prototype as any, "validate");
// } //mock

describe("UniqueEntityId Unit Tests", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

  it("should throw error when uuid is invalid", () => {
    // const validateSpy = spyValidateMethod();

    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    // const validateSpy = spyValidateMethod();
    const uuid = "ed67424e-cdb6-4fd1-8ce7-360e782dc5e8";

    const vo = new UniqueEntityId(uuid);

    expect(vo.value).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should generate a uuid valid", () => {
    // const validateSpy = spyValidateMethod();

    const vo = new UniqueEntityId();

    expect(uuidValidate(vo.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
