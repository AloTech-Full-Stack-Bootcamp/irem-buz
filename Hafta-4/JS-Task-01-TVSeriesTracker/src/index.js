import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    //(If a serie has been watched) {
    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) {
        this.lastSerie = serie;
      }
      // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
      if (
        new Date(this.lastSerie.finishedDate) < new Date(serie.finishedDate)
      ) {
        // set "lastSerie" prop to "serie" object.
        this.lastSerie = serie;
      }
      // If a serie hasn't been watched:
    } else {
      this.numberOfUnWatched += 1;
      // Check if serie has "isCurrent" prop
      if (serie.isCurrent) {
        // Check if we have a "currentSerie" property. Set if we don't.
        if (!this.currentSerie) {
          this.currentSerie = serie;
        }
        // Check if we have a "nextSerie" property as well - if we didn't
        // set the .currentSerie property, set the .nextSerie property.
      } else if (!this.nextSerie) {
        this.nextSerie = serie;
      }
    }

    //it should also update the number of series marked as watched / unwatched:
    //"numberOfWatched" and "numberOfUnWatched"
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    series.forEach((serie) => {
      //Use the .add function to handle adding series, so we keep counts updated.
      this.add(serie);
    });
  }

  this.finishSerie = function () {
    // find and update currently watching serie in "this.series" array "this.series" dizisinde şu anda izlenen diziyi bul ve güncelle
    // this.series.forEach((serie) => {

    // })
    this.currentSerie.isCurrent = false;
    this.currentSerie.isWatched = true;
    this.currentSerie.finishedDate = "25.11.2021";
    // update "lastSerie" with the finished one "lastSerie" yi bitmiş olanla güncelleyin
    this.lastSerie = this.currentSerie;
    // set "currentSerie" with the next one "currentSerie" yi bir sonraki ile ayarla
    // this.currentSerie
    // set new nextSerie value with the next one which has not been watched.
    // update "numberOfWatched" and "numberOfUnWatched" props
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
