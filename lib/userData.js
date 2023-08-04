import { getToken } from './authenticate'

export async function addToFavourites(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            "Authorization": `jwt ${getToken()}`
        }
    })
    const data = await res.json();
    if (res.status === 200) {
        return data
    }
    else {
        return [];
    }
}

export async function removeFromFavourites(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `jwt ${getToken()}`
        }
    })

    const data = await res.json();

    if (res.status === 200) {
        return data;
    }
    else {
        return [];
    }
}

export async function getFavourites() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `jwt ${getToken()}`
        }
    })
    const data = await res.json();
    if (res.status === 200) {
        return data;
    }
    else {
        return [];
    }
}

export async function addToHistory(history) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${history}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `jwt ${getToken()}`
        }
    })
    const data = await res.json();
    if (res.status === 200) {
        return data;
    }
    else {
        return []
    }
}

export async function removeFromHistory(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `jwt ${getToken()}`
        }
    })
    const data = await res.json();
    if (res.status === 200) {
        return data;
    }
    else {
        return [];
    }
}

export async function getHistory() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `jwt ${getToken()}`
        }
    })
    const data = await res.json();
    if (res.status === 200) {
        return data;
    }
    else {
        return [];
    }
}