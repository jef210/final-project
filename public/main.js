



/**
 * this is a class that represents a block that's attached to a scale
 * @param {string} name   the name of the scale
 * @param {string} note   this is the file name of the note to play
 * @param {number} volume general volume of the note
 */
var Pad = function (name, note, volume){
  this.name = name;
  this.note = note;
  // if no vol given use 0.7 default
  this.volume = volume || 0.7;
  // init empty note array
  this.notes = [];
  // init howl instance
  this.howl = new Howl({
      urls: ['pads/' + this.note]
    });
};

/**
 * create a DOM element for the pad instance
 * @return {jQuery} jQuery DOM element
 */
Pad.prototype.render = function(){
  // creates div but not append does append to itself an h1 & add classes
  var padQuad =  $("<div>")
    .addClass("col-xs-6 pad")
    .addClass(this.name + '-pad');
    // .append("<h1 class='quad-word'> " + this.name + " </h1>");
  // creates an array of the result of calling render on each note in this pad
  var noteElements = this.notes.map( function(note) {
    return note.render();
  });
  // appending result of rendering all notes in this pad
  padQuad.append(noteElements);
  // storing the context (the pad instance) in a second variable, because it would refer the DOM element that was hovered and not the pad
  var pad = this;
  var timeStart;
  // add event handler for mouse enter on the pad
  padQuad.on('mouseenter', function(event){
    pad.howl.fadeIn( pad.volume, 2000 );
    // assign value to timeStart this is the time that the mouse enter occured. start the note
    timeStart = Date.now();
  });
  // add event handler for mouse leave on the pad
  padQuad.on('mouseleave', function(event){
    pad.howl.fadeOut(0, 1100);
    // add the note to a track given the time that the mouse enter started and the time that the mouse leave happened.
    track.addNote(pad, timeStart, Date.now());
    });
  // return the created DOM element with all it's event listeners
  return padQuad;
};




/**
 * Note class contains info about a single note
 * @param {string} note   note file
 * @param {number} volume volume   of the sound
 */
var Note = function (note, volume){
  this.note = note;
  // passing default volume
  this.volume = volume || 0.2;
  // init howl instance
  this.howl = new Howl ({
      urls: ["note_sounds_mp3/" + this.note]
  });
};

/**
 * Render an individual note
 * @return {jQuery} DOM representation of a note
 */
Note.prototype.render = function(){
  // create a new noteBtn div and appending an empty div to it
  var noteBtn = $("<div>")
    .addClass("col-xs-4 note-btn note-btn-container")
    .append("<div></div>");
    // storing a reference to this
  var note = this;
  var timeStart;
  // event handler for mousedown on NoteBtn
  noteBtn.on('mousedown', function(event){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $(this).css('backgroundColor', '#' + randomColor);
    $(this).css('border-radius', '10px');
    console.log(this);
    // reference to this as note accessing the howl property defined above and calling the fadeIn
    note.howl.fadeIn( note.volume, 2000 );
    timeStart = Date.now();
  });
  // event handler for mouseup on NoteBtn
  noteBtn.on('mouseup', function(event){
    $(this).css('backgroundColor', 'transparent');
    note.howl.fadeOut(0, 1100);
    track.addNote(note, timeStart, Date.now());
    });
  return noteBtn;
};

/**
 * A way to keep a list of played notes and their timestamps
 */
var Track = function(){
  // init empty array for the notes to be played
  this.notes = [];
};
/**
 * adds a note to this.notes array
 * @param {Note} note      note instance to play
 * @param {number} timeStart elapsed milliseconds
 * @param {number} timeEnd   leapsed milliseconds
 */
Track.prototype.addNote = function (note, timeStart, timeEnd) {
  // pushing an object literal on to the notes array
  this.notes.push({
    note:note, timeStart:timeStart, timeEnd:timeEnd
  });
};

 // Method to play the track back with timestamped notes and pads

Track.prototype.play = function (){
  // tells it what the first note starttime is
  var startTime = this.notes[0].timeStart;
 // play each note by delaying it's start and end
  this.notes.map( function (item){
    // finds the diff between the start of the note and the start of the track
    var delay = item.timeStart - startTime;
    // fade in the note we're on after the delay
    setTimeout ( function (){
      item.note.howl.fadeIn(0.2, 1000);
    }, delay);
    // calculate the delay for the end of the note, set timeout to end the note
    delay = item.timeEnd - startTime;
    setTimeout ( function (){
      item.note.howl.fadeOut(0, 2000);
    }, delay);
    console.log(delay/1000);
  });
};

var track = new Track ();


            ////// PAD INSTANCES //////

