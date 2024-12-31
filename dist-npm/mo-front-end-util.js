const i = /^1[3456789]\d{9}$/, s = /[\(\)\`\~\!\@\#\$\%\^\&\*\-\+\=\_\|\{\}\[\]\:\;\'\<\>\,\.\?\\]/;
function c(o, t) {
  if (t.length < 12 || t.length > 30)
    return Promise.reject("长度需为12-30位");
  const r = /[a-zA-Z]/, n = /[0-9]/;
  for (let e = 0; e < t.length; e++)
    if (!r.test(t[e]) && !n.test(t[e]) && !s.test(t[e]))
      return Promise.reject(new Error("必须为字母、数字或符号"));
  return !r.test(t) || !n.test(t) || !s.test(t) ? Promise.reject(new Error("必须包含字母、数字或符号")) : Promise.resolve();
}
export {
  c as passwordValidatorAntd,
  i as phoneReg,
  s as specialCharReg
};
//# sourceMappingURL=mo-front-end-util.js.map
