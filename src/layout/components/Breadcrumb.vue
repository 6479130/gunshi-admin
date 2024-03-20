<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item v-for="v in breadcrumbList" :key="v.path">
        <RouterLink :to="v.path">
          <component :is="v.meta.icon" /> {{ v.meta.title }}
        </RouterLink>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute()
const breadcrumbList = ref([])

// 通过生命周期把路由信息赋值给面包屑
onMounted(() => {
  breadcrumbList.value = route.matched
})

// 监听路由 动态赋值给面包屑
watch(route, (n, o) => {
  breadcrumbList.value = n.matched
})





</script>