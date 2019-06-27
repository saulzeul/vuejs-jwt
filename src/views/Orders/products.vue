<template>
  <div>
    <el-row :gutter="10">
      <div v-for="(product, index) in products" :key="index">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
          <Product :nameItem="product.name.first" :urlImage="product.picture.medium"/>
        </el-col>
      </div>
    </el-row>
  </div>
</template>
<script>
import Product from "@/components/Global/Product";
export default {
  components: { Product },
  data() {
    return {
      products: []
    };
  },
  created: function () {
    this.getProducts();
  },
  methods: {
    getProducts: function () {
      this.$http.get('https://randomuser.me/api/?results=10')
        .then((response) => {
          this.products = response.data.results
        })
    }
    }
  }
</script>