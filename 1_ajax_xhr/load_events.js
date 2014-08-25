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

var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status !== 200) {
    return;
  }

  var responseObject = JSON.parse(xhr.responseText);

  var events = responseObject.events;

  var newContent = buildContent(events);

  document.getElementById('content').innerHTML = newContent;
};

xhr.open('GET', 'events.json', true)
xhr.send(null);
