<template>
  <v-container class="brown lighten-4 my-4 rounded-lg elevation-12">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>{{ pageTitle }}</v-card-title>
          <v-list>
            <div v-for="(item, index) in list" :key="index">
              <v-list-item :href="item.link" target="_blank">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Notices Issued</v-card-title>
          <v-list>
            <div v-for="(item, index) in notices" :key="index">
              <v-list-item :href="item.link" target="_blank">
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Downloads",
  data() {
    return {
      pageTitle: "Society rules, intimations, notices",
      list: [
        {
          icon: "mdi-file-pdf",
          text: "Model Bye Laws",
          link: "./files/Model Bye Laws of Coop Housing Society New Flatowner Type 2-9-14.pdf",
        },
        {
          icon: "mdi-file-pdf",
          text: "Working Manual Bye Laws",
          link: "./files/Working_Manual_BYE LAWS -SPACE ORION SOCIETY-V(2).pdf",
        },
        {
          icon: "mdi-file-pdf",
          text: "Intimation to members",
          link: "./files/INTIMATION TO SPACE ORION MEMBERS.pdf",
        },
        {
          icon: "mdi-file-pdf",
          text: "Sticker Distribution",
          link: "./files/Sticket Distribution.pdf",
        },
      ],
      notices: [
        {
          icon: "mdi-file-pdf",
          text: "November 2020",
          link: "./files/Notice Nov 2020 -Whatsapp.pdf",
        },
        // {
        //   icon: "mdi-file-word",
        //   text: "July - August 2020",
        //   link: "./files/Notice July - Aug 2020.docx",
        // },
        {
          icon: "mdi-file-pdf",
          text: "June 2020",
          link: "./files/Notice 27 June 2020.pdf",
        },
      ],
    };
  },
};
</script>
