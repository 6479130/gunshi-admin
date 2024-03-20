<template>
  <!-- 无子分类 -->
  <template v-if="!item.children && item.meta.show">
    <a-menu-item :key="item.path" @click="handleSetPinia(item)">
      <RouterLink :to="item.path">
        <component :is="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </RouterLink>
    </a-menu-item>
  </template>


  <template v-else-if="item.children && item.meta.show">
    <!-- 有子分类 -->
    <a-sub-menu :key="item.path">
      <template #title>
        <span>
          <component :is="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </span>
      </template>
      <navitem v-for="sub in item.children" :key="sub.path" :item="sub" />
    </a-sub-menu>
  </template>
</template>

<script setup>
import { useTabStore } from '@/store/modules/tab'
const props = defineProps(['item'])


const tab = useTabStore()
const handleSetPinia = (item) => {

  let tabs = tab.tabLists.some(v => v.path === item.path)
  if (tabs) return
  tab.add_tab(item)
}


</script>