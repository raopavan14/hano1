<script setup>
import card from '../components/card.vue';
import {ref} from 'vue';

const items=ref([{id:1,timming:12.30,info:null,registration:2,time:2.30},
{id:2,timming:10.30,info:{ name:'pavan',task:'learning vue'},registration:5,time:4.30},
{id:3,timming:11.30,info:{ name:'pavan1',task:'learning vue1'},registration:1,time:3.30},
{id:4,timming:11.30,info:null,registration:1,time:3.30} ])


function missinginfo(info){
    let count=0;
    for (const item of items.value){
        if(item.info==null){
        count=count+1;
    }

    } 
    return count;
}
</script>
<template>
<div class="col-9 w-100 right-side">
              <div class="container ">
                <div class="row text-center ">

                  <h5 class="justify-content text-center mt-4">Week 47</h5>
              </div>
              <div class="d-flex justify-content-between mt-2">
                  <h6 class="mt-3 text-muted "> Week Total: 32:00h</h6>
                  <div class="dropdown">
                    <a class="btn shadow" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span><i class="bi bi-square-half"></i></span>
                      Day View
                      <span><i class="bi bi-chevron-down"></i></span>
                    </a>
                  
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="monthview.html"><span><i class="bi bi-grid-1x2-fill"></i></span>Month View</a></li>
                      
                    </ul>
                  </div>
              </div>
              
              <h5 class="mt-3 text-muted">December 2023</h5>
          <div class="mt-5">                
          <div class="row">
              <div class="row align-items-center">
                  <div class="col text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                      </svg>
                  </div>

      <div class="col">
       <button class="pagebutton1 d-flex flex-column align-items-center btn btn-outline-light">
        <span class="text-dark">20</span>
        <span class="text-dark">Mo</span>
      </button>
    </div>
  <div class="col">                        
      <button class="pagebutton1 d-flex flex-column align-items-center btn btn-outline-light">
      <span class="text-dark">20</span>
      <span class="text-dark">Mo</span>
    </button></div>
  <div class="col">                        
      <button class="pagebutton1 d-flex flex-column align-items-center btn btn-outline-light">
      <span class="text-dark">21</span>
      <span class="text-dark">Tu</span>
    </button></div>
  <div class="col">                        
      <button class="pagebutton1 d-flex flex-column align-items-center btn btn-outline-light">
      <span class="text-dark">22</span>
      <span class="text-dark">We</span>
    </button></div>
  <div class="col">                        
      <button class="pagebutton1 d-flex flex-column align-items-center btn btn-outline-light position-relative ">
      <span class="text-dark">23</span>
      <span class="text-dark">Th</span>
      <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-warning  p-1"><span class="visually-hidden">unread messages</span></span>

    </button>
</div>
  <div class="col">                        
      <button class="pagebutton1 d-flex flex-column align-items-center btn btn-outline-light  position-relative">
      <span class="text-dark">24</span>
      <span class="text-dark">Fr</span>
      <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-warning  p-1"><span class="visually-hidden">unread messages</span></span>
    </button></div>

  <div class="col">                        
      <button class="d-flex flex-column align-items-center btn btn-outline-light">
      <span class="text-dark">26</span>
      <span class="text-dark">Sa</span>
    </button></div>
    <div class="col">                        
      <button class="d-flex flex-column align-items-center btn btn-outline-light">
      <span class="text-dark">27</span>
      <span class="text-dark">Su</span>
    </button></div>


    <div class="col text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>
  </div>



</div>

</div>
<div class="col-lg-12 bg-warning-subtle  rounded-2 p-2 shadow-sm  mt-5">
  <span><i class="bi bi-exclamation-triangle pl-4 text"></i></span> Incomplete registration : <b>{{ missinginfo(items) }}</b>
</div>


</div>



</div>
                
<div v-for="item in items" :key="item.id"  >
  <card :timming="item.timming" :info="item.info" :registration="item.registration" :time="item.time">
  </card>
</div>

</div>

</template>


<style scoped>


</style>