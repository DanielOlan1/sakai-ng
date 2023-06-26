import { Injectable } from '@angular/core';
import { sport } from '../models/sport';
import { Tournament } from '../models/tournament';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Event } from '../models/event'; // Assuming you've defined the Event interface in an event.model.ts file
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root',
})
export class FlashAPIService {
 private api = environment.apiUrl;

 constructor(private http: HttpClient) {}

 getEventbyId(idEvent: string | null): Observable<Event> {
  return this.http.get<any>(`${this.api}events/${idEvent}`).pipe(
   map((response) => {
    const event: Event = {
     EVENT_ID: response.data.EVENT_ID,
     AWAY_EVENT_PARTICIPANT_ID: response.data.AWAY_EVENT_PARTICIPANT_ID,
     AWAY_GOAL_VAR: response.data.AWAY_GOAL_VAR,
     AWAY_IMAGES: response.data.AWAY_IMAGES,
     AWAY_NAME: response.data.AWAY_NAME,
     AWAY_PARTICIPANT_NAME_ONE: response.data.AWAY_PARTICIPANT_NAME_ONE,
     AWAY_SCORE_CURRENT: response.data.AWAY_SCORE_CURRENT,
     AWAY_SCORE_PART_1: response.data.AWAY_SCORE_PART_1,
     AWAY_SCORE_PART_2: response.data.AWAY_SCORE_PART_2,
     CATEGORY_NAME: response.data.CATEGORY_NAME,
     COUNTRY_ID: response.data.COUNTRY_ID,
     COUNTRY_NAME: response.data.COUNTRY_NAME,
     HEADER: response.data.HEADER,
     HOME_EVENT_PARTICIPANT_ID: response.data.HOME_EVENT_PARTICIPANT_ID,
     HOME_GOAL_VAR: response.data.HOME_GOAL_VAR,
     HOME_IMAGES: response.data.HOME_IMAGES,
     HOME_NAME: response.data.HOME_NAME,
     HOME_PARTICIPANT_NAME_ONE: response.data.HOME_PARTICIPANT_NAME_ONE,
     HOME_SCORE_CURRENT: response.data.HOME_SCORE_CURRENT,
     HOME_SCORE_PART_1: response.data.HOME_SCORE_PART_1,
     HOME_SCORE_PART_2: response.data.HOME_SCORE_PART_2,
     MERGE_STAGE_TYPE: response.data.MERGE_STAGE_TYPE,
     NAME: response.data.NAME,
     NAME_PART_1: response.data.NAME_PART_1,
     NAME_PART_2: response.data.NAME_PART_2,
     ROUND: response.data.ROUND,
     SHORTNAME_AWAY: response.data.SHORTNAME_AWAY,
     SHORTNAME_HOME: response.data.SHORTNAME_HOME,
     SHORT_NAME: response.data.SHORT_NAME,
     SORT: response.data.SORT,
     SPORT: response.data.SPORT,
     STAGE: response.data.STAGE,
     STAGE_START_TIME: response.data.STAGE_START_TIME,
     STAGE_TYPE: response.data.STAGE_TYPE,
     START_UTIME: response.data.START_UTIME,
     TOURNAMENT_ID: response.data.TOURNAMENT_ID,
     TOURNAMENT_IMAGE: response.data.TOURNAMENT_IMAGE,
     URL: response.data.URL,
     lastUpdated: response.data.lastUpdated,
     WINNER: response.data.WINNER,
     //  winnerSC: response.data.winnerSC,
    };
    return event;
   }),
  );
 }
 ////////////////////////////////////////////////////////////////
 getSports() {
  return this.http.get<sport[]>(`${this.api}sports`);
 }

 getTournaments(idSport: number) {
  return this.http.get<Tournament>(`${this.api}tournament/${idSport}/1`);
 }

 getEventsByTournament(idEvent: string, days: number = 7) {
  return this.http.get(`${this.api}events/${idEvent}/${days}`);
 }

 getCountriesBySportId(idSport: number, days: number = 7) {
  // router.route("/:sportId").get(eventController.getCountriesBySport);
  return this.http.get(`${this.api}country/${idSport}/${days}`);
 }

 getTournamentsByCountryId(idSport: number, idCountry: number, days: number = 7) {
  // router.route("/:sportId").get(eventController.getCountriesBySport);
  return this.http.get(`${this.api}tournament/${idSport}/${idCountry}/${days}`);
 }
}
