import React from 'react';
import './App.css';
import Row from './components/Row';

function App() {

  const songs = [
    {
      "platform": "spotify",
      "id": "6gr7Wcb6w0DxDhEpzOp6Ct",
      "title": "Lying Together",
      "artist": "FKJ",
      "artistLink": "https://open.spotify.com/artist/2FwDTncULUnmANIh7qKa5z",
      "album": "Lying Together",
      "albumLink": "https://open.spotify.com/album/3e49AjYl1iYeOvAAC3GgKo",
      "isrc": "FR9W11411340",
      "duration": "271",
      "trackLink": "https://open.spotify.com/track/6gr7Wcb6w0DxDhEpzOp6Ct",
      "preview": "https://p.scdn.co/mp3-preview/ec8baef0b4e1a9125d146559a8937b6e5c19a555?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/d15cded833fab726ff399237a3f7b6f2d15bb17f",
      "addedDate": 1539677057,
      "position": "1",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "0lnfcWRREvnGtXPP2ZDeq7",
      "title": "Que Sera",
      "artist": "Wax Tailor",
      "artistLink": "https://open.spotify.com/artist/3qwxSif06Qwzykdln8ZGfG",
      "album": "Tales of the Forgotten Melodies",
      "albumLink": "https://open.spotify.com/album/1sWIbvCurzF7ZVFYWjLGQO",
      "isrc": "FRP180400180",
      "duration": "164",
      "trackLink": "https://open.spotify.com/track/0lnfcWRREvnGtXPP2ZDeq7",
      "preview": "https://p.scdn.co/mp3-preview/65ac0ccb3e6d476abc9bf0300057fa69ebe29ed7?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/c02ccd3c40abbc1385df78f0840ea9ff6a838ecf",
      "addedDate": 1539677057,
      "position": "2",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "29MvtOnoAULKQfEKAPCbja",
      "title": "Southern Man",
      "artist": "Akshin Alizadeh",
      "artistLink": "https://open.spotify.com/artist/6eBIpic8O1RW435sVsjYfy",
      "album": "Street Bangerz Volume 8",
      "albumLink": "https://open.spotify.com/album/5KdKwVnwqDBduNNwOcLcKj",
      "isrc": "USEAX1401587",
      "duration": "237",
      "trackLink": "https://open.spotify.com/track/29MvtOnoAULKQfEKAPCbja",
      "preview": "https://p.scdn.co/mp3-preview/4be7f00b91424f619dac504aa3952b8f3b5c631f?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/5e68303576b87feb2ffb3dab6a920efd6781106c",
      "addedDate": 1539677057,
      "position": "5",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "46LwAOzg3UYvxiXyyaFedz",
      "title": "Breathe",
      "artist": "T\u00e9l\u00e9popmusik",
      "artistLink": "https://open.spotify.com/artist/3aKCo8gLJfuPYtr88aWKjF",
      "album": "genetic world",
      "albumLink": "https://open.spotify.com/album/401DhjeJg1yVIfBN2A55JY",
      "isrc": "FR06S0100640",
      "duration": "296",
      "trackLink": "https://open.spotify.com/track/46LwAOzg3UYvxiXyyaFedz",
      "picture": "https://i.scdn.co/image/604adac33fc8434dbd015a33cc96de828109a533",
      "addedDate": 1539677057,
      "position": "1",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "2aFCXdFtYxGlNEvgXRbctK",
      "title": "Words Remain",
      "artist": "Moderator",
      "artistLink": "https://open.spotify.com/artist/6fynenqBn7lrlAgVCw5YnB",
      "album": "The World Within",
      "albumLink": "https://open.spotify.com/album/17gN0MsG9WxvEfRNHeKm8F",
      "isrc": "TCACD1599893",
      "duration": "207",
      "trackLink": "https://open.spotify.com/track/2aFCXdFtYxGlNEvgXRbctK",
      "preview": "https://p.scdn.co/mp3-preview/6400f9c978f4733591f8fef7ea34e5c0b3c41cb3?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/05979258f7b8cb71ea3b702efdc085da524387db",
      "addedDate": 1539677057,
      "position": "3",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "7eN0Sdh3AE1VKKLSsFwKBh",
      "title": "Want It Back (feat. Patrice & The Studio School Voices NYC)",
      "artist": "Guts, The School Voices NYC, Patrice",
      "artistLink": "https://open.spotify.com/artist/5mMkUZv8uUrlH0SHX89BeS",
      "album": "Hip Hop After All",
      "albumLink": "https://open.spotify.com/album/0w7sDS0APyRmH0HBPtiE8E",
      "isrc": "FR4EO1400039",
      "duration": "212",
      "trackLink": "https://open.spotify.com/track/7eN0Sdh3AE1VKKLSsFwKBh",
      "preview": "https://p.scdn.co/mp3-preview/3e09b0d5dd989568f6b35e0c0dc4fc9a64e028b8?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/633dc6aa7c4e85fd6b69a28fecbd1e87d03d0c8a",
      "addedDate": 1539677057,
      "position": "10",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "2UKYMN7VnsQo40n0qCt6Sa",
      "title": "Porcelain",
      "artist": "Moby",
      "artistLink": "https://open.spotify.com/artist/3OsRAKCvk37zwYcnzRf5XF",
      "album": "Play & Play: B Sides",
      "albumLink": "https://open.spotify.com/album/3wRlU7n3LULfjL0e9RtB5Q",
      "isrc": "GBAJH9900036",
      "duration": "241",
      "trackLink": "https://open.spotify.com/track/2UKYMN7VnsQo40n0qCt6Sa",
      "picture": "https://i.scdn.co/image/aeb87b5b989f7d7ba26cd37f45498a42d17f1bc5",
      "addedDate": 1539677057,
      "position": "3",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "5epszgVX6xIOgNdGOQbTmg",
      "title": "Chinese Puzzle - G\u00e9n\u00e9rique de fin",
      "artist": "Kraked Unit",
      "artistLink": "https://open.spotify.com/artist/0opLaXLw5xoaHdpss1Xyny",
      "album": "Casse T\u00eate Chinois (Bande originale du film de C\u00e9dric Klapisch)",
      "albumLink": "https://open.spotify.com/album/0hhIrBVIL2HcUmRrSjVlUS",
      "isrc": "FR6V82060973",
      "duration": "221",
      "trackLink": "https://open.spotify.com/track/5epszgVX6xIOgNdGOQbTmg",
      "preview": "https://p.scdn.co/mp3-preview/7c18f3370f52eba30f9cd7631a042121030bfd2d?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/07baf280951e56b2373c5d46954cb4e6a8290812",
      "addedDate": 1539677057,
      "position": "21",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "4ox2odCf0XL0g6692URWwe",
      "title": "But I Do",
      "artist": "Poldoore",
      "artistLink": "https://open.spotify.com/artist/3ph6BKBPsjP7Vhtd1IXhkc",
      "album": "Street Bangerz Volume 6: Playhouse",
      "albumLink": "https://open.spotify.com/album/0BHnSZAC8IfThmwlPcQQMz",
      "isrc": "USEAX1100616",
      "duration": "240",
      "trackLink": "https://open.spotify.com/track/4ox2odCf0XL0g6692URWwe",
      "preview": "https://p.scdn.co/mp3-preview/490d00b686f84cbe20580155f54b06ebaf04f01d?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/3d529ab246ae1197ad058ce5afc53e994008935a",
      "addedDate": 1539677057,
      "position": "6",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "7jKp4Yl1p89ByCMOjh2fHR",
      "title": "Peace and tranquility to earth",
      "artist": "Roudoudou",
      "artistLink": "https://open.spotify.com/artist/6YTtkGLYyAHNUGD8PVL6SL",
      "album": "listener's digest",
      "albumLink": "https://open.spotify.com/album/6VsiGQn3S3dgape5u4dZhB",
      "isrc": "FRY689701830",
      "duration": "254",
      "trackLink": "https://open.spotify.com/track/7jKp4Yl1p89ByCMOjh2fHR",
      "preview": "https://p.scdn.co/mp3-preview/8369b715da3eb7ef9cd4fc851df185a35dc9d52a?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/3223fd2905164c7f84d5e3e34c4904881dbb6bb5",
      "addedDate": 1539677057,
      "position": "7",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "5Nn2Dj7OQsGL6pgQ9iIzPp",
      "title": "Ghostwriter",
      "artist": "RJD2",
      "artistLink": "https://open.spotify.com/artist/1O3ZOjqFLEnbpZexcRjocn",
      "album": "Deadringer: Deluxe",
      "albumLink": "https://open.spotify.com/album/7DmNwRBDJRUEFUlk3oa2Aj",
      "isrc": "USA4T0403506",
      "duration": "318",
      "trackLink": "https://open.spotify.com/track/5Nn2Dj7OQsGL6pgQ9iIzPp",
      "preview": "https://p.scdn.co/mp3-preview/d079b16eb0cae5c54fe3f76df0219c72a2f1e173?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/5d81e4e47c27223853b2328186120158a4b48400",
      "addedDate": 1539677057,
      "position": "6",
      "shareUrls": [
      ]
    },
    {
      "platform": "spotify",
      "id": "5u2chFalnZgdgN8K3YKxI0",
      "title": "Yeah Yeah Yeah",
      "artist": "Kognitif",
      "artistLink": "https://open.spotify.com/artist/6Jv6uJdhLc9R50kSy6RbLz",
      "album": "Soul Food",
      "albumLink": "https://open.spotify.com/album/6grLCGzVBkmrdvYmnLxOwv",
      "isrc": "TCACF1576204",
      "duration": "248",
      "trackLink": "https://open.spotify.com/track/5u2chFalnZgdgN8K3YKxI0",
      "preview": "https://p.scdn.co/mp3-preview/659d3328a5c469e12b567aa4848560e91d4d5d63?cid=7d6e6a3d46f443159acf4529c6a2dd06",
      "picture": "https://i.scdn.co/image/e9d2a422e4ca07da3559ff7de9eff447a824ea8c",
      "addedDate": 1539677057,
      "position": "7",
      "shareUrls": [
      ]
    }
  ]

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th className="txt-left">Title</th>
            <th><i className="far fa-clock"></i></th>
            <th><i className="far fa-thumbs-up"></i></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((element, index) => {
            return <Row key={index} liked={false} info={element} />
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
