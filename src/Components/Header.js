import React from 'react';
import {
  Menu,
  MenuItem,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { useContext, useEffect, useState } from 'react';
import {QueryContext} from '../Context/QueryContext';
import {ThemeContext} from '../Context/ThemeContext';

const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const {query, setQuery} = useContext(QueryContext);
    const [q, setQ] = useState(query.q || '');
    const [searchBarVisible, setSearchBarVisibility] = useState(false);

    useEffect(() => {
      setQ(query.q)
    }, [query.q])
    return (
      <nav className="">
        {
          searchBarVisible?
          <div className="flex items-center justify-between flex-wrap bg-teal p-4">
            <button className="mr-4 text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center"
            onClick={() => setSearchBarVisibility(!searchBarVisible)}>
              <svg className="fill-current text-gray-800 dark:text-gray-50" viewBox="0 0 512 512">
                <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
              </svg>
            </button>
            <div className="flex-1 dark:bg-gray-700 flex items-center rounded shadow">
              <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => {
                if(e.key === 'Enter'){
                  setQuery({q})
                }
              }} className="dark:bg-gray-700 rounded w-full py-2 pl-6 pr-28 text-gray-700 dark:text-gray-50 leading-tight focus:outline-none" type="text" placeholder="Search" />
                <button onClick={() => setQuery({q})} className="text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center">
                  <svg x="0px" y="0px" viewBox="0 0 512 512" className="fill-current text-gray-800 dark:text-gray-50">
                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                  </svg>                
                </button>
            </div>
          </div>
          :
          <div className="flex items-center justify-between flex-wrap bg-teal p-4">
            <div className="flex items-center flex-no-shrink mr-6">
              <span className="font-semibold text-2xl tracking-tight text-red-500 dark:text-gray-50">News</span>
            </div>
            <div className="hidden sm:block">
              <div className="dark:bg-gray-700 flex items-center rounded shadow">
                <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => {
                  if(e.key === 'Enter'){
                    setQuery({q})
                  }
                }} className="dark:bg-gray-700 rounded w-full py-4 pl-6 pr-28 text-gray-700 dark:text-gray-50 leading-tight focus:outline-none" type="text" placeholder="Search" />
                  <div className="p-1">
                    <button onClick={() => setQuery({q})} className="text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center">
                      <svg x="0px" y="0px" viewBox="0 0 512 512" className="fill-current text-gray-800 dark:text-gray-50">
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                      </svg>
                    </button>
                  </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <div className="block">
                <Menu menuButton={
                  <button className="text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center">
                    <svg x="0px" y="0px" viewBox="0 0 512 512" className="fill-current text-gray-800 dark:text-gray-50">
                      <g>
                        <g>
                          <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256    s26.629,132.668,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98    C485.371,388.668,512,324.38,512,256S485.371,123.332,437.02,74.98z M207.449,35.268c-8.587,8.353-17.868,18.307-27.154,29.893    c-16.058,20.037-29.429,41.603-39.887,64.282h-71.56C100.811,82.328,150.083,47.876,207.449,35.268z M51.695,159.443h76.819    c-8.743,26.116-13.829,53.433-15.157,81.557H30.51C32.421,211.991,39.823,184.462,51.695,159.443z M30.51,271h82.847    c1.328,28.124,6.413,55.441,15.157,81.557H51.695C39.823,327.538,32.421,300.009,30.51,271z M68.848,382.557h71.56    c10.458,22.678,23.829,44.245,39.887,64.282c9.285,11.586,18.566,21.54,27.154,29.893    C150.083,464.124,100.811,429.672,68.848,382.557z M241,466.806c-10.683-9.211-23.966-22.096-37.295-38.728    c-11.657-14.546-21.64-29.735-29.957-45.521H241V466.806z M241,352.557h-80.782c-9.751-25.825-15.367-53.063-16.823-81.557H241    V352.557z M241,241h-97.605c1.457-28.49,7.08-55.727,16.835-81.557H241V241z M241,129.443h-67.252    c8.146-15.462,17.894-30.351,29.243-44.627C216.49,67.837,230.087,54.644,241,45.236V129.443z M481.49,241h-82.847    c-1.328-28.124-6.413-55.441-15.157-81.557h76.819C472.177,184.462,479.58,211.991,481.49,241z M443.152,129.443h-71.56    c-10.458-22.678-23.829-44.245-39.887-64.282c-9.285-11.586-18.566-21.54-27.154-29.893    C361.918,47.876,411.19,82.328,443.152,129.443z M271,45.194c10.683,9.211,23.966,22.096,37.295,38.728    c11.657,14.546,21.64,29.735,29.958,45.521H271V45.194z M271,159.443h80.782c9.752,25.825,15.367,53.063,16.823,81.557H271    V159.443z M271,271h97.604c-1.457,28.49-7.08,55.727-16.835,81.557H271V271z M271,466.763v-84.206h67.252    c-8.146,15.462-17.894,30.351-29.243,44.626C295.51,444.162,281.914,457.354,271,466.763z M304.552,476.732    c8.587-8.353,17.868-18.307,27.154-29.893c16.058-20.037,29.429-41.603,39.887-64.282h71.56    C411.19,429.672,361.918,464.124,304.552,476.732z M460.305,352.557h-76.819c8.743-26.116,13.829-53.433,15.157-81.557h82.847    C479.58,300.009,472.177,327.538,460.305,352.557z"/>
                        </g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                    </svg>       
                  </button>
                }>
                    <MenuItem onClick={() => setQuery({lang: 'en'})}>English</MenuItem>
                    <MenuItem onClick={() => setQuery({lang: 'hi'})}>Hindi</MenuItem>
                </Menu>
              </div>
              <div className="block">
                <button className="text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center"
                onClick={() => setTheme(theme === 'dark' ? 'light': 'dark')}>
                  {
                    theme === 'dark'?
                    <svg className="fill-current text-gray-800 dark:text-gray-50" viewBox="0 0 512 512">
                      <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    :
                    <svg className="fill-current text-gray-800 dark:text-gray-50" viewBox="0 0 512 512">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/>                    
                      <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/>
                    </svg>
                  }
                </button>
              </div>
              <div className="block sm:hidden">
                <button onClick={() => setSearchBarVisibility(!searchBarVisible)} className="text-black dark:text-gray-50 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none w-10 h-10 flex items-center justify-center">
                  <svg x="0px" y="0px" viewBox="0 0 512 512" className="fill-current text-gray-800 dark:text-gray-50">
                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                  </svg>                
                </button>
              </div>
            </div>
          </div>
        }
      </nav>
    );
}

export default Header;