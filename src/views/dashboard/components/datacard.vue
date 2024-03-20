<template>
  <a-card class="data-card">
    <div class="data-card-content">
      <div class="data-left">
        <a-statistic :title="item.title" :value="item.total" style="margin-right: 50px">
          <template #prefix>
            <component :is="item.icon" />
          </template>
        </a-statistic>
        <span style="font-size: 12px; color: #959595;margin-top: 15px;">
          今日新增
          <span :style="item.today > 0 ? 'color:red' : 'color:green'">

            <RiseOutlined v-if="item.today > 0" />
            <FallOutlined v-else />
            {{ item.today }}
          </span>
          <span v-if="item.unit">{{ item.unit }}</span></span>
      </div>
      <div class="data-right">
        <a-avatar :size="64" style="background-color: #edf3fe">
          <template #icon>
            <component :is="item.icon" style="color:#4f89f3" />
          </template>
        </a-avatar>
      </div>
    </div>
  </a-card>
</template>

<script setup>
const props = defineProps(['item'])
</script>

<style scoped>
.data-card {
  border-radius: 0;
}

.data-card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data-left {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>