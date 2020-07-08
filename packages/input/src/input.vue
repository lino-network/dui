<template>
    <div>
        <input v-if="type!='textarea'" :type="type">
        <textarea v-else name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>
<script>
export default {
    name: 'dInput',
    props:{
        type:{
            type:String,
            defaulf:'text'
        }
    }
}
</script>
<style>
</style>