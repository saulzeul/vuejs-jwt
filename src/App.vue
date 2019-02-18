<template>
  <div id="app">
    <el-container>
              <el-aside width="200px;"  style="height:100vh;background-color: white;border-right: 1px solid #d8dce5;">
          <AppAside/>
        </el-aside>

      <el-container>
              <el-header>
          <AppHeader/>
        </el-header>
        <el-container>
          <el-main  style="height:91vh;">
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import AppHeader from "@/components/Layout/AppHeader.vue";
import AppAside from "@/components/Layout/AppAside.vue";
export default {
  components: { AppHeader, AppAside }
};
</script>
<style lang="scss">
body {
  margin: 0px;
  background-color: #f0f2f5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
