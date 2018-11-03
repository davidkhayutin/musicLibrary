const library = function (name, creator) {
  this.name = name;
  this.creator = creator;
  this.list = [];
};

const tracks = function (trackTitle, trackRating, trackLength) {
  this.title = trackTitle;
  this.rating = trackRating;
  this.length = trackLength;
};

const playlists = function (playlistName) {
  this.name = playlistName;
  this.tracks = [];
  this.OverallRating = function () {
    let sum = 0;
    for (item in this.tracks) {
      sum += item.rating;
    }
    return sum;
  };
  this.totalDuration = function () {
    let sum = 0;
    for (item in this.tracks) {
      sum += item.length;
    }
    return sum;
  };
};

const Library = new library('Code Monkey', 'Jonathan Coulton');


const playList1 = new playlists('Thing a Week Three');
Library.list.push(playList1);

const track1 = tracks('abcd', 6, 4);

playList1.tracks.push(track1);