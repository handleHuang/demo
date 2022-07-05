<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >

          <el-menu
            default-active="/home"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">导航1</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <i class="el-icon-menu"></i>
              <span slot="title">导航2</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">导航3</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航4</span>
            </el-menu-item>
            <el-menu-item index="5" @click="a">
              <i class="el-icon-setting"></i>
              <span slot="title">导航5</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    a() {
      // console.log(window.location.href);
      var a = window.location.href.split('/').reverse();
      // .join('')
      // .split('/');
      // console.log(a.length);
      console.log(a[0]);
      // console.log(substr(strrchr(a, '/'), 1));
      // console.log(substr(strrchr(a, '/'), 1));
      // return substr(strrchr($url, '.'), 1);
    }
  }
};
</script>
