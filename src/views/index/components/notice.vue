<template>
  <a-tabs v-model:activeKey="activeKeyRef" :size="small" class="noticeTabs">
    <a-tab-pane v-for="items in noticeData" :key="items.id" :tab="items.title">
      <a-list item-layout="horizontal" :data-source="items.options" size="small">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <div style="display: flex;justify-content: space-between;">

                  <a>
                    <SoundOutlined v-if="items.id == 1" />
                    {{ item.title }}
                  </a>
                  <a-tag :bordered="false" color="processing">{{ item.time }}</a-tag>
                </div>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
const props = defineProps(['noticeData']);
import { ref } from 'vue';
const activeKeyRef = ref();
</script>

<style scoped>
:deep(.ant-tabs-nav) {
  margin: 0 0 3px;
}
</style>