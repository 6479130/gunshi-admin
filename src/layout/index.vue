<template>
  <a-config-provider :theme="{
    token: {
      // colorPrimary: '#00b96b',
    },
  }">
    <a-layout h-screen>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="220px"
        style="box-shadow: 0 1px 4px rgba(0,21,41,.08);">
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" theme="dark" mode="inline">
          <navitem v-for="v in items" :key="v.path" :item="v" />
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0;box-shadow: 0 1px 4px rgba(0,21,41,.08)">
          <a-row>
            <a-col :span="12">
              <div style="line-height: 64px;display: flex;flex-direction: row;align-items: center;">
                <div>
                  <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                  <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                </div>
                <Breadcrumb />
              </div>
            </a-col>
            <Userinfo />
          </a-row>
        </a-layout-header>
        <Tab />
        <a-layout-content :style="{ minHeight: '280px' }">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </a-layout-content>
        <a-layout-footer
          style="display: flex;align-items: center;justify-content: center;height: 48px;color: #78716c;">Copyright
          ©2023-present XiangNet.Com</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import navitem from './components/Navitem.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Userinfo from './components/Userinfo.vue';
import Tab from './components/Tab.vue';
import { useRouter, useRoute } from 'vue-router';

const selectedKeys = ref([]);
const openKeys = ref([]);
const collapsed = ref(false);
const items = ref([])

const router = useRouter()
const route = useRoute()

onMounted(() => {
  selectedKeys.value = [route.path]
  openKeys.value = [route.matched[1].path]
})

watch(route, (n, o) => {
  selectedKeys.value = [n.path]
  openKeys.value = [n.matched[1].path]
})

items.value = router.options.routes[0].children


</script>
<style>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgb(125 125 125 / 30%);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
