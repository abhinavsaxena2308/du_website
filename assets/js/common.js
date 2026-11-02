$(function () {
  ($(window).on("scroll", function (a) {
    $(window).scrollTop() < 50
      ? ($(".header-banner-info").removeClass("sticky"),
        $(".wrapper").removeClass("in"))
      : ($(".header-banner-info").addClass("sticky"),
        $(".wrapper").addClass("in"));
  }),
    $(window).scroll(function () {
      $(window).scrollTop() >= 350
        ? $(".section-scroll-component").addClass("MM")
        : $(".section-scroll-component").removeClass("MM");
    }),
    $(".section-app-slides li").click(function () {
      ($(".section-app-slides li").removeClass("active"),
        $(this).addClass("active"));
    }),
    $(".h3_heading1").click(function () {
      $(".c_programs").slideUp();
      $(this).toggleClass("open");
      $(this).parent().find(".c_programs").slideDown();
    }));

  ($("#B_section1").click(function () {
    $("html,body").animate(
      { scrollTop: $("#B_section1_").offset().top - 150 },
      "slow",
    );
  }),
    $("#B_section2").click(function () {
      $("html,body").animate(
        { scrollTop: $("#B_section2_").offset().top - 150 },
        "slow",
      );
    }),
    $("#B_section3").click(function () {
      $("html,body").animate(
        { scrollTop: $("#B_section3_").offset().top - 150 },
        "slow",
      );
    }),
    $("#B_section4").click(function () {
      $("html,body").animate(
        { scrollTop: $("#B_section4_").offset().top - 150 },
        "slow",
      );
    }),
    $("#B_section5").click(function () {
      $("html,body").animate(
        { scrollTop: $("#B_section5_").offset().top - 150 },
        "slow",
      );
    }),
    $("#B_section6").click(function () {
      $("html,body").animate(
        { scrollTop: $("#B_section6_").offset().top - 150 },
        "slow",
      );
    }),
    $("#B_section7").click(function () {
      $("html,body").animate(
        { scrollTop: $("#B_section7_").offset().top - 150 },
        "slow",
      );
    }),
    $("#whyBtech").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_whyBtech").offset().top - 150 },
        "slow",
      );
    }),
    $("#weareProud").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_weareProud").offset().top - 150 },
        "slow",
      );
    }),
    $("#anchorFaculty").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_anchorFaculty").offset().top - 150 },
        "slow",
      );
    }),
    $("#bTechProgram").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_bTechProgram").offset().top - 150 },
        "slow",
      );
    }),
    $("#academicCollaborations").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_academicCollaborations").offset().top - 140 },
        "slow",
      );
    }),
    $("#industrialCollaborations").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_industrialCollaborations").offset().top - 160 },
        "slow",
      );
    }),
    $("#bustars").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_bustars").offset().top - 150 },
        "slow",
      );
    }),
    $("#testimonial").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_testimonial").offset().top - 150 },
        "slow",
      );
    }),
    $("#faq").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_faq").offset().top - 150 },
        "slow",
      );
    }),
    $("#eligibilitySelection").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_eligibilitySelection").offset().top - 150 },
        "slow",
      );
    }),
    $("#scholarships").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_scholarships").offset().top - 150 },
        "slow",
      );
    }),
    $("#feesStructure").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_feesStructure").offset().top - 150 },
        "slow",
      );
    }),
    $("#academicLeadership").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_academicLeadership").offset().top - 150 },
        "slow",
      );
    }),
    $("#chaptersClubsSocieties").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_chaptersClubsSocieties").offset().top - 150 },
        "slow",
      );
    }),
    $("#researchsscset").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_researchsscset").offset().top - 150 },
        "slow",
      );
    }),
    $("#_besection1").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_besection1_1").offset().top - 200 },
        "slow",
      );
    }),
    $("#_besection2").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_besection1_2").offset().top - 130 },
        "slow",
      );
    }),
    $("#_besection3").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_besection1_3").offset().top - 130 },
        "slow",
      );
    }),
    $("#_besection4").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_besection1_4").offset().top - 130 },
        "slow",
      );
    }),
    $("#_besection5").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_besection1_5").offset().top - 130 },
        "slow",
      );
    }),
    $("#_besection6").click(function () {
      $("html,body").animate(
        { scrollTop: $("#_besection1_6").offset().top - 130 },
        "slow",
      );
    }),
    $("#Advantage_list").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
    }),
    $("#testimonial_cie").owlCarousel({
      items: 2,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
    }),
    $("#testimonial_cie2").owlCarousel({
      items: 2,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#testimonial_placemnet").owlCarousel({
      items: 2,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#partners_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#leadership_list").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#Statistical_list").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#head_faculty_slides,#head_faculty_slides_2").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !1,
    }),
    $("#Placements_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#international_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#companies-client").owlCarousel({
      items: 6,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#companies-img").owlCarousel({
      items: 6,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $(
      "#companies-client-btech,#companies-client-mba,#companies-client-BAJMC,#companies-client-BBA",
    ).owlCarousel({
      items: 6,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#faculty-list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.2],
    }),
    $("#event_listst").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.2],
    }),
    $("#law-faculty-list").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.2],
    }),
    $("#faculty-list-Professor").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.2],
    }),
    $("#faculty-list-Associate").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.2],
    }),
    $("#faculty-list-Assistant").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.2],
    }),
    $("#_programs_slides").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 2],
    }),
    $("#_Industrial_slides").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 2],
    }),
    $("#programs_slides").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#ma_programs_slides").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#sponsours_carousel").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !1,
      itemsMobile: [480, 1.1],
    }),
    $("#board_advisory_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Academic_advisory_list").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#max_faculty").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#ad_solpublication").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#sliders_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#orientation_galry").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#planningBoard_slides").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#academicouncil-items").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#academicouncil-items2").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#irco_wrap_items").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#programs_slides_ep").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Leadership_slides_1").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Leadership_slides_2").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Leadership_slides_3").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Leadership_slides_4").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Leadership_slides_5").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#anchor_slides").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#anchor_slides_home").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#clubsliderd").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1.1],
    }),
    $("#dean-items").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1.1],
    }),
    $("#Research_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#starts_list").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#awards_lists").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#research_listst").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#achievement_listst").owlCarousel({
      items: 4,
      center: !0,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#law_Committees").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#solpublication").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#testimonial_bxp").owlCarousel({
      items: 1,
      itemsTablet: [768, 1],
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#Academic_Collaborations_BXX").owlCarousel({
      items: 3,
      itemsTablet: [768, 1],
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#Academic_Collaborations_BXX2").owlCarousel({
      items: 2,
      itemsTablet: [768, 1],
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#mb-banner-slides").owlCarousel({
      items: 1,
      itemsTablet: [768, 1],
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#event_list").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#Biotech_LABS").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#Biotech_research").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#Biotech_research_2").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#Biotech_research_std").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#alumini_members").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#testimonial_bxx").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#center_staff_slides").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#testimonial_bxxp").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#bennovate-slides").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
    }),
    $("#testimonial_bx33").owlCarousel({
      items: 7,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
    }),
    $("#Moble_Advantage_list").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
    }),
    $("#Events_Gallery").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#Events_Gallery_2").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#Events_Card").owlCarousel({
      items: 2,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#Events").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#Events_blog").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#recent_list_events").owlCarousel({
      items: 2,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#template_list_gallary").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#template_list_gallary2").owlCarousel({
      items: 2,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#Events_upcoming").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 1],
    }),
    $("#NSS_testimonial").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#our-leaadership-bx").owlCarousel({
      items: 1,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !0,
      itemsMobile: [480, 1],
    }),
    $("#programs-streem-list-tab").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [580, 2],
    }),
    $("#programs-streem-list-tab2").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [580, 2],
    }),
    $("#programs-streem-list-tab3").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [580, 2],
    }),
    $("#ind_Collaborations").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#cpt2").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#cpt3").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#cpt4").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#cpt5").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#cpt6").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#Corporate_Collaborations2").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 2],
    }),
    $("#International-tie-up").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 3],
      itemsMobile: [767, 3],
    }),
    $("#our-facility-list-info").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [767, 2],
    }),
    $("#CIE_Offer").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !0,
      pagination: !1,
    }),
    $("#ind_Collaborations2").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !0,
      pagination: !1,
      itemsMobile: [480, 3],
      itemsMobile: [767, 3],
    }),
    $("#abroad4").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
      itemsMobile: [767, 2],
    }),
    $("#Team_abroad4").owlCarousel({
      items: 4,
      lazyLoad: !0,
      autoPlay: !0,
      navigation: !1,
      pagination: !0,
      itemsMobile: [767, 2],
    }),
    $("#International_abroad4").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
      itemsMobile: [767, 2],
    }),
    $("#Transfer_abroad4").owlCarousel({
      items: 3,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
      itemsMobile: [767, 2],
    }),
    $("#Global_abroad4").owlCarousel({
      items: 5,
      lazyLoad: !0,
      autoPlay: !1,
      navigation: !1,
      pagination: !0,
      itemsMobile: [767, 2],
    }),
    $(".industrial-component ul li").click(function () {
      ($(".industrial-component ul li").removeClass("active"),
        $(this).addClass("active"));
    }),
    $(".btt-head").click(function () {
      ($(".btt-head").removeClass("active"),
        $(this).toggleClass("active"),
        $(".be-row-info").slideUp(),
        $(this).parent().find(".be-row-info").slideToggle());
    }),
    // $(".faqinfo  h4").click(function () {
    //     $(".faqinfo  h4").removeClass("active"), $(this).addClass("active"), $(".fqans").slideUp(), $(this).parent().find(".fqans").slideDown();
    // }),
    //  $(".faqinfobe  h3").click(function () {
    //     $(".faqinfobe  h3").removeClass("active"), $(this).addClass("active"), $(".fqans").slideUp(), $(this).parent().find(".fqans").slideDown();
    // }),
    $(".faqinfo h4").click(function () {
      const parentList = $(this).closest(".faqinfo"); // target only current list

      parentList.find("h4").removeClass("active");
      $(this).addClass("active");

      parentList.find(".fqans").slideUp(); // close all within this list only
      $(this).siblings(".fqans").stop(true, true).slideDown(); // open only current answer
    }),
    $(".faqinfobe h3").click(function () {
      const parentList = $(this).closest(".faqinfobe"); // target only current list

      parentList.find("h3").removeClass("active");
      $(this).addClass("active");

      parentList.find(".fqans").slideUp(); // close all within this list only
      $(this).siblings(".fqans").stop(true, true).slideDown(); // open only current answer
    }),
    $("#accordion_tab_wrap1 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap1 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap1 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap2 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap2 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap2 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap3 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap3 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap3 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap4 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap4 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap4 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap5 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap5 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap5 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap6 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap6 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap6 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap7 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap7 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap7 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap8 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap8 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap8 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap9 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap9 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap9 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap10 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap10 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap10 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap11 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap11 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap11 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap12 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap12 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap12 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap13 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap13 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap13 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap14 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap14 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap14 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap15 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap15 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap15 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap16 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap16 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap16 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap17 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap17 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap17 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $("#accordion_tab_wrap18 .program_list_accordion  h4").click(function () {
      ($("#accordion_tab_wrap18 h4").removeClass("active"),
        $(this).addClass("active"),
        $("#accordion_tab_wrap18 .accordion_list").slideUp(),
        $(this).parent().find(".accordion_list").slideDown());
    }),
    $(".und-pro li a").on("click", function () {
      ($(".und-pro li a").removeClass("active"),
        $(this).addClass("active"),
        $("div").removeClass("activeLnk"),
        $("div[id=" + $(this).attr("data-related") + "]").addClass(
          "activeLnk",
        ));
    }),
    $(".topscroll").click(function () {
      $("html").animate({ scrollTop: 0 }, "slow");
    }),
    $("#testimonial_bx33 .item").click(function () {
      ($("#testimonial_bx33 .item").removeClass("active"),
        $(this).addClass("active"),
        $("div").removeClass("activeLnk2"),
        $("div[id=" + $(this).attr("data-related") + "]").addClass(
          "activeLnk2",
        ));
    }),
    $(".mb-tab-section h5").click(function () {
      ($(".mb-tab-section h5").removeClass("md"),
        $(this).toggleClass("md"),
        $(".mb-data-information").slideUp(),
        $(this).parent().find(".mb-data-information").slideToggle());
    }),
    $(window).width() < 767 &&
      $(".industrial-component ul li").removeClass("active"),
    $(document).on("mouseover", ".gallery-app-component ul li", function () {
      ($(".gallery-app-component ul li").removeClass("riod-box-active"),
        $(this).addClass("riod-box-active"),
        $(".focus-screen-info").html($(".riod-box-active .riod-title").html()));
    }),
    $(document).on("mouseover", ".links-rese a", function () {
      ($(".links-rese a").removeClass("riod-box-active2"),
        $(this).addClass("riod-box-active2"),
        $(".aboutbu").html($(".riod-box-active2 .active-content").html()));
    }),
    $("#ind_Collaborations .item").click(function () {
      ($("#ind_Collaborations .item").removeClass("active"),
        $(this).addClass("active"),
        $("div").removeClass("activeLnk3"),
        $("div[id=" + $(this).attr("data-related") + "]").addClass(
          "activeLnk3",
        ));
    }),
    $(".cmp_logo .item").click(function () {
      ($(".cmp_logo .item").removeClass("active"),
        $(this).addClass("active"),
        $("div").removeClass("ins_bx_active"),
        $("div[id=" + $(this).attr("data-related") + "]").addClass(
          "ins_bx_active",
        ));
    }),
    $(".ms-tab-list .item").click(function () {
      ($(".ms-tab-list .item").removeClass("active"),
        $(this).addClass("active"),
        $("div").removeClass("ins_active"),
        $("div[id=" + $(this).attr("data-related") + "]").addClass(
          "ins_active",
        ));
    }),
    $(".LN-tab-components .db-links").click(function () {
      ($(".LN-tab-components .db-links").removeClass("active"),
        $(this).addClass("active"),
        $("div").removeClass("LN_active"),
        $("div[id=" + $(this).attr("data-related") + "]").addClass(
          "LN_active",
        ));
    }),
    $(".navigation-menu ul li").hover(
      function () {
        $(this).addClass("active");
      },
      function () {
        $(this).removeClass("active");
      },
    ),
    $(".ddm h5.sb_Category").hover(
      function () {
        $(this).addClass("active");
      },
      function () {
        $(this).removeClass("active");
      },
    ),
    $(".mb-link-btn").click(function () {
      ($(".mega_drop_menu").slideUp(),
        $(".mb-link-btn").removeClass("MS4"),
        $(this).parent().find(".mega_drop_menu").slideDown(),
        $(this).addClass("MS4"));
    }),
    $(".nav-btn").click(function () {
      ($(".navigation-menu").addClass("m50"), $("body").addClass("greybg"));
    }),
    $(".close-menu-section").click(function () {
      ($("body").removeClass("greybg"),
        $(".navigation-menu").removeClass("m50"));
    }),
    $(".programs-related-app li").click(function () {
      $("html,body").animate(
        { scrollTop: $(".bennett_programs_wrap").offset().top - 50 },
        "slow",
      );
    }),
    $("ul#tp-fill li a").click(function () {
      $("html,body").animate(
        { scrollTop: $("#tp-section").offset().top - 90 },
        "slow",
      );
    }),
    $("#filter ul li").click(function () {
      $("html,body").animate(
        {
          scrollTop: $(".scholarship-information-components").offset().top - 90,
        },
        "slow",
      );
    }),
    jQuery("#testimonial_bxx .owl-page").click(function () {
      $(".testimonial-text-info")
        .find(".owl-item")
        .each(function () {
          $(this)
            .find("iframe")[0]
            .contentWindow.postMessage(
              '{"event":"command","func":"stopVideo","args":""}',
              "*",
            );
        });
    }),
    $(document).on(
      "mousedown touchstart",
      "#testimonial_bxx .owl-page",
      function () {
        $(".testimonial-text-info")
          .find(".owl-item")
          .each(function () {
            $(this)
              .find("iframe")[0]
              .contentWindow.postMessage(
                '{"event":"command","func":"stopVideo","args":""}',
                "*",
              );
          });
      },
    ));
  $(".viewmore_Data").on("click", function () {
    // var txt = $(".addReadMore").is(':visible') ? 'Read More' : 'Read Less';
    var txt = $(this).parent().parent().find(".addReadMore").is(":visible")
      ? "Read More"
      : "Read Less";
    $(this).text(txt);
    $(this).parent().parent().find(".addReadMore").slideToggle(200);
  });

  // $(".viewmore_Data2").on("click", function () {
  //  var txt = $(".addReadMore2").is(':visible') ? 'Read More' : 'Read Less';
  //  $(".viewmore_Data2").text(txt);
  //  $('.addReadMore2').slideToggle(200);
  //});
  $("#Celebrations_slides").owlCarousel({
    items: 2,
    lazyLoad: true,
    autoPlay: false,
    navigation: true,
    pagination: false,
    itemsMobile: [480, 1],
  });
  jQuery("#our_speakers_slides").owlCarousel({
    items: 4,
    lazyLoad: true,
    autoPlay: true,
    navigation: false,
    pagination: true,
  });
  $("#Leap_Forward_slides").owlCarousel({
    items: 2,
    lazyLoad: true,
    autoPlay: false,
    navigation: true,
    pagination: false,
    itemsMobile: [480, 1],
  });
  $("#be_items").owlCarousel({
    items: 4,
    lazyLoad: true,
    autoPlay: true,
    navigation: true,
    pagination: false,
    itemsMobile: [480, 2],
  });

  // $('#bts_items').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     items:1,
  //     nav: true
  // })

  $("#admission_programs_inter").owlCarousel({
    items: 3,
    lazyLoad: true,
    autoPlay: false,
    navigation: true,
    pagination: false,
    itemsMobile: [480, 2],
  });

  $("#top_slides").owlCarousel({
    items: 1,
    lazyLoad: !0,
    autoPlay: !0,
    navigation: !1,
    pagination: !1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(document).ready(function () {
    $(".tp_slide").click(function (e) {
      window.open("https://applications.bennett.edu.in/bu", "_blank");
    });
  });

  $("#speak_employee").owlCarousel({
    items: 2,
    lazyLoad: true,
    autoPlay: false,
    navigation: true,
    pagination: false,
    itemsMobile: [480, 1],
  });

  $("#Events_Gallery2").owlCarousel({
    items: 1,
    lazyLoad: true,
    autoPlay: false,
    navigation: true,
    pagination: false,
    loop: true,
    itemsMobile: [480, 1],
  });
  $("#filter3 ul li").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".scholarship-information-components2").offset().top - 130,
      },
      "slow",
    );
  });
  $("#filter2 ul li").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".scholarship-information-components3").offset().top - 130,
      },
      "slow",
    );
  });

  $(".data_model").click(function () {
    var id = $(this).attr("data-id");
    jQuery.ajax({
      type: "POST",
      url: ajaxurl,
      data: {
        action: "get_iab_data_by_ID",
        post_id: id,
      },
      dataType: "JSON",
      success: function (output) {
        $("#myModal .dddd").html(output.content);
        $("#myModal").modal("show");
        $("#myModal .modal-title").html(output.title);
        $("#myModal .ds").html(output.designation);
      },
    });
  });

  $(".notices-links h3").click(function () {
    $(this).toggleClass("open");
    $("#dd4").toggle();
  });

  var windowWidth = $(window).width();
  if (windowWidth <= 768) {
    $(".ft-links-bx h3.tab_b").click(function () {
      $(this).toggleClass("open");
      $(this).parent().find(".ft_link_b_1").toggle();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".bu-ach-tab-btn");
  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = this.getAttribute("href");

      tabLinks.forEach(function (l) {
        l.classList.remove("bu-ach-active");
      });
      this.classList.add("bu-ach-active");

      document.querySelectorAll(".bu-ach-panel").forEach(function (p) {
        p.classList.remove("bu-ach-panel-active");
      });
      var panel = document.querySelector(target);
      if (panel) panel.classList.add("bu-ach-panel-active");
    });
  });
});
