// datetimepicker script and options
// list of options https://eonasdan.github.io/bootstrap-datetimepicker/Options/
$(function () {

    $('#datetimepicker').datetimepicker({
        locale: 'de',
        format: "DD/MM/YYYY HH:mm",
        sideBySide: true,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'auto'
        },
        icons: {
            time: "far fa-clock",
            date: 'far fa-calendar-alt',
            up: 'fas fa-arrow-up',
            down: 'fas fa-arrow-down',
            previous: 'fas fa-arrow-left',
            next: 'fas fa-arrow-right',
            today: 'far fa-calendar-check',
            clear: 'far fa-trash-alt',
            close: 'far fa-window-close'
        }
    });

});