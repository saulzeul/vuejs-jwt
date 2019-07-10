<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="13" :lg="16" :xl="16">
        <el-row>
          <el-col :span="24">
            <el-button-group class="BTN">
              <el-button class="BTN-GROUP" type="danger" v-on:click="getProducts(8)">ALIMENTOS</el-button>
              <el-button class="BTN-GROUP" type="warning" v-on:click="getProducts(10)">BEBIDAS</el-button>
              <el-button class="BTN-GROUP" type="primary" v-on:click="getProducts(15)">OTROS</el-button>
            </el-button-group>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="container-products">
          <div v-for="(product, index) in products" :key="index">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="3">
              <Product
                :nameItem="product.name.first"
                :urlImage="product.picture.medium"
                @click.native="addProduct(JSON.stringify(product))"
              />
            </el-col>
          </div>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="11" :lg="8" :xl="8">
        <el-card shadow="never">
          <div slot="header">
            <el-row type="flex" justify="space-between" style="align-items: center;">
              <div>TICKET</div>
              <el-button v-if="ticket" type="danger" size="small">CANCELAR</el-button>
            </el-row>
          </div>
          <template v-if="ticket == false">
            <div>
              <h3 style="text-align:center;">Ningun producto seleccionado</h3>
              {{ test }}
            </div>
          </template>
          <template v-if="ticket == true">
            <div v-for="(productTicket, index) in productsTicket" :key="index">
              <ListItem :nameProduct="productTicket.nameProduct" :price="productTicket.price" />
              <br />
            </div>
          </template>
        </el-card>
        <el-button class="btn-full" :disabled="!ticket" type="success">COBRAR</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Product from "@/components/Global/Product";
import ListItem from "@/components/Global/ListItem";
export default {
  name: "Orders",
  components: { Product, ListItem },
  data() {
    return {
      products: []
    };
  },
  computed: mapState({
    ticket: state => state.order.ticket,
    productsTicket: state => state.order.productsTicket,
    test: state => state.order.test
  }),
  created: function() {
    this.getProducts(8);
  },
  methods: {
    getProducts: async function(category) {
      await this.$http
        .get(`https://randomuser.me/api/?results=` + category)
        .then(response => {
          this.products = response.data.results;
        });
    },
    addProduct(product) {
      this.$store.commit('addProductToTicket', JSON.parse(product))
      console.log(JSON.parse(product));
    }
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.container-products {
  overflow: auto;
  height: 580px;
}
.BTN {
  width: 100%;
}
.btn-full {
  width: 100%;
}
.BTN-GROUP {
  width: 33.3444444%;
}
</style>


