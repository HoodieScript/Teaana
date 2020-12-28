<template>
  <div>
    <NavBar2 />
    <Profile />
  </div>
</template>
<script>
import Profile from "../components/Profile.vue";
import NavBar2 from "@/components/NavBar2.vue";

export default {
  components: {
    Profile,

    NavBar2,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {},
};
</script>
