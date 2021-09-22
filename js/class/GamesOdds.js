class GamesOdds {
    constructor(id, sport, tournament, time, team1, team2, odds1, odds2, oddsDraw, whoWins) {
        this.id = id || undefined;
        this.sport_key = sport || undefined;
        this.sport_title = tournament || undefined;
        this.commence_time = time || undefined;
        this.home_team = team1 || undefined;
        this.away_team = team2 || undefined;
        this.odds_home = odds1 || undefined;
        this.odds_away = odds2 || undefined;
        this.odds_draw = oddsDraw || undefined;
        this.whoWins = whoWins || undefined;
    }
}