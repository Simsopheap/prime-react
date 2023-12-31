import React, { useRef } from 'react'
import { PanelMenu } from 'primereact/panelmenu';
import { useTranslation } from 'react-i18next';
import "./HomeStyle.css";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

function HomePage() {
    const [translate] = useTranslation("global")
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const toastMsgRef = useRef(null);

    const showMessage = () => {
        toastMsgRef.current.show({ severity: 'error', summary: translate("MSG.WARNING"), detail: "Message detail", life: 3500 });
    };

    const isExpandedMenu = (route) => {
        return route.find((x) => x === pathname);
    }
    const isActiveClass = (route) => {
        if (route === pathname) return "bg-gray-300";
    }

    const menuItems = [
        {
            icon: 'pi pi-fw pi-qrcode',
            label: translate("GLOBAL.DASHBOARD"),
            visible: true,
            command: () => { navigate('/home/dashboard') }
        },
        {
            icon: 'pi pi-fw pi-android',
            label: "Android",
            command: () => { navigate('/home/android') }
        },
        {
            label: translate("NAV.STOCK"),
            expanded: isExpandedMenu([
                "/home/stock/item",
            ]),
            items: [
                {
                    label: translate("NAV.ITEM"),
                    icon: 'pi pi-fw pi-inbox',
                    command: () => { navigate('/home/stock/item') },
                    className: isActiveClass("/home/stock/item"),
                },
            ],
        },
        {
            label: translate("NAV.USER_MANAGEMENT"),
            items: [
                {
                    label: translate("NAV.USERS"),
                    icon: 'pi pi-fw pi-user',
                    command: () => { navigate('/home/user') },
                    className: isActiveClass("/home/user"),
                },
                {
                    label: translate("NAV.ROLE"),
                    icon: 'pi pi-fw pi-wrench',
                    command: () => { navigate('/home/role') },
                    className: isActiveClass("/home/role"),
                },
            ],
            expanded: isExpandedMenu([
                "/home/user",
                "/home/role",
            ])
        },
        {
            label: translate("GLOBAL.SETTING"),
            expanded: isExpandedMenu([
                "/home/setting/branch",
            ]),
            items: [
                {
                    label: translate("NAV.BRANCH"),
                    icon: 'pi pi-sitemap',
                    command: () => { navigate('/home/setting/branch') },
                    className: isActiveClass("/home/setting/branch"),
                },
            ],
        },

        {
            label: translate("NAV.TOOLS"),
            expanded: isExpandedMenu([
                "/home/telegram-group",
                "/home/database",
            ]),
            items: [
                {
                    label: translate("Telegram"),
                    icon: 'pi pi-fw pi-telegram',
                    command: () => { navigate('/home/telegram-group') },
                    className: isActiveClass("/home/telegram-group"),
                },
                {
                    icon: 'pi pi-fw pi-database',
                    label: translate("NAV.DATABASE"),
                    disabled: false,
                    command: (e) => {
                        navigate('/home/database')
                    },
                    className: isActiveClass("/home/database"),
                },
            ]
        },
    ];


    return (
        <>
            <div className="w-full h-full z-1">
                <Toast ref={toastMsgRef} position="top-center" />
                <div className="w-full h-full flex flex-column">
                    <div className="flex flex-row w-full h-full overflow-auto">
                        <div className='flex bg-white shadow-2 h-full' style={{ width: "250px" }}>
                            <div className='flex flex-column h-full w-full'>
                                <div className='flex-1 w-full h-full overflow-auto'>
                                    <div className='h-full w-full'>
                                        <PanelMenu model={menuItems} className="w-full"
                                            pt={{
                                                headerAction: ({ context }) => ({ className: context.active ? 'bg-gray-300' : undefined }),
                                                action: ({ context }) => ({ className: context.active ? 'bg-gray-200' : undefined }),
                                            }} />
                                    </div>
                                </div>
                                <div className='flex w-full border-top-1 border-gray-200' style={{ height: "50px" }}>
                                    <div className='p-3 font-bold'>Version 1.0.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 w-full h-full overflow-auto">
                            <div className='w-full h-full'>
                                {<Outlet />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage