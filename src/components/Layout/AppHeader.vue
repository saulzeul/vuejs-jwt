<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="14" align="left">
                {{this.$route.meta}}
            </el-col>
            <el-col :span="10" align="right">
                <el-row>
                    <el-col :xs="12" :sm="19" :md="20" :lg="21" :xl="22" align="right"><el-button type="primary" size="small"><icon icon="bell"/></el-button></el-col>
                    <el-col :xs="12" :sm="5" :md="4" :lg="3" :xl="2" align="right"><router-link to="/home"><el-button type="danger" size="small"><icon icon="sign-out-alt"/></el-button></router-link></el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods: {
        showAside () {
            this.$store.dispatch('showAside');
        }
    }
}
</script>