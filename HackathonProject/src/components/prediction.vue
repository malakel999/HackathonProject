<template>
    <div>
      <div class="flex center justify-center">
        <div class="bg-black p-4 rounded-lg">
            <div class="relative bg-inherit">
      <select v-model="selectedNeo" id="neoName" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600">
        <option value="" disabled selected>Select NEO</option>
        <option value="UX">UX</option>
        <option value="BP">BP</option>
        <option value="UR">UR</option>
      </select>
      <label for="neoName" class="absolute cursor-text left-0 -top-3 text-sm text-gray-200 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Select NEO</label>
    </div>
        </div>
        <div class="bg-black p-4 rounded-lg">
            <div class="relative bg-inherit">
                <input type="number" v-model="year" id="yearInput" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Enter Year:"/><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-200 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter Year:</label>
            </div>
        </div>
      </div>
      <!-- <label for="neoName">Select NEO:</label>
      <select v-model="selectedNeo" id="neoName">
        <option value="UX">UX</option>
        <option value="BP">BP</option>
        <option value="UR">UR</option>
      </select>
      <div class="bg-white p-4 rounded-lg">
        <div class="relative bg-inherit" >
            <input type="text" id="username" name="username" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Type inside me</label>
        </div>
    </div> -->
  
      <!-- <label for="yearInput">Enter Year:</label>
      <input type="number" v-model="year" id="yearInput" /> -->
  
      <button class="bg-blue-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2" @click="getPrediction">Get Prediction</button>
  
      <div v-if="prediction">
        <h3 class="text-2xl font-semibold text-white   ">Prediction for {{ selectedNeo }} in {{ year }}</h3>
        <p class="font-semibold text-gray-200">Absolute Magnitude: {{ prediction.absolute_magnitude }}</p>
        <p class="font-semibold text-gray-200">Estimated Diameter Min: {{ prediction.estimated_diameter_min }}</p>
        <p class="font-semibold text-gray-200">Estimated Diameter Max: {{ prediction.estimated_diameter_max }}</p>
        <p class="font-semibold text-gray-200 ">Potentially Hazardous: {{ prediction.is_potentially_hazardous ? 'Yes' : 'No' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedNeo: 'UX',
        year: null,
        prediction: null,
        neoData: {
          UX: {
            2035: {
              absolute_magnitude: 15.9779,
              estimated_diameter_min: 0.6758,
              estimated_diameter_max: 3.1803,
              is_potentially_hazardous: 0.0
            }
          },
          BP: {
            2050: {
              absolute_magnitude: 15.9799,
              estimated_diameter_min: 1.1321,
              estimated_diameter_max: 2.5564,
              is_potentially_hazardous: 0.0
            }
          },
          UR: {
            2085: {
              absolute_magnitude: 15.9800,
              estimated_diameter_min: 1.1391,
              estimated_diameter_max: 2.5471,
              is_potentially_hazardous: 0.0
            }
          }
        }
      };
    },
    methods: {
      getPrediction() {
        const yearPrediction = this.neoData[this.selectedNeo][this.year];
        if (yearPrediction) {
          this.prediction = yearPrediction;
        } else {
          this.prediction = null;
          alert("No prediction data available for this year.");
        }
      }
    }
  };
  </script>
  