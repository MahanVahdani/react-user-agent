export function removeByIndex<T>(arr: Array<T>, index: number): Array<T> { 
    if (index > -1) arr.splice(index, 1);
    return arr;
}

export function removeByValue<T>(arr: Array<T>, value: T): Array<T> { 
    const index = arr.indexOf(value);
    if (index > -1) arr.splice(index, 1); 
    return arr;
}