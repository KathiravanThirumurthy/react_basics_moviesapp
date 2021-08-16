const movies=[
    {"id":1,"Title": "The Land Girls", "US_Gross": 146083, "Worldwide_Gross": 146083, "US DVD Sales": null, "Production_Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071},
    {"id":2,"Title": "First Love, Last Rites", "U_ Gross": 10876, "Worldwide_Gross": 10876, "US DVD Sales": null, "Production_Budget": 300000, "Release Date": "Aug 07 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Strand", "Source": null, "Major Genre": "Drama", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.9, "IMDB Votes": 207},
    {"id":3,"Title": "I Married a Strange Person", "US_Gross": 203134, "Worldwide_Gross": 203134, "US DVD Sales": null, "Production_Budget": 250000, "Release Date": "Aug 28 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Lionsgate", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.8, "IMDB Votes": 865},
    {"id":4,"Title": "Let's Talk About Sex", "US_Gross": 373615, "Worldwide_Gross": 373615, "US DVD Sales": null, "Production_Budget": 300000, "Release Date": "Sep 11 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Fine Line", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 13, "IMDB Rating": null, "IMDB Votes": null},
    {"id":5,"Title": "Slam", "US Gross": 1009819, "Worldwide_Gross": 1087521, "US DVD Sales": null, "Production_Budget": 1000000, "Release Date": "Oct 09 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Trimark", "Source": "Original Screenplay", "Major Genre": "Drama", "Creative Type": "Contemporary Fiction", "Director": null, "Rotten Tomatoes Rating": 62, "IMDB Rating": 3.4, "IMDB Votes": 165},
    {"id":6,"Title": "Mississippi Mermaid", "US_Gross": 24551, "Worldwide_Gross": 2624551, "US DVD Sales": null, "Production_Budget": 1600000, "Release Date": "Jan 15 1999", "MPAA Rating": null, "Running Time min": null, "Distributor": "MGM", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": null, "IMDB Votes": null},
    {"id":7,"Title": "Following", "US_Gross": 44705, "Worldwide_Gross": 44705, "US DVD Sales": null, "Production_Budget": 6000, "Release Date": "Apr 04 1999", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Zeitgeist", "Source": null, "Major Genre": null, "Creative Type": null, "Director": "Christopher Nolan", "Rotten Tomatoes Rating": null, "IMDB Rating": 7.7, "IMDB Votes": 15133},
    {"id":8,"Title": "Foolish", "US_Gross": 6026908, "Worldwide_Gross": 6026908, "US DVD Sales": null, "Production_Budget": 1600000, "Release Date": "Apr 09 1999", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Artisan", "Source": "Original Screenplay", "Major Genre": "Comedy", "Creative Type": "Contemporary Fiction", "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 3.8, "IMDB Votes": 353},
    {"id":9,"Title": "Pirates", "US_Gross": 1641825, "Worldwide_Gross": 6341825, "US DVD Sales": null, "Production_Budget": 40000000, "Release Date": "Jul 01 1986", "MPAA Rating": "R", "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": "Roman Polanski", "Rotten Tomatoes Rating": 25, "IMDB Rating": 5.8, "IMDB Votes": 3275},
    {"id":10,"Title": "Duel in the Sun", "US_Gross": 20400000, "Worldwide_Gross": 20400000, "US DVD Sales": null, "Production_Budget": 6000000, "Release Date": "Dec 31 2046", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 86, "IMDB Rating": 7, "IMDB Votes": 2906},
    {"id":11,"Title": "Tom Jones", "US_Gross": 37600000, "Worldwide_Gross": 37600000, "US DVD Sales": null, "Production_Budget": 1000000, "Release Date": "Oct 07 1963", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 81, "IMDB Rating": 7, "IMDB Votes": 4035},
    {"id":12,"Title": "Oliver!", "US_Gross": 37402877, "Worldwide_Gross": 37402877, "US DVD Sales": null, "Production_Budget": 10000000, "Release Date": "Dec 11 1968", "MPAA Rating": null, "Running Time min": null, "Distributor": "Sony Pictures", "Source": null, "Major Genre": "Musical", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 84, "IMDB Rating": 7.5, "IMDB Votes": 9111},
    {"id":13,"Title": "To Kill A Mockingbird", "US_Gross": 13129846, "Worldwide_Gross": 13129846, "US DVD Sales": null, "Production_Budget": 2000000, "Release Date": "Dec 25 1962", "MPAA Rating": null, "Running Time min": null, "Distributor": "Universal", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 97, "IMDB Rating": 8.4, "IMDB Votes": 82786},
    {"id":14,"Title": "Tora, Tora, Tora", "US_Gross": 29548291, "Worldwide_Gross": 29548291, "US DVD Sales": null, "Production_Budget": 25000000, "Release Date": "Sep 23 1970", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": "Richard Fleischer", "Rotten Tomatoes Rating": null, "IMDB Rating": null, "IMDB Votes": null},
    {"id":15,"Title": "Hollywood Shuffle", "US_Gross": 5228617, "Worldwide_Gross": 5228617, "US DVD Sales": null, "Production_Budget": 100000, "Release Date": "Mar 01 1987", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 87, "IMDB Rating": 6.8, "IMDB Votes": 1532},
    {"id":16,"Title": "Over the Hill to the Poorhouse", "US_Gross": 3000000, "Worldwide_Gross": 3000000, "US DVD Sales": null, "Production_Budget": 100000, "Release Date": "Sep 17 2020", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": null, "IMDB Votes": null},
    {"id":17,"Title": "Wilson", "US_Gross": 2000000, "Worldwide_Gross": 2000000, "US DVD Sales": null, "Production_Budget": 5200000, "Release Date": "Aug 01 2044", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 7, "IMDB Votes": 451},
    {"id":18,"Title": "Darling Lili", "US_Gross": 5000000, "Worldwide_Gross": 5000000, "US DVD Sales": null, "Production_Budget": 22000000, "Release Date": "Jan 01 1970", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": "Blake Edwards", "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 858},
    {"id":19,"Title": "The Ten Commandments", "US Gross": 80000000, "Worldwide_Gross": 80000000, "US DVD Sales": null, "Production_Budget": 13500000, "Release Date": "Oct 05 1956", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 90, "IMDB Rating": 2.5, "IMDB Votes": 1677},
    {"id":20,"Title": "12 Angry Men", "US_Gross": 0, "Worldwide_Gross": 0, "US DVD Sales": null, "Production_Budget": 340000, "Release Date": "Apr 13 1957", "MPAA Rating": null, "Running Time min": null, "Distributor": "United Artists", "Source": "Original Screenplay", "Major Genre": "Drama", "Creative Type": null, "Director": "Sidney Lumet", "Rotten Tomatoes Rating": null, "IMDB Rating": 8.9, "IMDB Votes": 119101}

];
export function getMovies()
{
    return movies;
}