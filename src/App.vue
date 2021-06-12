<template>
  <v-app>
    <!-- Title bar -->
    <v-app-bar app color="brown" dark>
      <div class="d-flex align-center" @click="takeMeHome" style="cursor: pointer">
        <v-img
          alt="Space Orion Society Logo"
          class="shrink mr-2 grey lighten-5 rounded-circle"
          contain
          src="@/assets/images/logo.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title
          class="shrink mt-1 hidden-xs-only">
          Space Orion, Nashik
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="showDrawer=true"></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="showDrawer" app bottom temporary right>
      <v-list nav dense>
        <v-list-item-group
          v-model="selectedDrawerItemIndex"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="drawerItem in drawerItems"
            :key="drawerItem.text"
            :to="drawerItem.route"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ drawerItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ drawerItem.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Main page content -->
    <v-main class="main-content">
      <router-view />
    </v-main>
    <!-- Footer -->
    <v-footer app padless color="brown" dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Space Orion C. H. S.</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawerItems: [
      {
        icon: "mdi-home",
        text: "Home",
        route: "/",
      },
      {
        icon: "mdi-account-group",
        text: "Management",
        route: "management",
      },
      {
        icon: "mdi-image-multiple",
        text: "Gallery",
        route: "gallery",
      },
      {
        icon: "mdi-file-multiple",
        text: "Downloads",
        route: "downloads",
      },
      {
        icon: "mdi-card-account-mail",
        text: "Contact Us",
        route: "contact-us",
      },
    ],
    showDrawer: false,
    selectedDrawerItemIndex: 0,
  }),
  methods: {
    takeMeHome() {
      const wayToHome = '/';
      if (this.$route.path !== wayToHome) {
        this.$router.push(wayToHome);
      }
    },
  },
};
</script>
<style lang="scss">
.main-content {
  background: white url('~@/assets/images/cloth.jpg') repeat scroll top left;
}
</style>
