//Author: Hatim Patrawala

/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns True if the value is empty, false otherwise.
 */
const isEmpty = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
};

/**
 * Checks if the given value is a valid email address.
 *
 * @param email - The value to be checked.
 * @returns A boolean indicating whether the value is a valid email address.
 */
const isEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { isEmpty, isEmail };
