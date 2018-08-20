export class CourtServiceClient {
  // COURT_URL = 'http://localhost:4000/api/court';
  COURT_URL = 'https://court-node-server.herokuapp.com/api/court';
  findAllCourts() {
    return fetch(this.COURT_URL)
      .then(response => response.json());
  }
}
