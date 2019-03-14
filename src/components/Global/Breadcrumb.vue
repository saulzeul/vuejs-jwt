<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group enter-active-class="animated faster fadeInRight">
        <el-breadcrumb-item
          v-for="route in $route.meta"
          :to="route.path"
          :key="route.id"
        >{{ route.name }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss" scoped>
.el-breadcrumb {
  font-size: 20px;
  text-transform: capitalize;
}
</style>

