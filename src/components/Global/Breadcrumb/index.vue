<template>
  <div>
      <el-breadcrumb>
        <el-button-group>
        <el-breadcrumb-item :to="{ path: '/' }"><el-button size="small">Inicio</el-button></el-breadcrumb-item>
        <el-breadcrumb-item><el-button size="small">Otro</el-button></el-breadcrumb-item>
        <el-breadcrumb-item><el-button size="small">otro menu</el-button></el-breadcrumb-item>
        <el-breadcrumb-item><el-button type="primary" size="small">Hola</el-button></el-breadcrumb-item>
        </el-button-group>
      </el-breadcrumb>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
</style>
