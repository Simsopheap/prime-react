import React from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const [translate] = useTranslation("global")
    const home = { icon: 'pi pi-home', url: '/web/home' }
    const items = [
        { label: translate("GLOBAL.DASHBOARD") },
    ];


    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full flex flex-row justify-content-between align-items-center border-bottom-1 border-200 overflow-hidden" style={{ height: "50px" }}>
                        <div className="w-full flex-1 h-full flex justify-content-start align-items-center">
                            <BreadCrumb model={items} home={home} className="text-md border-none border-noround w-full h-full" style={{ fontFamily: "KantumruyPro", backgroundColor: "transparent" }} />
                        </div>
                        <div className="h-full flex-1 flex flex-row justify-content-end align-items-center">
                            <div className="pr-3">

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-full overflow-auto">
                        <div className="w-full h-full">

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage