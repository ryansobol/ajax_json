function buildContent(events) {
  var content = '';

  for (var i = 0; i < events.length; i++) {
    content += '<div class="event">';
    content += '<img src="' + events[i].map + '" ';
    content += 'alt="' + events[i].location + '" />';
    content += '<p><b>' + events[i].location + '</b><br>';
    content += events[i].date + '</p>';
    content += '</div>';
  }

  return content;
}

$.get('events.json', function(data) {
  var events = data.events;

  var newContent = buildContent(events);

  $('#content').html(newContent);
});
