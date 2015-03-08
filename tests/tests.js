var test = require('tape');

test("link", function (t) {
  var tag = document.createElement('linkr-list');
  tag.links = [
    {
      id: '12323',
      url: "http://www.youtube.com/watch?v=LUFGCursSps&list=PL4E7AA9E142AAD126",
      title: "Scott Pilgrim Vs. The World The Game OST",
      date: new Date(),
      category: 'beautiful',
      categoryUrl: "http://clux.org/c/beautiful"
    },
    {
      id: '34545',
      url: "https://github.com/clux/tournament",
      title: "tournament module page",
      date: new Date(),
      category: 'helpful',
      categoryUrl: "http://clux.org/c/helpful"
    },
    {
      id: '34125',
      url: "git://github.com/clux/interlude.git",
      title: "functional javascript library",
      date: new Date(),
      category: 'helpful',
      categoryUrl: "http://clux.org/c/helpful"
    }
  ];
  document.body.appendChild(tag);

  // can't test rendering yet as you can't query within the Shadow DOM
  setTimeout(function () {
    t.end();
  }, 200);
});
