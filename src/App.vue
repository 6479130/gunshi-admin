<template>
  <a-app>
    <router-view></router-view>
  </a-app>
</template>

<style>
.container {
  background-color: #fff;
  padding: 24px;
  margin: 16px;
}

#app,
.ant-layout.ant-layout-has-sider {
  height: 100%;
  min-height: 100vh;
}
</style>