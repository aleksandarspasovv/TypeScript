function flattenArray<T>(arr: T[]): T[] {
    let result: T[] = [];

    arr.forEach(item => {
        if (Array.isArray(item)){
            result = result.concat(flattenArray(item as unknown as T[]))
        } else {
            result.push(item)
        }
    })

    return result
}

