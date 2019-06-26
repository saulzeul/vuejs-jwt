<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
        <Product :nameItem="nameItem" :urlImage="urlImage"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
        <Product :nameItem="nameItem" :urlImage="urlImage"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
        <Product :nameItem="nameItem" :urlImage="urlImage"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
        <Product :nameItem="nameItem" :urlImage="urlImage"/>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
        <Product :nameItem="nameItem" :urlImage="urlImage"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Product from "@/components/Global/Product";
export default {
  components: { Product },
  data() {
    return {
      nameItem: "Hamburguesa sencilla",
      urlImage: "https://via.placeholder.com/150/24f355"
    };
  }
};
</script>