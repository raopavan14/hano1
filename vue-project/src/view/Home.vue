<script setup>
import card from '../components/card.vue';
import {onMounted, ref} from 'vue';
import $ from 'jquery'

const items=ref([{id:1,timming:12.30,info:null,registration:2,time:2.30},
{id:2,timming:10.30,info:{ name:'pavan',task:'learning vue'},registration:5,time:4.30},
{id:3,timming:11.30,info:{ name:'pavan1',task:'learning vue1'},registration:1,time:3.30} ])


const info=ref({name:'',task:''})
$("exampleModal").on('hidden.bs.modal',()=>{test.value = "test working"})
const text = ref({id:0,timming:0,info:null,registration:0,time:0})

function addItem(){
  text.value.info=info.value
  items.value.push(text.value);
  text.value = {id:0,timming:0,info:null,registration:0,time:0};
  info.value={name:'',task:''};
}
</script>
<template>
    <div class="col-9 w-100 right-side">
          <nav class="navbar">
            <div class="container">
              <p class="date">15.11.2023</p>
              <form class="d-flex" role="search">
                <a class="btn btn-outline-dark me-2" data-bs-target="#exampleModal"  data-bs-toggle="modal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"
                    />
                  </svg>
                  Add New
                </a>
                <a class="btn btn-dark"  href="homeOnClick.html" role="submit"
                  >Start Timer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                    />
                    <path
                      d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
                    /></svg></a>
              </form>
            </div>
          </nav>
  <div ref="inputModal" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add cards</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class=" modal-body ">
        <div class="d-flex flex-column gap-3 ">
        <input v-model="text.name" type="text" class="" placeholder="Enter your name" >
        <input v-model="text.timming" type="number" class="" placeholder="enter the timing">
        <input v-model="text.registration" type="number" class="" placeholder="registartion">
        <input v-model="info.name" type="text" class="" placeholder="enter name">
        <input v-model="info.task" type="text" class="" placeholder="enter task">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addItem">Add </button>
      </div>
    </div>
  </div>
</div>


          <div class="card card1">
            <div class="card-header">
              <p class="subt">Total Hours December</p>
              <div class="ch1 d-flex">
                <h2 style="font-size: 24px">116,30</h2>
                <p class="num" style="font-size: 16px">/240</p>
                <div class="container">
                  <div
                    style="width: 50%; margin-left: 500px"
                    class="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="46"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="progress-bar bg-dark" style="width: 46%"></div>
                  </div>
                </div>
                <p style="margin-left: 5px" class="text">46%</p>
              </div>
            </div>
            <div class="card-body d-flex">
              <div class="col-10 card-body-left">
                <p style="margin-left: -10px">Billable Hours</p>
                <p style="margin-left: -10px">Non-billable hours</p>
              </div>
              <div class="col-2 float-right">
                <p style="margin-right: 1px; text-align: right">116,30</p>
                <p style="text-align: right">00,00</p>
              </div>
            </div>
          </div>
          </div>
          

<div v-for="item in items" :key="item.id"  >
  <card :timming="item.timming" :info="item.info" :registration="item.registration" :time="item.time">
  </card>
</div>
</template>
<style scoped>


</style>