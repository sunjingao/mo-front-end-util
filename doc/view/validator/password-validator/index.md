## 密码校验

### passwordValidatorAntd

用于表单的密码校验

```vue preview
<template>
<div>
      <m-form
        v-model="formRef"
        :items="items"
        :rules="rules"
    ></m-form>
</div>
</template>
<script lang="ts" setup>
import {ref, watch} from 'vue';
import { passwordValidatorAntd } from '@/main'

const formRef = ref({});

const items = ref([
  {
    componentName: 'mInput',
    uploadKey: 'password',
    formItemProps: { 
        label: '密码'
    },
  },
]);

const rules = {
        password: [
            { required: true, message: '密码为必填项', trigger: 'change' },
            {
              validator: passwordValidatorAntd,
              trigger: 'blur'
            }
          ]
    }
</script>
```
