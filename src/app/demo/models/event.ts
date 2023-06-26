export class Event {
 EVENT_ID: string;
 AWAY_EVENT_PARTICIPANT_ID: string;
 AWAY_GOAL_VAR: number;
 AWAY_IMAGES: string;
 AWAY_NAME: string;
 AWAY_PARTICIPANT_NAME_ONE: string;
 AWAY_SCORE_CURRENT: string;
 AWAY_SCORE_PART_1: number;
 AWAY_SCORE_PART_2: number;
 CATEGORY_NAME: string;
 COUNTRY_ID: number;
 COUNTRY_NAME: string;
 HEADER: string;
 HOME_EVENT_PARTICIPANT_ID: string;
 HOME_GOAL_VAR: number;
 HOME_IMAGES: string;
 HOME_NAME: string;
 HOME_PARTICIPANT_NAME_ONE: string;
 HOME_SCORE_CURRENT: string;
 HOME_SCORE_PART_1: number;
 HOME_SCORE_PART_2: number;
 MERGE_STAGE_TYPE: string;
 NAME: string;
 NAME_PART_1: string;
 NAME_PART_2: string;
 ROUND: string;
 SHORTNAME_AWAY: string;
 SHORTNAME_HOME: string;
 SHORT_NAME: string;
 SORT: string;
 SPORT: number;
 STAGE: string;
 STAGE_START_TIME: number;
 STAGE_TYPE: string;
 START_UTIME: number;
 TOURNAMENT_ID: string;
 TOURNAMENT_IMAGE: string;
 URL: string;
 lastUpdated: number;
 WINNER: number;

 //effectiveUSDT = USDT + (ATON equivalente en USDT)
 // stake effectiveUSDT Team A
 // stake effectiveUSDT Team B

 //
 //  si se puede abrir | active y aun no comienza (aqui ocurren las apuestas)| active y ya comenzo el evento (NO se aceptan mas apuestas)| si se puede cerrar |
 constructor(data: Partial<Event>) {
  Object.assign(this, data);
 }
 static getDefaultEvent(_eventId: string): Event {
  return new Event({
   EVENT_ID: _eventId,
   AWAY_EVENT_PARTICIPANT_ID: '',
   AWAY_GOAL_VAR: 0,
   AWAY_IMAGES: '',
   AWAY_NAME: '',
   AWAY_PARTICIPANT_NAME_ONE: '',
   AWAY_SCORE_CURRENT: '',
   AWAY_SCORE_PART_1: 0,
   AWAY_SCORE_PART_2: 0,
   CATEGORY_NAME: '',
   COUNTRY_ID: 0,
   COUNTRY_NAME: '',
   HEADER: '',
   HOME_EVENT_PARTICIPANT_ID: '',
   HOME_GOAL_VAR: 0,
   HOME_IMAGES: '',
   HOME_NAME: '',
   HOME_PARTICIPANT_NAME_ONE: '',
   HOME_SCORE_CURRENT: '',
   HOME_SCORE_PART_1: 0,
   HOME_SCORE_PART_2: 0,
   MERGE_STAGE_TYPE: '',
   NAME: '',
   NAME_PART_1: '',
   NAME_PART_2: '',
   ROUND: '',
   SHORTNAME_AWAY: '',
   SHORTNAME_HOME: '',
   SHORT_NAME: '',
   SORT: '',
   SPORT: 0,
   STAGE: '',
   STAGE_START_TIME: 0,
   STAGE_TYPE: '',
   START_UTIME: 0,
   TOURNAMENT_ID: '',
   TOURNAMENT_IMAGE: '',
   URL: '',
   lastUpdated: 0,
   WINNER: -1,
  });
 }
}
