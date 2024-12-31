## 手机号

### phoneReg

校验手机号规则的正则表达式

```vue preview
<template>
<div>
    在console中查看
    <m-button @click="handleCheck">检验</m-button>
</div>
</template>
<script lang="ts" setup>
import { phoneReg } from '@/main'

function handleCheck() {
    console.log(phoneReg.test('18688881111'))   
}
</script>
```
