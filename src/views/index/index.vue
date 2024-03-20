<template>
  <div class="container">

    <div class="home-header">
      <div class="header-avatar">
        <a-avatar :size="75" src="http://q.qlogo.cn/headimg_dl?dst_uin=6479130&spec=640&img_type=jpg"></a-avatar>
      </div>
      <div class="header-info">
        <span class="header-name">晚上好！Admin，愿你天黑有灯，下雨有伞。</span>
        <p class="header-desc">一个人几乎可以在任何他怀有无限热忱的事情上成功。</p>
      </div>
      <div class="header-team">
        <a-avatar-group>
          <a-tooltip title="Cen" placement="top">
            <a-avatar :size="48" src="http://q.qlogo.cn/headimg_dl?dst_uin=6479130&spec=640&img_type=jpg" />
          </a-tooltip>
          <a-tooltip title="Hong" placement="top">
            <a-avatar :size="48" src="http://q.qlogo.cn/headimg_dl?dst_uin=79359130&spec=640&img_type=jpg" />
          </a-tooltip>
        </a-avatar-group>
        <span>Development</span>
      </div>
    </div>

  </div>

  <div style="margin: 16px;">
    <a-row :gutter="16">
      <a-col :span="6" v-for="item in dataCards">
        <DataCard :item="item" />
      </a-col>
    </a-row>
  </div>

  <!-- 站点信息 -->
  <div style="margin: 16px;">
    <a-row>
      <a-col :span="24">
        <a-card title="站点信息" size="small">
          <a-descriptions bordered size="small" :column="4">
            <a-descriptions-item label="网站域名">vip.jawy.cn</a-descriptions-item>
            <a-descriptions-item label="当前版本">1.0.1-beta</a-descriptions-item>
            <a-descriptions-item label="部署时间">2024-01-30 18:00:00</a-descriptions-item>
            <a-descriptions-item label="当前运行环境">Nginx 1.22 | PHP 7.4 | MySQL 8.0</a-descriptions-item>

          </a-descriptions>
        </a-card>


      </a-col>
    </a-row>
  </div>

  <div style="margin: 16px;">
    <a-row :gutter="16">
      <a-col :span="12">
        <div style="background-color: #fff;padding: 5px 15px;border: 1px solid #f0f0f0;height: 270px;">
          <Notice :noticeData="NoticeData" />
        </div>
      </a-col>
      <a-col :span="12">
        <div style="background-color: #fff;">
          <a-card title="常用操作" size="small" style="height: 270px;border-radius: 0;">

            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作1</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作2</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作3</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作4</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作5</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作6</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作7</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作8</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作9</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作10</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作11</a-card-grid>
            <a-card-grid style="width: 25%; text-align: center;height: 77px;">常用操作12</a-card-grid>

          </a-card>
        </div>
      </a-col>

    </a-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataCard from './components/datacard.vue';
import Notice from './components/notice.vue';

//首页 数据4格
const dataCards = ref([
  {
    title: '总用户数',
    icon: 'UserOutlined',
    total: '1000',
    today: '100',
  },
  {
    title: '总交易额',
    icon: 'PayCircleOutlined',
    total: '999.99',
    today: '9.99',
  },
  {
    title: '总订单数',
    icon: 'OrderedListOutlined',
    total: '9999',
    today: '0',
    unit: '条'
  },
  {
    title: '调用次数',
    icon: 'LineChartOutlined',
    total: '9999',
    today: '10',
    unit: '次'
  },
])

//公告 更新/登录 日志
const NoticeData = ref([
  {
    id: '1',
    title: '最新公告',
    options: [
      {
        title: '欢迎使用花屿音乐后台管理系统',
        time: '2024-01-30 18:00:00'
      },
      {
        title: '这是一条测试公告',
        time: '2024-01-30 18:00:00'
      },
      {
        title: '这是一条测试公告',
        time: '2024-01-30 18:00:00'
      },
      {
        title: '这是一条测试公告',
        time: '2024-01-30 18:00:00'
      },
      {
        title: '这是一条测试公告',
        time: '2024-01-30 18:00:00'
      },
    ]
  },
  {
    id: '2',
    title: '更新日志',
    options: [
      {
        title: '欢迎使用VIP后台管理系统3',
        time: '2024-01-30 18:00:00'
      },
      {
        title: '欢迎使用VIP后台管理系统4',
        time: '2024-01-30 18:00:00'
      }
    ]
  },
  {
    id: '3',
    title: '登录日志',
    options: [
      {
        title: '欢迎使用VIP后台管理系统5',
        time: '2024-01-30 18:00:00'
      },
      {
        title: '欢迎使用VIP后台管理系统6',
        time: '2024-01-30 18:00:00'
      }
    ]
  },
])

</script>


<style scoped>
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-avatar {
  margin-right: 16px;
}

.header-name {
  font-weight: 700;
  font-size: 20px;
}

.header-desc {
  color: #959595;
  font-size: 14px;
}

.header-info {
  flex: 1;
  text-align: left;
  height: 55px;
}

.header-team {
  display: grid;
}
</style>