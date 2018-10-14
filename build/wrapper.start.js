/**
 * jQuery Select2 Multi checkboxes
 * - allow to select multi values via normal dropdown control
 *
 * author      : wasikuss
 * repo        : https://github.com/wasikuss/select2-multi-checkboxes/tree/amd
 * inspired by : https://github.com/select2/select2/issues/411
 * License     : MIT
 */

/* global define jQuery */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function(jQuery) {
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    define = jQuery.fn.select2.amd.define;
  }
  var define;
