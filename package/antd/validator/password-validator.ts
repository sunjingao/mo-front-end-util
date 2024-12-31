import { specialCharReg } from '@/reg/special-char';

// 密码校验，长度为12-30，包含数字、字母、特殊字符，适用于ant-design-vue的form表单验证
export function passwordValidatorAntd(_, value) {
  if (value.length < 12 || value.length > 30) {
    return Promise.reject('长度需为12-30位');
  }

  const regLetter = /[a-zA-Z]/; // 字母
  const regNumber = /[0-9]/; // 数字
  for (let index = 0; index < value.length; index++) {
    if (
      !regLetter.test(value[index]) &&
      !regNumber.test(value[index]) &&
      !specialCharReg.test(value[index])
    ) {
      return Promise.reject(new Error('必须为字母、数字或符号'));
    }
  }

  if (!regLetter.test(value) || !regNumber.test(value) || !specialCharReg.test(value)) {
    return Promise.reject(new Error('必须包含字母、数字或符号'));
  }

  return Promise.resolve();
}
