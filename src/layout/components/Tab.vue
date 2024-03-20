<template>
  <div class="tab"
    style="background-color: #fff;height:48px;box-shadow: 0 1px 4px rgba(0,21,41,.08);padding: 10px;margin: 0.4px; display: flex;align-items: center;"
    id='scroll-container'>

    <a-tag class="tabs" v-for="(item, index) in tabdata" :key="item.path"
      :closable="item.path != '/index' && tabdata.length != 1" @click="handleJump(item)"
      :color="(item.path == url) ? 'processing' : ''" @close="handleClose(item, index)">

      <a-dropdown :trigger="['contextmenu']">

        <span class="title">
          <component :is="item.meta.icon" style="margin-right: 3px;" />{{ item.meta.title }}
        </span>

        <template #overlay>
          <a-menu @click="({ key: menuKey }) => onContextMenuClick(index, menuKey)">
            <a-menu-item key="0">
              <component is="LoadingOutlined" style="margin-right: 3px;" />刷新页面
            </a-menu-item>
            <a-menu-item key="1">
              <component is="LeftOutlined" style="margin-right: 3px;" />关闭左侧
            </a-menu-item>
            <a-menu-item key="2">
              <component is="RightOutlined" style="margin-right: 3px;" />关闭右侧
            </a-menu-item>
            <a-menu-item key="3">
              <component is="CloseSquareOutlined" style="margin-right: 3px;" />关闭其他
            </a-menu-item>
            <a-menu-item key="4">
              <component is="CloseCircleOutlined" style="margin-right: 3px;" />关闭全部
            </a-menu-item>
          </a-menu>
        </template>

      </a-dropdown>

    </a-tag>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useTabStore } from '@/store/modules/tab'
import { useRouter, useRoute } from 'vue-router';
const scrollPosition = ref(0);
const tabdata = ref([])
const tab = useTabStore()
const router = useRouter()
const route = useRoute()
const url = ref('/index')
tabdata.value = tab.tabLists
console.log(tab.tabLists)
onMounted(() => {
  url.value = route.path
  document.addEventListener('wheel', handleMouseWheel);
});

onUnmounted(() => {
  document.removeEventListener('wheel', handleMouseWheel);
  cancelAnimationFrame(scrollRequestId);
});

watch(route, (n, o) => {
  url.value = n.path || '/index'
})

watch(tab.tabLists, (n, o) => {
  tabdata.value = n

  const scrollContainer = document.getElementById('scroll-container');
  const maxScrollPosition = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  scrollPosition.value = maxScrollPosition + 150;
  requestScrollUpdate();

})

const handleClose = (item, index) => {
  tab.del_tab(index)
  router.push(tab.tabLists[index - 1].path)
}

const handleJump = (item) => {
  if (item.path == route.path) return

  router.push(item.path)
}

//控制滚动条

let scrollRequestId;

const increaseScroll = () => {
  scrollPosition.value += 10;
  if (scrollPosition.value < 0) { scrollPosition.value = 0; }
  requestScrollUpdate();
};

const decreaseScroll = () => {
  scrollPosition.value -= 10;
  requestScrollUpdate();
};

const updateScrollPosition = () => {
  const scrollContainer = document.getElementById('scroll-container');
  const maxScrollPosition = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  if (scrollPosition.value < 0) {
    scrollPosition.value = 0;
  } else if (scrollPosition.value > maxScrollPosition) {
    scrollPosition.value = maxScrollPosition;
  }
  scrollContainer.scrollLeft = scrollPosition.value;
};

const requestScrollUpdate = () => {
  cancelAnimationFrame(scrollRequestId);
  scrollRequestId = requestAnimationFrame(updateScrollPosition);
};

const handleMouseWheel = (event) => {
  const delta = Math.sign(event.deltaY);
  if (delta > 0) {
    increaseScroll();
  } else if (delta < 0) {
    decreaseScroll();
  }
};

//右键菜单
const onContextMenuClick = (index, menuKey) => {
  // console.log(`index: ${index}, menuKey: ${menuKey}`);

  switch (true) {
    case menuKey == 1:
      //关闭左侧
      tab.del_tab_left(index)

      break;
    case menuKey == 2:
      //关闭右侧
      tab.del_tab_right(index)
      if (index !== tab.tabLists.length) {
        router.push(tab.tabLists[index].path)
      }
      break;
    case menuKey == 3:
      //关闭其他
      tab.del_tab_right(index)
      tab.del_tab_left(index)
      break;
    case menuKey == 4:
      //关闭全部
      tab.del_tab_all()
      router.push(tab.tabLists[0].path)
      break;
    case menuKey == 0:
      //刷新页面
      router.go(0)

      break;
  }

};


</script>

<style scoped>
.tab {
  width: 100%;
  overflow-x: auto;
  /* 启用横向滚动 */
  white-space: nowrap;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar
}

::-webkit-scrollbar {
  height: 0px;
  background-color: #fff;
}


.tabs {
  padding: 5px 5px !important;
  cursor: pointer;
  border-radius: 0;
}

.tabs:hover {
  border: 1px solid #91caff;
  background: #e6f4ff;
}


.tabs>.title {
  padding: 0 6px;
  font-size: 12px;
}
</style>