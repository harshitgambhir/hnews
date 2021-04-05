import React from 'react';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useEffect, useState, useContext } from 'react';
import Dotdotdot from 'react-dotdotdot'
import {QueryContext} from '../Context/QueryContext';
import {ThemeContext} from '../Context/ThemeContext';
moment.locale('en');

const ArticleList = (props) => {
    const [mounted, setMounted] = useState(false)
    const {theme} = useContext(ThemeContext);
    const {query:{lang}} = useContext(QueryContext);

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    useEffect(() => {
        if(lang && lang.value === 'hi'){
            moment.defineLocale('hi-mine', {
                parentLocale: 'hi',
                postformat: function (string) {
                    return string
                }, 
            })
        } else {
            moment.locale('en')
        }
    }, [lang])

    if (!mounted) return null
    
    return (
        <>
        <SkeletonTheme color={theme === 'dark' ? '#262626' : Skeleton.defaultBaseColor} highlightColor={theme === 'dark' ? '#444' : Skeleton.defaultHighlightColor}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            props.loading?
            Array.from(Array(6).keys()).map((i) => (
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"  key={i}>
                        <div className="w-full h-56 object-cover object-center"><Skeleton className="h-full"/></div>
                        <div className="py-4 px-4">
                            <h1 className="text-base font-semibold text-gray-900 dark:text-gray-50">{<Skeleton />}</h1>
                            <p className="py-1 text-sm text-gray-600 dark:text-gray-300">{<Skeleton count={3}/>}</p>
                            <p className="py-1 text-xs text-gray-600 dark:text-gray-300">{<Skeleton width={100}/>}</p>
                        </div>
                    </div>
            ))
            :
            props.articles.map((article, i) => {
                return (
                    <a href={article.url} key={i}>
                        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                            <img className="w-full h-56 object-cover object-center" src={article.image} alt=""/>
                            <div className="py-4 px-4">
                                <Dotdotdot clamp={3}><h1 className="text-lg font-normal text-gray-900 dark:text-gray-50">{article.title}</h1></Dotdotdot>
                                <Dotdotdot clamp={3}><p className="py-1 text-sm text-gray-600 dark:text-gray-300">{article.description}</p></Dotdotdot>
                                <p className="py-1 text-xs text-gray-600 dark:text-gray-300">{article.source.name} · {moment(article.publishedAt, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]").fromNow()}</p>
                            </div>
                        </div>
                    </a>
                )
            })
        }
        </div>
        </SkeletonTheme>
        </>
    )
};

export default ArticleList;