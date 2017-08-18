const angular = require('angular');

module.exports = angular
  .module('ui.bootstrap', [
    require('./src/collapse/index'),
    require('./src/tabindex/index'),
    require('./src/accordion/index'),
    require('./src/alert/index'),
    require('./src/buttons/index'),
    require('./src/carousel/index'),
    require('./src/dateparser/index'),
    require('./src/isClass/index'),
    require('./src/datepicker/index'),
    require('./src/position/index'),
    require('./src/datepickerPopup/index'),
    require('./src/debounce/index'),
    require('./src/multiMap/index'),
    require('./src/dropdown/index'),
    require('./src/stackedMap/index'),
    require('./src/modal/index'),
    require('./src/paging/index'),
    require('./src/pager/index'),
    require('./src/pagination/index'),
    require('./src/tooltip/index'),
    require('./src/popover/index'),
    require('./src/progressbar/index'),
    require('./src/rating/index'),
    require('./src/tabs/index'),
    require('./src/timepicker/index'),
    require('./src/typeahead/index'),
  ])
  .name;
