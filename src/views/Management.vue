<template>
  <v-container class="brown lighten-4 my-4 rounded-lg elevation-12">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Society Management</v-card-title>
          <v-card-text>
            <p v-for="(paragraphText, index) in paragraphs" :key="index">{{ paragraphText }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            <span>Important phone numbers</span>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="tableHeaders" :items="phoneNumbers" :search="search">
            <template v-slot:item.number="{ item }">
              <a :href="`tel:${item.number}`" class="v-list-item v-list-item--link theme--light pa-0">
                {{ item.formattedNumber }}
              </a>
            </template>
          </v-data-table>
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
        "The society is managed by a \"management committee\" constituted under the laws governing Cooperative Housing Socities under Maharashtra Cooperative Societies Act and Model Bylaws of Cooperative Housing Societies in state of Maharashtra. The society has been registered in year 2016 with the Department of Cooperation, Maharashtra under Registration Number.",
        "The present management committee took charge in June 2016 and its five year term would end in June 2021.",
        "Society work is managed by a Manager, Accounts Manager, Maintenance Supervisors and Security Supervisors. Security and Housekeeping resources are outsourced from outside contractors.",
      ],
      phoneNumbers: [{
          name: "Sunil R. Warungase",
          number: "+918888435820",
          formattedNumber: "(+91) 888 843 5820",
          particulars: "Accounts & Administration",
        },
        {
          name: "Mahesh Ashok Jadhav",
          number: "+918788332863",
          formattedNumber: "(+91) 878 833 2863",
          particulars: "Supervisor",
        },
        {
          name: "Ravi Jadhav",
          number: "+919689093384",
          formattedNumber: "(+91) 968 909 3384",
          particulars: "Supervisor",
        },
        {
          name: "Asif Khan",
          number: "+919011172317",
          formattedNumber: "(+91) 901 117 2317",
          particulars: "Security - Day - 8 a.m. to 8 p.m.",
        },
        {
          name: "Suresh Salve",
          number: "+917558620287",
          formattedNumber: "(+91) 755 862 0287",
          particulars: "Security - Day - 8 a.m. to 8 p.m.",
        },
        {
          name: "Holekar",
          number: "+919370376879",
          formattedNumber: "(+91) 937 037 6879",
          particulars: "Security - Night - 8 p.m. to 8 a.m",
        },
        {
          name: "Rajendra Nikale",
          number: "+917387388063",
          formattedNumber: "(+91) 738 738 8063",
          particulars: "Security - Night - 8 p.m. to 8 a.m",
        },
      ],
      search: "",
      tableHeaders: [{
          text: "Name",
          value: "name",
          align: "start",
          sortable: false,
        },
        {
          text: "Phone number",
          value: "number",
          sortable: false,
        },
        {
          text: "Particulars",
          value: "particulars",
          sortable: false,
        },
      ],
    };
  },
};
</script>
