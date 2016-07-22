$(document).ready(function() {
  $('.js-tab-link').on('click', function(e){

    var tabId = $(e.target).data('project');
    var newTab = $('#' + tabId);
    var currentTab = $('.c-projects-body__content.is-active');

    currentTab.removeClass('is-active');
    newTab.addClass('is-active');
  })

});