var dorian = new Pad ('OBSTACLES', 'f_sharp_minor_pad.mp3');
var ionian = new Pad ('GOALS', 'f_sharp_major_pad.mp3');
var aeolian = new Pad ('STORIES', 'c_sharp_minor_pad.mp3');
var lydian = new Pad ('VALUES', 'c_sharp_major_pad.mp3');


            ////// NOTE INSTANCES //////

                /// F# IONIAN ///

// F# Oct
// ['note_sounds_mp3/f_sharp_ionian_oct.mp3']
var note_f_sharp_oct = new Note ('f_sharp_ionian_oct.mp3');
// B
// ['note_sounds_mp3/b_ionian.mp3']
var note_b = new Note ('b_ionian.mp3');
// G# Oct
// ['note_sounds_mp3/g_sharp_ionian_oct.mp3']
var note_g_sharp_oct = new Note ('g_sharp_ionian_oct.mp3');
// A#
// ['note_sounds_mp3/a_sharp_ionian.mp3']
var note_a_sharp = new Note ('a_sharp_ionian.mp3');
// F#
// ['note_sounds_mp3/f_sharp_ionian.mp3']
var note_f_sharp = new Note ('f_sharp_ionian.mp3')
// C#
// ['note_sounds_mp3/c_sharp_ionian.mp3']
var note_c_sharp = new Note ('c_sharp_ionian.mp3')
// D#
// ['note_sounds_mp3/d_sharp_ionian.mp3']
var note_d_sharp = new Note ('d_sharp_ionian.mp3')
// F
// ['note_sounds_mp3/f_ionian.mp3']
var note_f_ionian = new Note ('f_ionian.mp3')
// G#
// ['note_sounds_mp3/g_sharp_ionian.mp3']
var note_g_sharp = new Note ('g_sharp_ionian.mp3')

ionian.notes.push(note_f_sharp_oct, note_b, note_g_sharp_oct, note_a_sharp, note_f_sharp, note_c_sharp, note_d_sharp, note_f_ionian, note_g_sharp);


                /// C# LYDIAN ///

// C# Oct
// ['note_sounds_mp3/c_sharp_lydian_oct.mp3']
var note_c_sharp_oct = new Note ('c_sharp_lydian_oct.mp3')
// G#
// ['note_sounds_mp3/g_sharp_lydian.mp3']
var note_g_sharp = new Note ('g_sharp_lydian.mp3')
// D# Oct
// ['note_sounds_mp3/d_sharp_lydian_oct.mp3']
var note_d_sharp_oct = new Note ('d_sharp_lydian_oct.mp3')
// G
// ['note_sounds_mp3/g_lydian.mp3']
var note_g_lydian = new Note ('g_lydian.mp3')
// C#
// ['note_sounds_mp3/c_sharp_lydian.mp3']
var note_c_sharp = new Note ('c_sharp_lydian.mp3')
// D#
// ['note_sounds_mp3/d_sharp_lydian.mp3']
var note_d_sharp = new Note ('d_sharp_lydian.mp3')
// F
// ['note_sounds_mp3/f_lydian.mp3']
var note_f_lydian = new Note ('f_lydian.mp3')
// A#
// ['note_sounds_mp3/a_sharp_lydian.mp3']
var note_a_sharp_lydian = new Note ('a_sharp_lydian.mp3')
// C
// ['note_sounds_mp3/c_lydian.mp3']
var note_c_lydian = new Note ('c_lydian.mp3')



lydian.notes.push(note_c_sharp_oct, note_g_sharp, note_d_sharp_oct, note_g_lydian, note_c_sharp, note_d_sharp, note_f_lydian, note_a_sharp_lydian,note_c_lydian);



               /// C# AEOLIAN ///



// C# Oct
// ['note_sounds_mp3/c_sharp_aeolian_oct.mp3']
var note_c_sharp_aeolian_oct = new Note ('c_sharp_aeolian_oct.mp3')
// F#
// ['note_sounds_mp3/f_sharp_aeolian.mp3']
var note_f_sharp_aeolian = new Note ('f_sharp_aeolian.mp3')
// D# Oct
// ['note_sounds_mp3/d_sharp_aeolian_oct.mp3']
var note_d_sharp_aeolian_oct = new Note ('d_sharp_aeolian_oct.mp3')
// G#
// ['note_sounds_mp3/g_sharp_aeolian.mp3']
var note_g_sharp_aeolian = new Note ('g_sharp_aeolian.mp3')
// C#
// ['note_sounds_mp3/c_sharp_aeolian.mp3']
var note_c_sharp_aeolian = new Note ('c_sharp_aeolian.mp3')
// E
// ['note_sounds_mp3/e_aeolian.mp3']
var note_e_aeolian = new Note ('e_aeolian.mp3')
// D#
// ['note_sounds_mp3/d_sharp_aeolian.mp3']
var note_d_sharp_aeolian = new Note ('d_sharp_aeolian.mp3')
// A
// ['note_sounds_mp3/a_aeolian.mp3']
var note_a_aeolian = new Note ('a_aeolian.mp3')
// B
// ['note_sounds_mp3/b_aeolian.mp3']
var note_b_aeolian = new Note ('b_aeolian.mp3')

