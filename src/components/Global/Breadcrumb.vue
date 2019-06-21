<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group enter-active-class="animated faster fadeInRight">
        <el-breadcrumb-item
          v-for="(route, index) in $route.matched"
          :to="{name: route.name}"
          :key="`${index}`"
        >{{ route.meta }}</el-breadcrumb-item>
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

