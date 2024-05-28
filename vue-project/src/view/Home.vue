<script setup>

</script>
<template>
    <div class="col-9 w-100 right-side">
          <nav class="navbar">
            <div class="container">
              <p class="date">15.11.2023</p>

              <form class="d-flex" role="search">
                <button class="btn btn-outline-dark me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"
                    />
                  </svg>
                  Add New
                </button>
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
          
</template>
<style scoped>


</style>