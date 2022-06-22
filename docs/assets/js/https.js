// JS World Technology's

if (location.protocol !== 'https:') {
    console.error("http detected! Making https:")
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
} 
