function compressStrings(s: string): string{
    if (s.length === 0) return s;

    let compressed = '';
    let count = 1;

    for (let i=0; i<=s.length; i++){
        if(s[i] === s[i - 1]){
            count ++;
        } else {
            compressed += s[i - 1] + count;
            count += 1
        }
    }

    return compressed.length < s.length ? compressed : s;
}