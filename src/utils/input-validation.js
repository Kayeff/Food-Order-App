export function isEmail(input = "") {
  return input.includes("@");
}

export function validString(input = "") {
  return input.length > 0 && input.trim() !== "";
}

export function validCode(input = "") {
  input = Number(input);
}
