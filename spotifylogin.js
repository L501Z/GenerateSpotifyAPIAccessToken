const start = async function(){
    const clientId = 'yourid';
    const clientSecret = 'yoursecret';
    
    const getToken = async () => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
          body: 'grant_type=client_credentials',
        });
    
        const data = await response.json();
        const accessToken = data.access_token;
        return accessToken;
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };
    
    const accessToken = await getToken();
    console.log('Access token:', accessToken);
    try {
        const response = await fetch('https://api.spotify.com/v1/me/playlists', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    
        const playlistsData = await response.json();
        console.log('User playlists:', playlistsData.items);
      } catch (error) {
        console.error('Error fetching user playlists:', error);
      }
    
}; // GETS ACCESS TOKEN



document.getElementById("spotify_login").addEventListener("click", start ,{}); //GETS ACCESS TOKEN ONCE BUTTON IS CLICKED
