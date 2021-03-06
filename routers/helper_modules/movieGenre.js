//this function when given a mood, returns the corresponding movie genre

////////////////////////////////////
//      Genre to ID TMDB API      //
//  Action   :         28         //    
//  Adventure:         12         //
//  Comedy   :         35         //
//  Crime    :         80         //
//  Drama    :         18         //
//  Family   :         10751      // 
//  Fantasy  :         14         //
//  Horror   :         27         //  
//  Romance  :         10749      //  
//  Thriller :         53         //  
//  War      :         10752      //
////////////////////////////////////

function movieGenre(mood){

  //mood object with default genre
  let moodMatch = {
    happy: 35,
    sad: 18,
    romantic: 10749,
    mad: 53,
    excited: 12,
    dreamy: 14,
  };

  //random index to choose which genre to return
  let randomNumberMad = Math.floor(Math.random() * 5);
  let randomNumberhappy = Math.floor(Math.random() * 2);

  //arrays matching the moods to genres
  const mad = [53,28,27,80,10752];
  const happy = [35,10751];

    //sets the genre to the mood
  movieGenre.happy = happy[randomNumberhappy];
  movieGenre.mad = mad[randomNumberMad];

  return moodMatch[mood];

}

module.exports = {
  movieGenre
};
