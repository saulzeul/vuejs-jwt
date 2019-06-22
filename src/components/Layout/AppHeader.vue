<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="14" align="left">
                {{ empresa }}
            </el-col>
            <el-col :span="10" align="right">
                <el-row>
                    <el-col :xs="12" :sm="19" :md="20" :lg="21" :xl="22" align="right"><el-button type="primary"><icon icon="bell"/></el-button></el-col>
                    <el-col :xs="12" :sm="5" :md="4" :lg="3" :xl="2" align="right"><router-link to="/home"><el-button type="danger" ><icon icon="sign-out-alt"/></el-button></router-link></el-col>
                </el-row>
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