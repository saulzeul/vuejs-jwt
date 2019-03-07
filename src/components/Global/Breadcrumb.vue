<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(route, index) in $route.meta"
        :to="route.path"
        :key="index"
      >{{ route.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss" scoped>
.el-breadcrumb {
  font-size: 20px;
  text-transform: capitalize;
}
</style>

