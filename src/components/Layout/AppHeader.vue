<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-button type="primary" @click="showAside">MENU</el-button>                                 
            </el-col>
            <el-col :span="12" align="middle">
                {{ empresa }}
            </el-col>
            <el-col :span="6" align="right">
                <router-link to="/home"><el-button type="danger" >SALIR</el-button></router-link> 
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            empresa: 'WISH BURGER'
        }
    },
    methods: {
        showAside () {
            this.$store.dispatch('showAside');
        }
    }
}
</script>