<script setup>
const props = defineProps(['timming','info','registration','time'])
function infoPresent() {

  return props.info==null;
}
</script>
<template>
<div class="container  d-flex shadow my-3 p-2 rounded-3 justify-content-between">
                        <div class="col-4 border-start border-5 ps-2" :class="{'border-warning':infoPresent(),'border-primary':!infoPresent()}">
                    
                            <p class="fw-bold m-1">{{ timming }}</p>
                            <span v-if="info==null"><p class="text-warning m-1 ">missing info</p></span>
                            <span v-else><p>{{ info.name }}</p>
                            <p>{{ info.task }}</p></span>
                            <p class="text-body-tertiary m-1"><i class="bi bi-folder-plus"></i> {{ registration }} registeration</p>
                        </div>
                        <div class="col-2  text-end align-self-center">
                            <p class=" fw-bold me-3"><span><i class="bi bi-exclamation-triangle me-2 " :class="{'text-warning':infoPresent(),'text-primary':!infoPresent()}"></i></span>{{ time }}</p>
                        </div>
                    </div>


</template>

<style scoped>


</style>
