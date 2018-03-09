require.config({
  baseUrl: '../../',
  paths: {
    'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min',
    'select2': 'libs/select2/src/js/select2',
    'jquery.select2': 'libs/select2/src/js/jquery.select2',
    'jquery-mousewheel': 'libs/select2/src/js/jquery.mousewheel.shim',
    'select2/multi-checkboxes': 'src/select2/multi-checkboxes'
  }
});

require(['jquery', 'select2/multi-checkboxes/dropdown', 'select2/multi-checkboxes/selection', 'select2/multi-checkboxes/results', 'jquery.select2'], function ($, DropdownAdapter, SelectionAdapter, ResultsAdapter) {
  $('.select2-original').select2({
    placeholder: 'Select items',
    closeOnSelect: false
  });

  $('.select2-multiple').select2({
    placeholder: 'Select items',
    closeOnSelect: false,
    templateSelection: function (data) {
      return 'Selected ' + data.selected.length + ' out of ' + data.all.length;
    },
    dropdownAdapter: DropdownAdapter,
    selectionAdapter: SelectionAdapter,
    resultsAdapter: ResultsAdapter
  });
});