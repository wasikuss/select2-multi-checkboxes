define([
  'jquery',
  'select2/utils',
  'select2/results'
],
function ($, Utils, _Results) {
  function Results() {
    Results.__super__.constructor.apply(this, arguments);
  }
  Utils.Extend(Results, _Results);

  Results.prototype.highlightFirstItem = function () {
    this.ensureHighlightVisible();
  };

  Results.prototype.bind = function (container) {
    container.on('open', function () {
      var $options = this.$results.find('.select2-results__option[aria-selected]');
      var $selected = $options.filter('[aria-selected=true]');
      var $optionToScrollTo = ($selected.length > 0 ? $selected : $selected).first();
      $optionToScrollTo.trigger('mouseenter');
    });
    Results.__super__.bind.apply(this, arguments);
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);
    $(container).addClass('multi-checkboxes_wrap');

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});