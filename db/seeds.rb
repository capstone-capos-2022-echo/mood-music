user = User.where(email: 'test@example.com').first_or_create(password: 'password', password_confirmation: 'password')

song_seeds = [
   {
      title: "Burning",
      artist: "The Whitest Boy Alive",
      album: "Dreams",
      mood: "calm",
      album_art: "https://lastfm.freetls.fastly.net/i/u/500x500/82bae0fbcc1c43eda1a4261502887fff.jpg",
      song_link: "https://www.youtube.com/watch?v=LvwBDCb7bmM"
   },
   {
      title: "Katawaredoki",
      artist: "RADWIMPS",
      album: "Your Name.",
      mood: "calm",
      album_art: "https://upload.wikimedia.org/wikipedia/en/c/c2/Radwimps_Your_Name_Album_Cover.jpg",
      song_link: "https://www.youtube.com/watch?v=mhpRipG9Zss&ab_channel=RADWIMPS-Topic"
   },
   {
      title: "On Sight",
      artist: "Kanye West",
      album: "Yeezus",
      mood: "hype",
      album_art: "https://cdns-images.dzcdn.net/images/cover/5a56530f7906bd9786fa47bd0be421b3/500x500.jpg",
      song_link: "https://www.youtube.com/watch?v=uU9Fe-WXew4"
   },
   {
      title: "UGH!",
      artist: "BTS",
      album: "MAP OF THE SOUL: 7",
      mood: "hype",
      album_art: "https://ibighit.com/bts/images/bts/discography/map_of_the_soul-7/img01.jpg",
      song_link: "https://www.youtube.com/watch?v=1yxEmmYQdl8"
   },
   {
      title: "Malibu Nights",
      artist: "LANY",
      album: "Malibu Nights",
      mood: "heartbreak",
      album_art: "https://upload.wikimedia.org/wikipedia/en/a/ad/LANYMalibuNights.png",
      song_link: "https://www.youtube.com/watch?v=KdcPzDNHX74&ab_channel=LANY"
   },
   {
      title: "Not U",
      artist: "HOMESHAKE",
      album: "Fresh Air",
      mood: "heartbreak",
      album_art: "https://media.pitchfork.com/photos/5929c1195e6ef9596932365f/1:1/w_600/265d8390.jpg",
      song_link: "https://www.youtube.com/watch?v=H7lxPn9ctC8"
   },
   {
      title: "Bfg Division",
      artist: "Mick Gordon",
      album: "Doom (Original Game Soundtrack)",
      mood: "fury",
      album_art: "https://m.media-amazon.com/images/I/51QPBYFWe6L._SY580_.jpg",
      song_link: "https://www.youtube.com/watch?v=o6y6chb0Qq8"
   },
   {
      title: "Till I Collapse",
      artist: "Eminem, Nate Dogg",
      album: "The Enimen Show",
      mood: "fury",
      album_art: "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg",
      song_link: "https://www.youtube.com/watch?v=Obim8BYGnOE"
   },
   {
      title: "Breathe Deeper",
      artist: "Tame Impala",
      album: "The Slow Rush",
      mood: "upbeat",
      album_art: "https://media.pitchfork.com/photos/5e41992daf0b890008c98164/1:1/w_600/The%20Slow%20Rush_Tame%20Impala.jpg",
      song_link: "https://www.youtube.com/watch?v=UTwlmgV3pEI"
   },
   {
      title: "The Passenger",
      artist: "Iggy Pop",
      album: "Lust for Life",
      mood: "upbeat",
      album_art: "https://upload.wikimedia.org/wikipedia/en/7/72/IggyPopLustForLife.jpg",
      song_link: "https://www.youtube.com/watch?v=-fWw7FE9tTo"
   },
   {
      title: "Awakening",
      artist: "Jennifer Thomas",
      album: "The Fire Within",
      mood: "epic",
      album_art: "https://jenniferthomasmusic.com/wp-content/uploads/2018/08/fire-within-album-cover.jpg",
      song_link: "https://www.youtube.com/watch?v=Fjidp4TpoSM&ab_channel=JenniferThomas-Topic"
   },
   {
      title: "Leaving Caladan",
      artist: "Hans Zimmer",
      album: "Dune (Original Motion Picture Soundtrack)",
      mood: "epic",
      album_art: "https://i.imgur.com/pTamBceh.jpg",
      song_link: "https://www.youtube.com/watch?v=T0P6YDveLsM"
   }
]

song_seeds.each do |song|
   user.songs.create(song)
end
