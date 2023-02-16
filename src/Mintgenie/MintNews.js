import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BsTypeH1 } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import newsPersonality from './Material/uiq-icon-bg.png'
import portfolio from './Material/portfolioinvestgraph.png'
import ebattle from './Material/enterbattlegroundgraph.png'
import investiggr from './Material/newtoinvestinggraph.png'

const MintNews = ({ logo }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    const getAPIData = async () => {
        try {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=175c616b390f4ba2bcfce0f387b01e55")
            console.log(res.data.articles)
            // console.log(res.data.articles[0].source.name)
            setData(res.data.articles)
        }
        catch (error) {
            setError(error.message)
        }


    }
    useEffect(() => {
        getAPIData()
    }, [])

    // const bold = () => {
    //     document.getElementById()
    // }

    let message = () => {
        <img src="./Mintgenie/depositphotos_80897014-stock-photo-page-not-found.jpg" alt="" />
    }

    return (
        <div>

            <div className='flex'>
                <div>
                    <div className='w-[59.3rem] h-[35rem] mb-2 bg-white rounded-lg shadow-md border '>
                        <div className='flex'>
                            <div className='ml-5 mt-2'>
                                <p className='text-xl font-bold'>MINTGENIE SPECIALS</p>
                                {(data.slice(0, 1)).map((items, index) => {
                                    // { error !== '' && <h2>{error}</h2> }
                                    const { url, publishedAt, source, urlToImage, description, title, name } = items;
                                    try {
                                        // console.log(res.data.articles[0].source.name)
                                        // setData(res.data.articles)
                                    }
                                    catch (error) {
                                        setError(error.message)
                                    }
                                    return (
                                        <div key={index}>
                                            <a href={url}>
                                                <div className='mt-2'>
                                                    <img className='h-[20rem] w-[50rem] rounded-lg' src={urlToImage} alt="Top-headlines image" />
                                                </div>
                                                <h2 className='text-2xl font-bold w-[30rem] mt-2' key={index} > {title}</h2>
                                                <div className='flex items-center divide-gray-400 divide-x text-black -ml-6 -mt-1'>
                                                    <img className='h-[4.5rem]' src={logo} alt="" />
                                                    <p className='text-[0.8rem] font-[400] text-gray-500 pl-1 -ml-6 -mt-3'>{source.name}</p>
                                                </div>
                                            </a>
                                        </div>)
                                })}

                            </div>
                            <div className='mt-10 ml-7 mr-6'>
                                {(data.slice(2, 5)).map((items, index) => {
                                    // {error !== '' && <h2>{error}</h2>}
                                    const { url, publishedAt, source, urlToImage, description, title, name } = items;
                                    return (
                                        <div key={index} className=''>
                                            <a href={url} className='mt-10 divide-dashed divide-y divide-black '>
                                                <div className=''>
                                                    <p className='font-semibold'>Markets</p>
                                                    <div className='flex mt-[0.15rem] '>
                                                        <h2 className='text-lg font-normal w-3/4 leading-5' key={index} > {title}</h2>
                                                        <img className='h-[5.5rem] w-[5.5rem] rounded-md -mt-4 ml-4' src={urlToImage} alt="Top-headlines image" />
                                                    </div>
                                                    <div className='flex items-center divide-gray-400 divide-x text-black -mt-4 -ml-7 '>
                                                        <img className='h-[4.5rem]' src={logo} alt="" />
                                                        <p className='text-[0.8rem] font-[400] text-gray-500 pl-1 -ml-6 -mt-3'>{source.name}</p>
                                                    </div>
                                                </div>
                                                <hr className='-mt-5 mb-5' />
                                            </a>
                                        </div>

                                    )
                                })}
                                <a href="" className='flex justify-end underline text-blue-500 pb-5 w-auto'>View all</a>
                            </div>

                        </div>
                    </div>
                    <div className='mt-5 flex gap-5'>
                        <div className=' h-[9.5rem] w-[18.8rem] mb-20 bg-gradient-to-r from-blue-400 to-fuchsia-900 rounded-lg cursor-pointer'>
                            <div className='flex mt-4 ml-2'>
                                <img className='h-20' src={portfolio} alt="" />
                                <div className='text-white -mt-1 ml-3'>
                                    <p className='font-bold'>Create new Portfolio</p>
                                    <p className='text-sm font-light mt-1'>Invest in stocks, mutual funds, ETFs, and stock baskets. Track your investments in stocks and mutual funds.</p>
                                </div>
                            </div>
                            <div className='flex justify-end text-white mr-1'><IoIosArrowForward className='bg-slate-600 rounded-full h-6 w-6 p ' /></div>
                        </div>

                        <div className='h-[9.5rem] w-[18.8rem] mb-20 bg-gradient-to-r from-fuchsia-900 to-slate-900 rounded-lg cursor-pointer'>
                            <div className='flex mt-5 ml-2'>
                                <img className='h-14' src={ebattle} alt="" />
                                <div className='text-white ml-3 -mt-2'>
                                    <p className='font-bold'>Enter the Battle Ground</p>
                                    <p className='text-sm font-light mt-1'>Create your Playfolio and participate in play with daily/weekly/monthly games.</p>
                                </div>
                            </div>
                            <div className='flex justify-end text-white mr-1 mt-5'><IoIosArrowForward className='bg-slate-600 rounded-full h-6 w-6 p ' /></div>
                        </div>
                        <div className='h-[9.5rem] w-[18.8rem] mb-20 bg-gradient-to-r from-blue-400 to-fuchsia-800 rounded-lg cursor-pointer'>
                            <div className='flex mt-6 ml-2 '>
                                <img className='h-[4.8rem]' src={investiggr} alt="" />
                                <div className='text-white ml-3 -mt-3'>
                                    <p className='font-bold'>New to investing?</p>
                                    <p className='text-sm font-light'>Learn investing without risking your hard earned money.</p>
                                </div>
                            </div>
                            <div className='flex justify-end text-white mr-1 mt-5'><IoIosArrowForward className='bg-slate-600 rounded-full h-6 w-6' /></div>
                        </div>

                    </div>
                    <div className="h-[12.5rem] w-[100%] bg-indigo-100 -mt-[3.8rem] rounded-xl shadow-md">
                        <p className='ml-5 pt-5 font-bold'>Check out top-performing virtual portfolios on Mintgenie</p>
                        <div className='grid grid-cols-3 gap-5 ml-5 mt-4 mr-5'>
                            <div className='h-[5.5rem] pl-3 pt-2 outline-dashed outline-gray-600 outline-1 rounded-lg bg-white'>
                                <a className='text-blue-500 text-sm underline decoration-1 font-light' href=''>Rushikesh</a>
                                <div className='flex divide-x-1px divide-gray-400'>
                                    <div className='mt-1 pr-4'>
                                        <p className='text-[0.7rem] font-[5]'>Portfolio Net Worth</p>
                                        <p className='font-bold text-xl'>1,11,358</p>
                                    </div>
                                    <div className='pl-4 mt-1'>
                                        <p className='text-[0.7rem] font-[5]'>% Change</p>
                                        <p className='font-semibold text-sm text-green-500 '>21.55%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[5.5rem] pl-3 pt-2 outline-dashed outline-gray-600 outline-1 rounded-lg bg-white'>
                                <a className='text-blue-500 text-sm underline decoration-1 font-light' href=''>Rushikesh</a>
                                <div className='flex divide-x-1px divide-gray-400'>
                                    <div className='mt-1 pr-4'>
                                        <p className='text-[0.7rem] font-[5]'>Portfolio Net Worth</p>
                                        <p className='font-bold text-xl'>1,11,358</p>
                                    </div>
                                    <div className='pl-4 mt-1'>
                                        <p className='text-[0.7rem] font-[5]'>% Change</p>
                                        <p className='font-semibold text-sm text-green-500 '>21.55%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[5.5rem] pl-3 pt-2 outline-dashed outline-gray-600 outline-1 rounded-lg bg-white'>
                                <a className='text-blue-500 text-sm underline decoration-1 font-light' href=''>Rushikesh</a>
                                <div className='flex divide-x-1px divide-gray-400'>
                                    <div className='mt-1 pr-4'>
                                        <p className='text-[0.7rem] font-[5]'>Portfolio Net Worth</p>
                                        <p className='font-bold text-xl'>1,11,358</p>
                                    </div>
                                    <div className='pl-4 mt-1'>
                                        <p className='text-[0.7rem] font-[5]'>% Change</p>
                                        <p className='font-semibold text-sm text-green-500 '>21.55%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-6 mt-2'>
                            <IoIosArrowForward className='text-fuchsia-700 mt-[0.2rem]' />
                            <a className='text-blue-500 underline decoration-1 mr-1 text-sm font-medium' href=""> Start your investment journey </a>
                            <p className='text-sm font-medium'> now by creating an invest portfolio or a virtual portfolio.</p>
                        </div>
                    </div>
                    <div className='h-20 w-[100%] border border-gray-100 shadow-md rounded-lg mt-5'>
                        <div className='ml-5 mt-4'>
                            <p className='text-xl font-bold '>Trending Stocks</p>
                            <div className='flex font-bold gap-5'>
                                <p className='hover:underline'>Top Gainers</p>
                                <p className='hover:underline '>Top Losers</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* right section */}




                <div className='ml-5'>
                    <div className='  h-[16rem] w-[19rem] bg-gray-500'>

                    </div>
                    <div className='flex items-center mt-4 h-24 w-[19rem] bg-gradient-to-r from-teal-100 to-yellow-50 rounded-2xl'>
                        <img className='h-16 ml-4' src={newsPersonality} alt="" />
                        <div className='ml-2'>
                            <p className='font-medium text-sm '>Investor Personality Test</p>
                            <p className='font-extralight text-gray-600 text-sm '>Complete our investor test to understandand work on your investment basis</p>
                        </div>
                    </div>
                    <div className='w-[19rem] mt-4 shadow-md border border-gray-200 rounded-lg'>
                        <div className='mt-4 ml-4 mr-4'>
                            <h2 className='text-lg font-bold'>LATEST NEWS</h2>
                            {(data.slice(0, 5)).map((items, index) => {
                                // {error !== '' && <h2>{error}</h2>}
                                const { url, publishedAt, source, urlToImage, description, title, name } = items;
                                return (
                                    <div key={index} className=''>
                                        <a href={url} className='mt-10 divide-dashed divide-y divide-black '>
                                            <div className=''>
                                                <p className='text-xs font-bold mt-2'>PERSONAL FINANCE</p>
                                                <div className='flex mt-1'>
                                                    <h2 className=' font-light  leading-5' key={index} > {title}</h2>
                                                </div>
                                                <div className='flex items-center divide-gray-400 divide-x text-black -mt-4 -ml-7 '>
                                                    <img className='h-[4.5rem]' src={logo} alt="" />
                                                    <p className='text-[0.8rem] font-[400] text-gray-500 pl-1 -ml-6 -mt-3'>{source.name}</p>
                                                </div>
                                            </div>
                                            <hr className='-mt-5 mb-5' />
                                        </a>
                                    </div>

                                )
                            })}
                            <a href="" className='flex justify-end underline text-blue-500 pb-5'>View all</a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MintNews