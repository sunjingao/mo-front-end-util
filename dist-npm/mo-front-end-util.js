const i = /^1[3456789]\d{9}$/, n = /[\(\)\`\~\!\@\#\$\%\^\&\*\-\+\=\_\|\{\}\[\]\:\;\'\<\>\,\.\?\\]/;
function c(s, t) {
  if (t.length < 12 || t.length > 30)
    return Promise.reject("长度需为12-30位");
  const r = /[a-zA-Z]/, o = /[0-9]/;
  for (let e = 0; e < t.length; e++)
    if (!r.test(t[e]) && !o.test(t[e]) && !n.test(t[e]))
      return Promise.reject(new Error("必须为字母、数字或符号"));
  return !r.test(t) || !o.test(t) || !n.test(t) ? Promise.reject(new Error("必须包含字母、数字或符号")) : Promise.resolve();
}
console.log(1313);
export {
  c as passwordValidatorAntd,
  i as phoneReg,
  n as specialCharReg
};
//# sourceMappingURL=mo-front-end-util.js.map
