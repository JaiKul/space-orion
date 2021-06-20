<template>
  <v-container class="brown lighten-4 my-4 rounded-lg elevation-12">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Gallery</v-card-title>
          <v-card-text>
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          src: require("../assets/photos/DSCF6029.jpg"),
        },
        {
          src: require("../assets/photos/DSCF6031.jpg"),
        },
        {
          src: require("../assets/photos/DSCF6043.jpg"),
        },
        {
          src: require("../assets/photos/DSCF6072.jpg"),
        },
        {
          src: require("../assets/photos/DSCF6073.jpg"),
        },
        {
          src: require("../assets/photos/DSCF6113.jpg"),
        },
      ],
    };
  },
}
</script>
