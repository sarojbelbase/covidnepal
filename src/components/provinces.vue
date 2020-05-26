<template>
  <div class="provinces container">
    <div class="loader" v-if="loading">
      <div class="spinner-border text-warning" role="status"></div>
    </div>
    <div class="provinces-stat" v-else>
      <h2 class="covid-alt py-4">Province Statistics</h2>
      <div class="row">
        <div
          class="col-sm-6 col-md-4"
          v-for="state in state_cases"
          :key="state.province_id"
        >
          <div class="card semi-darker mb-3">
            <div class="card-body text-left">
              <h4 class="card-title covid-text text-center mb-4">
                {{ state.province_name }}
              </h4>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">CONFIRMED CASES</h6>
                <h6 class="text-success float-right">
                  {{ state.total_positive | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">RECOVERED CASES</h6>
                <h6 class="text-warning float-right">
                  {{ state.total_recovered | padding }}
                </h6>
              </div>
              <div class="clearfix">
                <h6 class="covid-confirmed float-left">DEATH CASES</h6>
                <h6 class="text-danger float-right">
                  {{ state.total_death | padding }}
                </h6>
              </div>
              <router-link
                :to="{
                  name: 'provincedetail',
                  params: { province_id: state.province_id }
                }"
              >
                <h6 class="text-info float-right small font-weight-bold mt-3">
                  SEE MORE
                </h6>
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
  beforeCreate() {
    this.loading = true;
  },
  created() {
    axios
      .get("https://covidapi.mohp.gov.np/api/v1/stats/?province=all")
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

<style></style>
