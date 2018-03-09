define([
  'select2/utils',
  'select2/dropdown',
  'select2/dropdown/search',
  'select2/dropdown/attachBody'
],
function (Utils, Dropdown, DropdownSearch, AttachBody) {
  return Utils.Decorate(
    Utils.Decorate(
      Dropdown,
      DropdownSearch
    ),
    AttachBody
  );
});