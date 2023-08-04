import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { isAuthenticated } from "@/lib/authenticate";
import { getFavourites, getHistory } from "@/lib/userData";
import { favouritesAtom, searchHistoryAtom } from "@/store";

const PUBLIC_PATHS = ['/register', '/login', '/'];

export default function RouteGuard(props) {
    const [favourites, setFavourites] = useAtom(favouritesAtom);
    const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
    const [authorized, setAuthorized] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated()){
        updateAtoms();
        }

        authCheck(router.pathname);

        router.events.on('routeChangeComplete', authCheck);

        return () => {
        router.events.off('routeChangeComplete', authCheck);
        };
    }, []);

    async function updateAtoms(){
        setFavourites(await getFavourites());
        setSearchHistory(await getHistory());
    }

    function authCheck(url){
        const path = url.split('?')[0];
        if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)){
        setAuthorized(false);
        router.push('/login');
        } else {
        setAuthorized(true);
        }
    }

    return <>{authorized && props.children}</>
}