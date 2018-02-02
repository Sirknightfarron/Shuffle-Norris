  //der Schlüssel für die API
  const urlApi = 'https://api.icndb.com/jokes';
  const urlRandom = '/random';
  const urlUsk = '?exclude=[explicit]';

  //Variable zum Speichern der Jokes
      var jokeArray = [];
  //die Anzahl der zu ladenden Jokes
      var jokeCount = 5;

    //GET funktion zum Anfragen der Daten und Speicherung in einem jokeArray
    $(document).ready(
      function saveJokes(){
        const url = urlApi + urlRandom + urlUsk ;
          for (var i = 0; i < jokeCount; i++) {
            $.getJSON(url, response=>{
              jokeArray = jokeArray.concat(response.value.joke);
          });
        };
      });

    //gibt die gesammelten Jokes in der Reihenfolge aus, in der sie geladen worden sind
    function giveJokesInOrder(){
      for (var i = 0; i < jokeArray.length; i++) {
        console.log(jokeArray[i]);
      }
    }


//gibt alle gesammelten Jokes in einer nicht zusammenhängenden Wortreihenfolge aus.
function giveJokesRandomly(){
  console.log(randomize(polishedWords()).join('\u0020'));
}

//entfernt überflüssige "." und "," aus den jokeschnipseln
function polishedWords(){
  var arr = jokesToWords();

  for (var i = 0; i < arr.length; i++) {
    arr[i].split(',');
    arr[i].split('.');

  }
  return arr;
}

    function jokesToWords(){
      var akk = [];

      akk = jokeArray.join();
      return akk.split('\u0020');
    }


//tauscht inhalte von Referenzen in dem Array aus, solange es noch Zahlen zum
//tauschen gint (currentIndex)
    function randomize(arr) {
      var currentIndex = arr.length, tempVal, randIndex;

      while (0 !== currentIndex) {

        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempVal = arr[currentIndex];
        arr[currentIndex] = arr[randIndex];
        arr[randIndex] = tempVal;
      }
      return arr;
    }
