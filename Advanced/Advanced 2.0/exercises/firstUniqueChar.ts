function firstUniqueChar(s: string): number {
    
    const freq: Record<string, number> = {}
    
    for (const char of s){
        freq[char] = (freq[char] || 0) + 1;  //count occurences
    }

    for (let i= 0; i < s.length; i++){
        if (freq[i] === 1) return i
    }

    return -1;
}