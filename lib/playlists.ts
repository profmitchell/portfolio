import { Playlist } from "@/lib/types";

export const GENRE_PLAYLISTS: Playlist[] = [
  {
    id: "jazz",
    title: "Jazz",
    description: "Contemporary jazz fusion and experimental compositions",
    tracks: [
      {
        id: "j1",
        title: "Modal Explorations",
        artist: "Mitchell Cohen",
        duration: "6:45",
        url: "/music/jazz/modal-explorations.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/modal-explorations"
        }
      },
      {
        id: "j2",
        title: "Late Night Session",
        artist: "Mitchell Cohen",
        duration: "5:30",
        url: "/music/jazz/late-night-session.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/late-night-session"
        }
      }
    ]
  },
  {
    id: "electronic",
    title: "Electronic",
    description: "Heavy trap, EDM, dubstep, and drum & bass",
    tracks: [
      {
        id: "e1",
        title: "Bass Drop",
        artist: "Mitchell Cohen",
        duration: "3:45",
        url: "/music/electronic/bass-drop.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/bass-drop"
        }
      },
      {
        id: "e2",
        title: "Trap Nation",
        artist: "Mitchell Cohen",
        duration: "4:20",
        url: "/music/electronic/trap-nation.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/trap-nation"
        }
      }
    ]
  },
  {
    id: "lofi",
    title: "Lo-Fi",
    description: "Chill beats and atmospheric vibes",
    tracks: [
      {
        id: "l1",
        title: "Midnight Study",
        artist: "Mitchell Cohen",
        duration: "3:30",
        url: "/music/lofi/midnight-study.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/midnight-study"
        }
      },
      {
        id: "l2",
        title: "Rainy Days",
        artist: "Mitchell Cohen",
        duration: "4:15",
        url: "/music/lofi/rainy-days.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/rainy-days"
        }
      }
    ]
  }
];

export const SOUND_DESIGN_PLAYLISTS: Playlist[] = [
  {
    id: "cinematic",
    title: "Cinematic",
    description: "Film scoring and atmospheric sound design",
    tracks: [
      {
        id: "c1",
        title: "Epic Rise",
        artist: "Mitchell Cohen",
        duration: "2:30",
        url: "/music/sound-design/epic-rise.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/epic-rise"
        }
      },
      {
        id: "c2",
        title: "Tension Builder",
        artist: "Mitchell Cohen",
        duration: "3:15",
        url: "/music/sound-design/tension-builder.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/tension-builder"
        }
      }
    ]
  },
  {
    id: "infinite",
    title: "Infinite Elements",
    description: "Evolving textures and endless soundscapes",
    tracks: [
      {
        id: "ie1",
        title: "Eternal Drift",
        artist: "Mitchell Cohen",
        duration: "7:30",
        url: "/music/sound-design/eternal-drift.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/eternal-drift"
        }
      },
      {
        id: "ie2",
        title: "Time Stretch",
        artist: "Mitchell Cohen",
        duration: "6:45",
        url: "/music/sound-design/time-stretch.mp3",
        streamingLinks: {
          spotify: "https://open.spotify.com/track/xxxxx",
          appleMusic: "https://music.apple.com/track/xxxxx",
          soundcloud: "https://soundcloud.com/mitchellcohen/time-stretch"
        }
      }
    ]
  }
];