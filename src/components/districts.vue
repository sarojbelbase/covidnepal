<template>
  <div class="districts container">
    <div class="districts-stat">
      <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h4 class="covid-text text-uppercase">Districts</h4>
        <span class="covid-text text-uppercase font-weight-bold">
          <a @click="$router.go(-1)" class="text-info goback">GO BACK</a>
        </span>
      </div>
      <div class="row">
        <div v-if="loading">
          <div class="spinner-border text-danger my-5" role="status"></div>
        </div>
        <div class="col-sm-6 col-md-4" v-for="(district, index) in districts" :key="index" v-else>
          <sequential-entrance fromBottom>
            <div class="card neu my-3 mx-1">
              <div class="card-body text-left">
                <h4 class="card-title covid-text text-center mb-4">{{ district.name }}</h4>
                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">CONFIRMED CASES</span>
                    <span class="float-right">{{ district.cases | padding }}</span>
                  </h4>
                </div>

                <div class="progress probar mb-3">
                  <div
                    class="progress-bar bar-warning"
                    :style=" percentTest(district.cases, district.cases)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">RECOVERED CASES</span>
                    <span class="float-right">{{ district.recovered | padding }}</span>
                  </h4>
                </div>

                <div class="progress probar mb-3">
                  <div
                    class="progress-bar bar-success"
                    :style=" percentTest(district.recovered, district.cases)"
                  ></div>
                </div>

                <div class="clearfix mb-2">
                  <h4 class="small font-weight-bold covid-text text-uppercase">
                    <span class="float-left">DEATH CASES</span>
                    <span class="float-right">{{ district.deaths | padding }}</span>
                  </h4>
                </div>

                <div class="progress probar mb-3">
                  <div
                    class="progress-bar bar-danger"
                    :style=" percentTest(district.deaths, district.cases)"
                  ></div>
                </div>
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
  name: "districts",
  props: { pro_id: Number },
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
      .get(
        "https://whatsthemiti.herokuapp.com/api/covid/districts/" + this.pro_id
      )
      .then(response => {
        this.districts = response.data;
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
