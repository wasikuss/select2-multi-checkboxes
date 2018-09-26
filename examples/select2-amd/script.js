/* global jQuery */
(function($) {
  $.fn.select2.amd.require(
    [
      'select2/multi-checkboxes/dropdown',
      'select2/multi-checkboxes/selection',
      'select2/multi-checkboxes/results'
    ],
    function(DropdownAdapter, SelectionAdapter, ResultsAdapter) {
      $('.select2-original').select2({
        placeholder: 'Select items',
        closeOnSelect: false
      });

      $('.select2-multiple').select2({
        placeholder: 'Select items',
        closeOnSelect: false,
        templateSelection: function(data) {
          return 'Selected ' + data.selected.length + ' out of ' + data.all.length;
        },
        dropdownAdapter: DropdownAdapter,
        selectionAdapter: SelectionAdapter,
        resultsAdapter: ResultsAdapter
      });
    }
  );
}(jQuery));
