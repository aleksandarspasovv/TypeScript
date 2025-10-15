
    if (!skipPrefixes) {
        // --- Special Crown Logic ---
        if (msg.user === "ktd8686") {
            prefixes.push(':mal-crown3');
        } else if (msg.user === "jc18101") {
            prefixes.push(':mal-crown2'); 
        } else if (kingsList.indexOf(msg.user) !== -1 || runningTotal > 1000) {
            prefixes.push(':mal-crown');
        }
