document.getElementById("loginBtn").addEventListener("click", () => {
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: "identify"
  });

  location.href = `${OAUTH_URL}?${params.toString()}`;
});

