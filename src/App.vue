<template>
  <div id="app">
    <el-container>
        <el-header>
          <AppHeader/>
        </el-header>
          <el-main style="height:91vh;">
            <router-view/>
          </el-main>
        <el-footer>
          <AppFooter/>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppFooter from "@/components/Layout/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
body {
  margin: 0px;
  background-color: #f0f2f5;
  font-family: "Source Sans Pro", sans-serif;
}
.el-header,
.el-footer {
  background-color: #ffffff;
  border: 1px solid #d8dce5;
  line-height: 60px;
}

.el-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
