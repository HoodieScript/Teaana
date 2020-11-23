<template>
  <div>
    <NavBar />
    <Landing id="banner-section" />
    <Login />
    <Register />
    <Product id="product-section" />
    <Gallery id="about-section" />
    <Contact id="contact-section" />
    <Footer />
    <PrivacyPolicy />
    <RefundPolicy />
    <TermsandConditions />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Landing from "@/components/Landing.vue";
import Product from "@/components/Product.vue";
import Gallery from "@/components/Gallery.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/NavFooter.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import RefundPolicy from "@/components/RefundPolicy.vue";
import TermsandConditions from "@/components/TermsCondition.vue";
/* import $ from "jquery";
 */ export default {
  mounted() {
    // https://twitter.com/uixmat
    /* 
		function scrollNav() {
			$(' ul li a').click(function () {
				$('.active').removeClass('active');
				$(this).addClass('active');
			});
		}

		scrollNav();
		 */
    /*   $(document).ready(function () {
      $(document).on("scroll", onScroll);
    });

    function onScroll(event) {
      var scrollPosition = $(document).scrollTop();
      $(".nav a").each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (
          refElement.position().top   <= scrollPosition &&
          refElement.position().top + refElement.height() > scrollPosition
        ) {
          $(".nav ul li a").removeClass("active");
          currentLink.addClass("active");
        } else {
          currentLink.removeClass("active");
        }
      });
    } */
  },
  components: {
    NavBar,
    Landing,
    Login,
    Register,
    Product,
    Gallery,
    Contact,
    Footer,
    PrivacyPolicy,
    RefundPolicy,
    TermsandConditions,
  },
};
</script>
<style scoped>
@import "../assets/CSS/web.css";
</style>
