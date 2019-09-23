/* global define */
define([
  'select2/utils',
  'select2/selection/multiple',
  'select2/selection/placeholder',
  'select2/selection/single',
  'select2/selection/eventRelay'
],
function(Utils, MultipleSelection, Placeholder, SingleSelection, EventRelay) {
  var adapter = Utils.Decorate(MultipleSelection, Placeholder);
  adapter = Utils.Decorate(adapter, EventRelay);

  adapter.prototype.render = function() {
    return SingleSelection.prototype.render.call(this);
  };

  var defaultFormatTooltipFn = function(data) {
    return data.selected.map(function(item) {
      return item.text;
    }).join(", ")
  }

  adapter.prototype.update = function(data) {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = '';
    var titleFormatted = null;

    if (data.length === 0) {
      formatted = this.options.get('placeholder') || '';
    } else {
      var itemsData = {
        selected: data || [],
        all: this.$element.find('option') || []
      };
      formatted = this.display(itemsData, $rendered);
      var formatTooltipFn = this.options.get('formatTooltip');
      if (formatTooltipFn !== null) {
        formatTooltipFn = formatTooltipFn === true ? defaultFormatTooltipFn : formatTooltipFn;
        titleFormatted = formatTooltipFn.call(this, itemsData, $rendered);
      }
    }

    $rendered.empty().append(formatted);
    $rendered.prop('title', titleFormatted || formatted);
  };

  return adapter;
});
