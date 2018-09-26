/* global define */
define([
  'select2/utils',
  'select2/selection/multiple',
  'select2/selection/placeholder',
  'select2/selection/single'
],
function(Utils, MultipleSelection, Placeholder, SingleSelection) {
  var adapter = Utils.Decorate(MultipleSelection, Placeholder);

  adapter.prototype.render = function() {
    return SingleSelection.prototype.render.call(this);
  };

  adapter.prototype.update = function(data) {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = '';

    if (data.length === 0) {
      formatted = this.options.get('placeholder') || '';
    } else {
      var itemsData = {
        selected: data || [],
        all: this.$element.find('option') || []
      };
      formatted = this.display(itemsData, $rendered);
    }

    $rendered.empty().append(formatted);
    $rendered.prop('title', formatted);
  };

  return adapter;
});
