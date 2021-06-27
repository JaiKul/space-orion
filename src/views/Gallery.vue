<template>
  <v-container class="brown lighten-4 my-4 rounded-lg elevation-12">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ pageTitle }}</v-card-title>
          <v-card-text>
            {{ pageText }}
            <v-container class="mt-4 pa-0">
              <v-row dense>
                <v-col v-for="(album, index) in albums" :key="album.title">
                  <v-card
                    height="154px"
                    width="154px"
                    class="brown lighten-5 pa-1 mx-auto"
                    @click="albumSelected = index"
                  >
                    <v-img
                      :src="album.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
                      height="146px"
                      width="146px"
                    >
                      <v-card-title
                        v-text="album.title"
                        class="album-title text-body-1"
                      ></v-card-title>
                    </v-img>
                  </v-card>
                </v-col>
                <template v-if="selectedAlbum">
                  <v-col cols="12">
                    <div :id="selectedAlbum.title" class="text-h6 mt-4">
                      {{ selectedAlbum.title }}
                    </div>
                  </v-col>
                  <v-col
                    v-for="(photoUrl, index) in selectedAlbum.photos"
                    :key="index"
                  >
                    <v-card
                      height="154px"
                      width="154px"
                      class="brown lighten-5 pa-1 album-photo"
                      @click="onPhotoCardClick(index)"
                    >
                      <v-img
                        :src="photoUrl"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
                        height="146px"
                        width="146px"
                      >
                      </v-img>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <vue-gallery-slideshow
                      :images="selectedAlbum.photos"
                      :index="index"
                      @close="index = null"
                    ></vue-gallery-slideshow>
                  </v-col>
                </template>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "Gallery",
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      pageTitle: "Photo Gallery",
      pageText:
        "The society comes together to celebrate many festivals/events throughout the year...",
      albums: [
        {
          title: "Ganesh Utsav 2019",
          src: "./photos/Ganesh Utsav 2019/thumbnail.jpg",
          photos: [
            "./photos/Ganesh Utsav 2019/DSCF6029.jpg",
            "./photos/Ganesh Utsav 2019/DSCF6031.jpg",
            "./photos/Ganesh Utsav 2019/DSCF6043.jpg",
            "./photos/Ganesh Utsav 2019/DSCF6072.jpg",
            "./photos/Ganesh Utsav 2019/DSCF6073.jpg",
            "./photos/Ganesh Utsav 2019/DSCF6113.jpg",
          ],
        },
        {
          title: "Republic Day 2021",
          src: "./photos/Flag Hoisting 26 Jan 2021/thumbnail.jpg",
          photos: [
            "./photos/Flag Hoisting 26 Jan 2021/IMG-20210126-WA0007.jpg",
            "./photos/Flag Hoisting 26 Jan 2021/IMG-20210126-WA0011.jpg",
            "./photos/Flag Hoisting 26 Jan 2021/IMG-20210126-WA0013.jpg",
            "./photos/Flag Hoisting 26 Jan 2021/IMG-20210126-WA0014.jpg",
          ],
        },
        {
          title: "Environment Day",
          src: "./photos/Environment Day/thumbnail.jpg",
          photos: [
            "./photos/Environment Day/IMG-20200605-WA0012.jpg",
            "./photos/Environment Day/IMG-20200605-WA0020.jpg",
            "./photos/Environment Day/IMG-20200605-WA0026.jpg",
            "./photos/Environment Day/IMG-20200605-WA0032.jpg",
            "./photos/Environment Day/IMG-20200605-WA0014.jpg",
            "./photos/Environment Day/IMG-20200605-WA0023.jpg",
            "./photos/Environment Day/IMG-20200605-WA0029.jpg",
            "./photos/Environment Day/IMG-20200605-WA0034.jpg",
            "./photos/Environment Day/IMG-20200605-WA0016.jpg",
            "./photos/Environment Day/IMG-20200605-WA0024.jpg",
            "./photos/Environment Day/IMG-20200605-WA0031.jpg",
            "./photos/Environment Day/IMG-20200605-WA0040.jpg",
          ],
        },
        {
          title: "Open Gym",
          src: "./photos/Open Gym/thumbnail.jpg",
          photos: [
            "./photos/Open Gym/IMG_20201019_145417.jpg",
            "./photos/Open Gym/IMG_20201025_170249.jpg",
            "./photos/Open Gym/IMG_20201025_170407.jpg",
            "./photos/Open Gym/IMG-20201019-WA0035.jpg",
            "./photos/Open Gym/IMG_20201025_164030.jpg",
            "./photos/Open Gym/IMG_20201025_170352.jpg",
            "./photos/Open Gym/IMG_20201025_170433.jpg",
          ],
        },
      ],
      albumSelected: null,
      index: null,
    };
  },
  computed: {
    selectedAlbum() {
      return this.albums[this.albumSelected];
    },
  },
  methods: {
    onPhotoCardClick(index) {
      this.index = index;
    },
  },
};
</script>
<style>
.v-card__title.album-title {
  word-break: break-word;
}
.album-photo {
  background-size: contain;
  cursor: pointer;
}
</style>
