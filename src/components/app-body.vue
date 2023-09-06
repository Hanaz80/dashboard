<template>
    <!-- body -->
    <div class=" px-5 col-md-10  ms-auto body">
  <div class="row ms-4 mt-4 ">
  <div class="col-4">
    <div class="card card1 " >
      <div class="card-body">
        <div class="d-flex  align-item-center mt-2">
        <h5 class="card-title">Website Traffic</h5>
        <a href="#" class="ms-auto " >More</a>
        </div>
        <img  class="ms-4" src="../assets/image1.png" alt="">
        <div class="d-flex ft1 ">
          <i class="bi bi-square-fill me-1"></i>
          <p>Social Media</p>
          <p class="ms-auto">78%</p>
        </div>
        <hr>
        <div class="d-flex ft2">
          <i class="bi bi-square-fill me-1"></i>
          <p>Organic Search</p>
          <p class="ms-auto">22%</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card card2 ">
      <div class="card-body">
        <div class="d-flex align-items-center ">
          <button class="btn bt">Full Report</button>
          <p class="ms-auto mt-2">/2023</p>
        </div>
        <div class="btn2 ">
          <button class="btn bt2 ">
            <div class="d-flex ">
              <div class="af">
          Download Report 
        </div>
        <div class="d-flex justify-content-center ms-5 bf">
          <i class="bi bi-file-earmark-arrow-down-fill mt-2" style="color:white"></i>
        </div>
        </div>
        </button>
        </div>
        
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="card card3 ">
      <div class="card-body ">
        <div class="d-flex align-items-center">
        <h5 class="card-title ">Bounce Rate</h5>
        <i class="bi bi-arrow-up-right-circle-fill ms-auto" ></i>
        </div>
        <div class="d-flex mm justify-content-center">
          <div class="cd3" id="cd3">
            <p>Mon</p>
            <h6>2</h6>
          </div>
          <div id="cd3" class="cd2">
            <p>Tue</p>
            <h6>3</h6>
          </div>
          <div id="cd3" class="cd3">
            <p>Wed</p>
            <h6>4</h6>
          </div>
        </div>
        <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
         <div class="d-flex" >
          <div style="border-right:1px solid black; padding-right: 40px;">
        <h1 class="ms-4">23%</h1>
          </div>
          <div class="ms-auto me-4">
            <h6>10%</h6>
            <p class="p2">Since last day</p>
          </div>
         </div>
      </div>
    </div>
  </div>
  <div class="col-4 mt-5">
    <div class="card card4">
      <div class="card-body">
        <div class="d-flex align-item-center mt-2 ">
          <i class="bi bi-reception-4" ></i>
          <h5>Roi</h5>
          <a class="ms-auto" href="#">Details</a>
        </div>
        <div class="mt-4" >
          <h2>283%</h2>
          <p>Return On Investment</p>
        </div>
      
      </div>
    </div>
  </div>
  <div class="col-4 mt-5">
    <div class="card card5">
      <div class="card-body">
        <div class="mt">
          <button class="btn ">Web Score With Al</button>
           
        </div>
      </div>
    </div>
  </div>
  <div class="col-4 mt-5">
    <div class="card card6">
      <div class="card-body">
        <h5 class="card-title mt-2">Customer Churn Rate</h5>
        <Bar id="myChart" :options="chartOptions" :data="chartData"  />  
      </div>
    </div>
  </div>
  <br>
  <br>

</div>

</div>


</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS,   BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register( BarElement, CategoryScale, LinearScale)
var barColors = ["#4d4f56","#fbf179","#4d4f56","#4d4f56"];
export default {
    name: 'BarChart',
    components: { Bar  },
    data() {
        return {
            chartData: {
                labels: [
                   "50-100",
                   "100-250",
                   "250-500",
                   ">5500"
                ],
                // type: "bar",
                datasets: [{
                    label: "Data One",
                    backgroundColor: barColors,
                    data: [11,13,6, 8,15],
                }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>