aeolian.notes.push(note_c_sharp_aeolian_oct, note_f_sharp_aeolian, note_d_sharp_aeolian_oct, note_g_sharp_aeolian, note_c_sharp_aeolian, note_e_aeolian, note_d_sharp_aeolian, note_a_aeolian, note_b_aeolian );

                /// F# DORIAN ///

// F# Oct
// ['note_sounds_mp3/f_sharp_dorian_oct.mp3']
var note_f_sharp_dorian_oct = new Note ('f_sharp_dorian_oct.mp3')
// B
// ['note_sounds_mp3/b_dorian.mp3']
var note_b_dorian = new Note ('b_dorian.mp3')
// G# Oct
// ['note_sounds_mp3/g_sharp_dorian_oct.mp3']
var note_g_sharp_dorian_oct = new Note ('g_sharp_dorian_oct.mp3')
// A
// ['note_sounds_mp3/a_dorian.mp3']
var note_a_dorian = new Note ('a_dorian.mp3')
// F#
// ['note_sounds_mp3/f_sharp_dorian.mp3']
var note_f_sharp_dorian = new Note ('f_sharp_dorian.mp3')
// C#
// ['note_sounds_mp3/c_sharp_dorian.mp3']
var note_c_sharp_dorian = new Note ('c_sharp_dorian.mp3')
// D#
// ['note_sounds_mp3/d_sharp_dorian.mp3']
var note_d_sharp_dorian = new Note ('d_sharp_dorian.mp3')
// E
// ['note_sounds_mp3/e_dorian.mp3']
var note_e_dorian = new Note ('e_dorian.mp3')
// G#
// ['note_sounds_mp3/g_sharp_dorian.mp3']
var note_g_sharp_dorian = new Note ('g_sharp_dorian.mp3')


dorian.notes.push(note_f_sharp_dorian_oct, note_b_dorian, note_g_sharp_dorian_oct, note_a_dorian,note_f_sharp_dorian, note_c_sharp_dorian, note_d_sharp_dorian, note_e_dorian, note_g_sharp_dorian);


          ////// RENDER THE PADS //////

$(".instrument-container").append(dorian.render());

$(".instrument-container").append(ionian.render());

$(".instrument-container").append(aeolian.render());

$(".instrument-container").append(lydian.render());







//////// START MOOD SELECTION /////

$('.start-mood-select').on('click', 'li', function () {
  // this is the element we clikced on, $ wraps in jQuery so we can find it's children. then we get all the children of the li ( in this case it's the anchor tag). we get the text of the a tag. called chaining. method is function on an object.
  var startMood = $(this).children().text();
  $('#start-mood').val(startMood);
})

$('#finish-instrument').on('click', function(){
  // Send the saved track information up via ajax,
  // and when it's done, we'll redirect

  // First, we need to massage the track data into a
  // useable structure (taking out Howl, for instance)
  var notesToSend = track.notes.map(function(trackItem){
    return {
      timeEnd: trackItem.timeEnd,
      timeStart: trackItem.timeStart,
      note: trackItem.note.note,
      volume: trackItem.note.volume
    };
  });
  $.post('/instrument/save', {notes: notesToSend, clickLocations: clickLocations}, function(data){
    window.location.pathname = '/exit-mood'
  });
})

$('.exit-mood-select').on('click', 'li', function () {
  // this is the element we clikced on, $ wraps in jQuery so we can find it's children. then we get all the children of the li ( in this case it's the anchor tag). we get the text of the a tag. called chaining. method is function on an object.
  var exitMood = $(this).children().text();
  $('#exit-mood').val(exitMood);
});

// LOGIN SUBMIT

$(document).on('submit', '#signInForm', function(e){

  console.log('submit was pressed');

  e.preventDefault();

  var loginData = {
    userName: $('#userNameSignInForm').val(),
    password: $('#passwordSignInForm').val()
  };
  
  console.log(loginData);

 $.post('/auth/login', function(loginData) {

 });

});


var clickLocations = [];

$(document).on("click", function(e) {
  clickLocations.push({x: e.pageX, y: e.pageY});
  // console.log(clickLocations);
});

var graphData = [];
$('.session-chart').highcharts(function(){
  this.graphs.map();
});
console.log(graphs);

  
    


