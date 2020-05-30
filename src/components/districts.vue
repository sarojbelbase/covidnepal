<template>
  <div class="districts container">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="districts-stat" v-else>
      <h2 class="covid-alt py-4">District Statistics</h2>
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="district in districts" :key="district.province_id">
          <div class="card semi-darker mb-3">
            <div class="card-body text-left">
              <h4 class="card-title covid-text text-center mb-4">{{ district.province_name }}</h4>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">CONFIRMED CASES</span>
                  <span class="float-right">{{ district.total_positive | padding }}</span>
                </h4>
              </div>

              <div class="progress probar mb-3">
                <div
                  class="progress-bar bg-warning"
                  :style=" percentTest(district.total_positive, district.total_positive)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">RECOVERED CASES</span>
                  <span class="float-right">{{ district.total_recovered | padding }}</span>
                </h4>
              </div>

              <div class="progress probar mb-3">
                <div
                  class="progress-bar bg-success"
                  :style=" percentTest(district.total_recovered, district.total_positive)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">DEATH CASES</span>
                  <span class="float-right">{{ district.total_death | padding }}</span>
                </h4>
              </div>

              <div class="progress probar mb-3">
                <div
                  class="progress-bar bg-danger"
                  :style=" percentTest(district.total_death, district.total_positive)"
                ></div>
              </div>

              <router-link
                :to="{
                  name: 'provincedetail',
                  params: { province_id: district.province_id }
                }"
              >
                <h6 class="text-info float-right small font-weight-bold mt-3">SEE MORE</h6>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "districts",
  props: ["province_name"],
  data() {
    return {
      districts: [],
      loading: true
    };
  },
  methods: {
    percentTest: function(sample, total) {
      return "width: " + Math.round((sample / total) * 100) + "%;";
    }
  },
  beforeCreate() {
    this.loading = true;
  },
  created() {
    axios
      .get("https://api.nepalcovid19.org/state-district-wise.json")
      .then(response => {
        console.log(response.data);
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = true;
      });
  }
};
</script>

<style>
.goback {
  cursor: pointer;
}
</style>
