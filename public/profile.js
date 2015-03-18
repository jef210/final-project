$(document).ready(function(){
  $('.panel.panel-default').each(function(index){
    var sessionId = $(this).attr('data-id');
    // console.log(sessions[index]);

    var thisTrack = new Track();

    sessions[index].track.map(function(item){
      var note;
      if (item.note.indexOf('pad')> -1){
        note = new Pad('', item.note, item.volume);
      } else {
        note = new Note(item.note, item.volume);
      }
      thisTrack.addNote(note, item.timeStart, item.timeEnd);
    })
    console.log(thisTrack);
    $(this).find('.glyphicon-play').on('click', function(){
      thisTrack.play();
    })
    $(this).find('.glyphicon-stop').on('click', function(){
      thisTrack.stop();
    })
  });
});