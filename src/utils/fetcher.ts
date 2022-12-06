export async function fetcher(url: string, init?: RequestInit) {
    try {
        const rawData = await fetch(url, init);
        return await rawData.json();
    }
    catch (err) {
        console.error('Error network call', err);
    }
}