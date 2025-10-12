


function uniqueBy<T>(arr: T[], key: keyof T): T[]{
    const seen = new Set<string>();
    return arr.filter(item => {
        const keyValue = String(item[key]);
        if (seen.has(keyValue)) return false;
        seen.add(keyValue);
        return true
    })
}