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

    var offakk;
    var offtail;
    var akk = [];
    var tail = [];

    //gibt alle gesammelten Jokes in einer nicht zusammenhängenden Wortreihenfolge aus.
    function giveJokesRandomly(){

    for (var i = 0; i < jokeArray.length; i++) {
      kopfAbschneiden(jokeArray[i]);
    }
  }
    offakk = akk;
    offtail = tail;
    //Diese Funktion wird lediglich hier benötigt und trennt ab dem ersten "space"
    //das Wort von dem rest des Arrays und der rest wird in tail gespeichert
    function kopfAbschneiden(str){
      for (var i = 0; i < str.length; i++) {
        if (!tail.includes('\u0020')) {
        return akk = akk.concat(str);

        } else if (str.charAt(i) == '\u0020'){
          tail = str.substring(i, str.length);
          akk = akk.concat(str.substring(0, i));
        } else {
          kopfAbschneiden(tail);
        }
        }
      }





    //"Since 1940, the year Chuck Norris was born, roundhouse kick related
// deaths have increased 13,000 percent."
