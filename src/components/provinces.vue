<template>
  <div class="provinces container">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="provinces-stat" v-else>
      <h2 class="covid-alt py-4">Province Statistics</h2>
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="(state,index) in state_cases" :key="index">
          <div class="card neu my-3 mx-1">
            <div class="card-body text-left">
              <h4 class="card-title covid-text text-center mb-4">{{state.name}}</h4>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">CONFIRMED CASES</span>
                  <span class="float-right">{{ state.cases | padding }}</span>
                </h4>
              </div>

              <div class="progress probar mb-3">
                <div
                  class="progress-bar bar-warning"
                  :style=" percentTest(state.cases, state.cases)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">RECOVERED CASES</span>
                  <span class="float-right">{{ state.recovered | padding }}</span>
                </h4>
              </div>

              <div class="progress probar mb-3">
                <div
                  class="progress-bar bar-success"
                  :style=" percentTest(state.recovered, state.cases)"
                ></div>
              </div>

              <div class="clearfix mb-2">
                <h4 class="small font-weight-bold covid-text text-uppercase">
                  <span class="float-left">DEATH CASES</span>
                  <span class="float-right">{{ state.deaths | padding }}</span>
                </h4>
              </div>

              <div class="progress probar mb-3">
                <div
                  class="progress-bar bar-danger"
                  :style=" percentTest(state.deaths, state.cases)"
                ></div>
              </div>

              <router-link
                :to="{
                  name: 'provincedetail',
                  params: { province_id: index }
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
  name: "provinces",
  data() {
    return {
      state_cases: [],
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
      .get("https://whatsthemiti.herokuapp.com/api/covid/provinces")
      .then(response => {
        this.state_cases = response.data;
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
.probar {
  height: 6px !important;
  background: -o-linear-gradient(205deg, #1a1919, #0b0b0c);
  background: linear-gradient(245deg, #1a1919, #0b0b0c);
}
</style>
