var $projects = $('input[title=Project]').filter(function () {
    return !!this.value;
});

console.log('Oracler> Locked and loaded!');
console.log($projects); //projects.length for row count

var dayLength = 8;
var projectsCount = $projects.length;
var coreHours = dayLength - projectsCount + 1;

function putVal(index) {
  return index == 0 ? coreHours : 1;
}


$projects.each(function(i) {
    // wow, this one is weird
   var $row = (($(this).closest('tr').closest('table')).closest('tr').closest('table')).closest('tr');
   $row.find('.x1v:not([title*="Sat"], [title*="Sun"])').val(putVal(i));
});


console.log($('.x1y'));