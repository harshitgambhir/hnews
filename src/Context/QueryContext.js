import React from 'react';
import { createContext } from 'react';
import {
  useLocation,
  useHistory
} from "react-router-dom";
import qs from 'query-string';

const languages = [
    { value: 'en', label: 'En' },
    { value: 'hi', label: 'Hi' }
]

export const QueryContext = createContext();

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const QueryProvider = (props) => {
    const _query = useQuery();
    const history = useHistory();
    let queryParams = {};
    let query = {};
    for(var value of _query.keys()) {
        queryParams[value] = _query.get(value);
        if(value === 'lang'){
            let lang = languages.find((l) => l.value === _query.get('lang'));
            query[value] = lang;
            continue;
        }
        query[value] = _query.get(value);
    }

    const _setQuery = (newQuery) => {
        history.push({
            search: `?${qs.stringify({
                ...queryParams,
                ...newQuery
            })}`
        })
    }

    if(!query.lang){
        _setQuery({lang: 'en'})
    }

    return(
        <QueryContext.Provider value={{query, setQuery: _setQuery}}>
            {props.children}
        </QueryContext.Provider>
    )
}

export default QueryProvider;