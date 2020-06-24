
const isEmpty = value => {
    return (
      // n?u gi? tr? ??u v?o kh?ng x?c ??nh
      value === undefined ||
      // n?u gi? tr? ??u v?o r?ng ho?c kh?ng t?n t?i
      value === null ||
      // n?u ??u v?o l? m?t object ho?c m?t array (v? typ?O c?a array l? obj) th? s? k? t? b?ng 0
      (typeof value === "object" && Object.keys(value).length === 0) ||
      //n?u ??u v?o l? m?t string th? s? k? t? b?ng 0
      (typeof value === "string" && value.trim().length === 0)
    );
};

module.exports = isEmpty