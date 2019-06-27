<template>
  <div id="footer">
    <el-row>
      <el-col :span="24">
        <el-button-group>
          <router-link to="/orders">
            <el-button type="primary">PEDIDOS</el-button>
          </router-link>
          <router-link to="/menu">
            <el-button type="danger"><icon icon="th-large"/></el-button>
          </router-link>          
          <router-link to="/commands">
            <el-button type="warning">COMANDAS</el-button>
          </router-link>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>