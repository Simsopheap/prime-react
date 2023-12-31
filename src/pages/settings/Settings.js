import React from 'react'
import { useTranslation } from 'react-i18next';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const [translate] = useTranslation("global")
    const navigate = useNavigate()

    const home = { icon: 'pi pi-home', command: () => navigate("/home"), }
    const items = [
        { label: translate("GLOBAL.SETTING") },
    ];
    const menuList = [
        { icon: "pi pi-wrench", name: translate("GLOBAL.SETTING"), link: "" },
        { icon: "pi pi-code", name: translate("GLOBAL.DEVELOPER"), link: "" },
        { icon: "pi pi-question-circle", name: translate("GLOBAL.HELP"), link: "" },
    ]
    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-column">
                    <div className="w-full flex flex-row justify-content-between align-items-center border-bottom-1 border-200 overflow-hidden" style={{ height: "50px" }}>
                        <div className="w-full flex-1 h-full flex justify-content-start align-items-center">
                            <div className='ml-2 block md:hidden lg:hidden xl:hidden'>
                                <Button icon="pi pi-align-left" size="small" outlined rounded />
                            </div>
                            <BreadCrumb model={items} home={home} className="text-md border-none border-noround w-full h-full" style={{ backgroundColor: "transparent" }} />
                        </div>
                        <div className="h-full flex-1 flex flex-row justify-content-end align-items-center">
                            <div className="pr-3">

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-full overflow-auto">
                        <div className="w-full h-full">

                            <div className='w-full h-full flex flex-row align-content-center'>
                                {/* background: "#e8f0fe" */}
                                <div className='h-full border-right-1 border-gray-100 shadow-1 overflow-auto hidden md:block lg:block xl:block' style={{ width: "250px" }}>
                                    <div className='w-full h-full'>
                                        <div className='py-1 px-2'>
                                            <ul className='list-none p-0 m-0'>
                                                {
                                                    menuList.map((item, index) => (
                                                        <li key={index} className=' border-round-sm my-1 hover:bg-gray-200 cursor-pointer' style={{ padding: "10px 10px", }}>
                                                            <a href='#' className='block text-left text-800 no-underline'>
                                                                <i className={`${item.icon} pr-3`} style={{ color: '#708090' }}></i>
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-full flex-1 bg-primary-50'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings