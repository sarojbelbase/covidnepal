<template>
  <div class="maps">
    <l-map
      :center="[28.082, 84.078]"
      :zoom="7"
      style="height: 90vh; background-color: #0c0c0d; font-family: 'Source Sans Pro';"
      :options="mapOptions"
    >
      <choropleth-layer
        :data="covidcases"
        title-key="name"
        id-key="name"
        :value="value"
        :extra-values="extraValues"
        geojson-id-key="district"
        :geojson="geodata"
        :color-scale="colorScale"
        strokeColor="333333"
        currentStrokeColor="999999"
        :currentStrokeWidth="2"
        :strokeWidth="2"
      >
        <template slot-scope="props">
          <info-control
            :item="props.currentItem"
            :unit="props.unit"
            title="District-Wide Covid Cases"
            placeholder="Hover over districts to see stats."
            position="topright"
          ></info-control>
        </template>
      </choropleth-layer>
    </l-map>
  </div>
</template>

<script>
import { InfoControl, ChoroplethLayer } from "vue-choropleth";
import nepalGeojson from "../assets/data/nepal.json";
import { LMap } from "vue2-leaflet";
import axios from "axios";

export default {
  name: "maps",
  metaInfo() {
    return {
      title: "District-Level Map Views",
      meta: [
        {
          name: "description",
          content: "Map viewing covidcases inside nepal."
        }
      ]
    };
  },
  components: {
    LMap,
    "info-control": InfoControl,
    "choropleth-layer": ChoroplethLayer
  },
  data() {
    return {
      covidcases: [],
      geodata: [],
      colorScale: [
        "#333333",
        "#252525",
        "#525252",
        "#737373",
        "#969696",
        "#bdbdbd",
        "#d9d9d9",
        "#f0f0f0",
        "#f1f1f1"
      ],
      value: {
        key: "cases",
        metric: "Positive Cases"
      },
      extraValues: [
        {
          key: "recovered",
          metric: "Recovered Cases"
        },
        {
          key: "deaths",
          metric: "Death Cases"
        }
      ],
      mapOptions: {
        attributionControl: false
      }
    };
  },
  mounted() {
    this.geodata = nepalGeojson;
  },
  methods: {
    beautify: function(any_number) {
      if (typeof any_number === "undefined") {
        return "0";
      } else {
        return any_number;
      }
    }
  },
  created() {
    axios
      .get("https://whatsthemiti.herokuapp.com/api/covid/districts/all")
      .then(response => {
        Object.values(response.data).forEach(district => {
          this.covidcases.push({
            active: this.beautify(district.active),
            cases: this.beautify(district.cases),
            recovered: this.beautify(district.recovered),
            deaths: this.beautify(district.deaths),
            name: district.name,
            id: district.id
          });
        });
      });
  }
};
</script>

<style>
@import "../../node_modules/leaflet/dist/leaflet.css";
</style>