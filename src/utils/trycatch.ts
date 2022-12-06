export function tryCatch<T>(func: Function, params: T) {
    try {
        return func(params);
    }
    catch (err) {
        console.error('Unexpected error', err, 'In function', func);
    }
}