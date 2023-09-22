// To use any npm package, just import it
// import axios from "axios"

export default defineComponent({
  async run({ steps, $ }) {
    return steps.get_artist_top_tracks.$return_value.map(r => {
      return {
        name: r.name,
        duration:r.duration_ms,
        album:r.album, 
        preview:r.preview_url, 
        external_url:r.external_urls.spotify
      }

    });
  },
})