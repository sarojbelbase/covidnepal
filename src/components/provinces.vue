<template>
  <div class="provinces container-lg">
    <div class="provinces-stat">
      <h2 class="covid-alt py-4">
        <span>Province Statistics</span>
        <span>
          <ion-icon name="trending-up-outline" class="align-middle ml-1 covid-alt bold"></ion-icon>
        </span>
      </h2>
      <div class="loader" v-if="loading">
        <div class="spinner-border text-warning" role="status"></div>
      </div>
      <div class="row" v-else>
        <div class="col-sm-6 col-md-4" v-for="(state,index) in state_cases" :key="index">
          <sequential-entrance fromBottom>
            <div class="card neu my-3 p-3">
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
          </sequential-entrance>
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
  metaInfo() {
    return {
      title: "covidnepal | provinces",
      meta: [
        {
          name: "description",
          content: "give surface look on covidcases inside provinces."
        }
      ]
    };
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
