<template>
  <a-col :span="12" style="display: grid;align-items: center;justify-content: end;">
    <div style="margin-right: 25px;">
      <a-dropdown :placements="bottomRight">
        <div style="display: flex;align-items: center;">
          <a-avatar :size="45"
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            style="margin-right: 5px;" />
          <span>
            <a style="display: flex;flex-direction: column;align-items: center;"><a-typography-text>Admin</a-typography-text>
              <a-typography-text type="secondary">[超级管理员]</a-typography-text>
            </a>
          </span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <UserOutlined style="margin-right: 3px;" />
              <a href="javascript:;">个人中心</a>
            </a-menu-item>
            <a-menu-item>
              <LoginOutlined style="margin-right: 3px;" />
              <a href="javascript:;">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-col>
</template>

<script setup>

</script>