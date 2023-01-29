class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    const json = await response.json();
    return json;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
