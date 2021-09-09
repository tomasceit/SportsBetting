class GamesOdds {
    constructor(sport, team1, team2, tournament, odds1, odds2, gameId, whoWins) {
        this.sport = sport || undefined;
        this.team1 = team1 || undefined;
        this.team2 = team2 || undefined;
        this.tournament = tournament || undefined;
        this.odds1 = odds1 || undefined;
        this.odds2 = odds2 || undefined;
        this.gameId = gameId || undefined;
        this.whoWins = whoWins || undefined;
    }
}