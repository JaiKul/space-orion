<template>
  <v-container class="brown lighten-4 my-4 rounded-lg elevation-12">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Society Management</v-card-title>
          <v-card-text>
            <p v-for="(paragraphText, index) in paragraphs" :key="index">
              {{ paragraphText }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <span>Committee Members</span>
            <!-- <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field> -->
          </v-card-title>
          <v-data-table
            :headers="tableHeaders"
            :items="memberDetails"
            :items-per-page="15"
          >
            <template v-slot:item.number="{ item }">
              <a
                :href="`tel:${item.number}`"
                class="v-list-item v-list-item--link theme--light pa-0"
              >
                {{ item.formattedNumber }}
              </a>
            </template>
          </v-data-table>
          <v-card-text v-if="tableFootnotes.length">
            <ul>
              <li v-for="(footnote, index) in tableFootnotes" :key="index">
                {{ footnote }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Management",
  data() {
    return {
      paragraphs: [
        'The society is managed by a "management committee" constituted under the laws governing Cooperative Housing Societies under Maharashtra Cooperative Societies Act and Model Bylaws of Cooperative Housing Societies in state of Maharashtra. The society has been registered in year 2014 with the Department of Cooperation, Maharashtra under Registration Number NSK/(NSK)/HSG/(TC)/5587/2014.',
        // "The present management committee took charge in June 2016 and its five year term would end in June 2021.",
        "Society work is managed by a Manager, Accounts Manager, Maintenance Supervisors and Security Supervisors. Security and Housekeeping resources are outsourced from outside contractors.",
      ],
      memberDetails: [
        {
          name: "Govind Chimtaman Gore",
          particulars: "Chairman",
        },
        {
          name: "Suresh Nivrutti Shelke",
          particulars: "Secretary",
        },
        {
          name: "Sunil Ripudaman Kulshrestha",
          particulars: "Joint Secretary",
        },
        {
          name: "Ramdas Kisan Adke",
          particulars: "Treasurer",
        },
        {
          name: "Shankar Siddeshwar Aglave",
          particulars: "Joint Treasurer",
        },
        {
          name: "Ram Prakash Awasthi",
          particulars: "MC Member",
        },
        {
          name: "Devendra Prabhu Mashalkar",
          particulars: "MC Member",
        },
        {
          name: "Tulashidas Sitaram Nagare",
          particulars: "MC Member",
        },
        {
          name: "Mrs. Mayura Sukrut Rahalkar",
          particulars: "MC Member, women representative",
        },
        {
          name: "Sanjay Prabhakar Dikshit",
          particulars: "MC Member",
        },
        {
          name: "Mrs. Anjali Amit Khandekar",
          particulars: "MC Member, women representative",
        },
        {
          name: "Mandar Ashok Harshe",
          particulars: "MC Member",
        },
        {
          name: "Nitin Wasudeorao Chaudhary",
          particulars: "MC Member",
        },
        {
          name: "Avadh Sanjay Janardhan",
          particulars: "MC Member",
        }
      ],
      search: "",
      tableHeaders: [
        {
          text: "Name",
          value: "name",
          align: "start",
          sortable: false,
        },
        {
          text: "Particulars",
          value: "particulars",
          sortable: false,
        },
      ],
      tableFootnotes: [
        // "In case of any water related problem, please contact Security person.",
        // "In case of any housekeeping related problem, please contact Supervisor.",
      ],
    };
  },
};
</script>
