## 特殊字符

### specialCharReg

特殊字符的正则表达式

```vue preview
<template>
<div>
    在console中查看
    <m-button @click="handleCheck">检验</m-button>
</div>
</template>
<script lang="ts" setup>
import { specialCharReg } from '@/main'

function handleCheck() {
    console.log(specialCharReg.test('@'))   
}
</script>
```
