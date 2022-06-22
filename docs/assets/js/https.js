# JS World Technology's
# Anti http:// protocol.
# By Pythoniaweb

if (location.protocol !== 'https:') {
    console.error("http detected! Making https:")
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
} 
