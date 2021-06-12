<template>
  <v-container class="brown lighten-4 my-4 rounded-lg elevation-12">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{ pageTitle }}</v-card-title>
          <v-card-text>
            <div>
              <iframe
                class="elevation-6 ml-auto mr-auto"
                :src="googleMapIframeSrc"
                :height="mapHeight"
                style="border: none; width: 100%"
                allowfullscreen=""
                loading="lazy"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-list three-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon large>mdi-mailbox-open</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold my-2">
                  {{ name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  v-for="(addressLine, index) in address"
                  :key="index"
                >
                  {{ addressLine }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-list>
            <div v-for="(item, index) in contactDetails" :key="index">
              <v-list-item :href="item.link">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider v-if="index < contactDetails.length - 1"></v-divider>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      pageTitle: "Where are we located?",
      name: "Space Orion Co. Hsg Society Ltd.",
      address: [
        "near Dutt Mandir bus stop,",
        "Nashik Road,",
        "Nashik, Maharashtra - 422101",
      ],
      contactDetails: [
        {
          icon: "mdi-gmail",
          text: "spaceorionresidents@gmail.com",
          link: "mailto:spaceorionresidents@gmail.com",
        },
        {
          icon: "mdi-phone-classic",
          text: "(+91) 253 1234 5678",
          link: "tel:+9125312345678",
        },
      ],
      googleMapIframeSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1875.12765889186!2d73.83594902612936!3d19.95576213013928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x30bfde48b5169482!2sSpace%20Orion!5e0!3m2!1sen!2sin!4v1623484183056!5m2!1sen!2sin",
    };
  },
  computed: {
    mapHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 300;
        case "sm":
          return 450;
        default:
          return 600;
      }
    },
  },
};
</script>
