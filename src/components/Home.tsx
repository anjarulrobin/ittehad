import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    if (!localStorage.getItem('auth')) {
        navigate('/login', { replace: true });
    }
    return (
        <div className="grid grid-cols-2">
            {
                [
                    {
                        name: 'আসাতিযায়ে কেরাম',
                        path: '/teachers',
                    },
                    {
                        name: 'সনওয়ারী জিম্মাদার',
                        path: '/representatives',
                    },
                    {
                        name: 'ফুজালা ওয়া আবনা',
                        path: '/teachers-and-students',
                    },
                    {
                        name: 'শুরা ও কমিটি',
                        path: '/committee',
                    },
                    // {
                    //     name: 'রক্তদান',
                    //     path: '/blood-donation',

                    // },
                    // {
                    //     name: 'খেদমত',
                    //     path: '/serve',
                    // },
                    {
                        name: 'মোজাকারা',
                        path: '/groups',
                    },
                    {
                        name: 'এলান',
                        path: '/notifications',
                    },

                    {
                        name: 'প্রকাশনা',
                        path: '/publications',
                    },
                    {
                        name: 'যোগাযোগ',
                        path: '/contact',
                    }
                ].map((v, index) => (
                    <Link key={index} to={v.path} className="flex items-center p-2 text-base font-normal rounded-lg">
                        <div className="w-36 h-32 shadow-[0px_6px_32px_rgba(0,0,0,0.04)] m-4">
                            <div className="flex justify-center mt-2">
                                <div>
                                    {getSvg(v.path)}
                                </div>
                            </div>
                            <div className="mt-4 text-center align-middle">
                                {v.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

const getSvg = (name: string) => {

    switch (name) {
        case '/teachers':
            return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                <path d="M26.0474 17.0001C24.8367 17.0001 23.9989 18.7086 23.9989 19.9193C23.9989 21.0606 23.5428 22.097 22.8039 22.8562C22.7802 22.8805 22.7972 22.9219 22.8312 22.9219C24.2536 22.9219 25.5616 23.501 26.5137 24.5495C26.8323 24.9008 27.1019 25.2985 27.3152 25.7246C27.3677 25.8296 27.5085 25.8551 27.591 25.7716L30.5021 22.8617C31.0081 22.3551 31.8295 22.3554 32.3358 22.8617L33.0783 23.603C33.5844 24.1099 33.5841 24.931 33.0776 25.4375L31.7831 26.732C31.3972 27.118 31.3966 27.7436 31.7819 28.1302C32.2878 28.6361 32.2885 29.4577 31.7819 29.9629C31.185 30.5603 31.6081 31.5812 32.4526 31.5812H33.5832C34.3656 31.5812 34.9998 30.9469 34.9998 30.1646L35 20.6363C35 18.6281 33.372 17.0001 31.3638 17.0001L26.0474 17.0001Z" fill="#20BB96" />
                <path d="M19.7849 22.8384C20.3953 22.8384 20.9628 22.6495 21.432 22.3287C22.1988 21.8027 22.7027 20.9201 22.7027 19.9193C22.7027 18.9196 22.1988 18.0367 21.432 17.5097C20.963 17.19 20.3953 17 19.7849 17C18.1712 17 16.8656 18.3067 16.8656 19.9193C16.8656 21.5316 18.1712 22.8384 19.7849 22.8384Z" fill="#20BB96" />
                <path d="M29.9566 28.1374C29.5663 27.7468 29.5665 27.1137 29.957 26.7233L31.7896 24.8915C31.9947 24.6865 31.9946 24.3541 31.7894 24.1493C31.5845 23.9447 31.2526 23.9448 31.0479 24.1495L28.5084 26.6888L27.9977 27.1985L26.955 28.2421C26.8179 28.3793 26.5834 28.2822 26.5834 28.0882C26.5834 26.1328 25.0868 24.2193 22.8314 24.2193H21.432L16.7058 24.2147C14.6519 24.2147 13 25.914 13 28.0338V30.5807C13 31.133 13.4477 31.5807 14 31.5807H27.9171C28.1822 31.5807 28.4365 31.4754 28.624 31.288L30.1586 29.7542C30.5492 29.3638 30.5494 28.7307 30.1591 28.3401L29.9566 28.1374Z" fill="#20BB96" />
            </svg>);
        case '/representatives':
            return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                <path d="M29.81 17.49V18.23L26.27 16.18C24.93 15.41 23.06 15.41 21.73 16.18L18.19 18.24V17.49C18.19 15.24 19.42 14 21.67 14H26.33C28.58 14 29.81 15.24 29.81 17.49Z" fill="#20BB96" />
                <path d="M29.84 19.97L29.7 19.9L28.34 19.12L25.52 17.49C24.66 16.99 23.34 16.99 22.48 17.49L19.66 19.11L18.3 19.91L18.12 20C16.37 21.18 16.25 21.4 16.25 23.29V27.81C16.25 29.7 16.37 29.92 18.16 31.13L22.48 33.62C22.91 33.88 23.45 33.99 24 33.99C24.54 33.99 25.09 33.87 25.52 33.62L29.88 31.1C31.64 29.92 31.75 29.71 31.75 27.81V23.29C31.75 21.4 31.63 21.18 29.84 19.97ZM26.79 25.5L26.18 26.25C26.08 26.36 26.01 26.57 26.02 26.72L26.08 27.68C26.12 28.27 25.7 28.57 25.15 28.36L24.26 28C24.12 27.95 23.89 27.95 23.75 28L22.86 28.35C22.31 28.57 21.89 28.26 21.93 27.67L21.99 26.71C22 26.56 21.93 26.35 21.83 26.24L21.21 25.5C20.83 25.05 21 24.55 21.57 24.4L22.5 24.16C22.65 24.12 22.82 23.98 22.9 23.86L23.42 23.06C23.74 22.56 24.25 22.56 24.58 23.06L25.1 23.86C25.18 23.99 25.36 24.12 25.5 24.16L26.43 24.4C27 24.55 27.17 25.05 26.79 25.5Z" fill="#20BB96" />
            </svg>
            );
        case '/teachers-and-students':
            return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                <path d="M28.83 27.64C29.5 27.2 30.38 27.68 30.38 28.48V29.77C30.38 31.04 29.39 32.4 28.2 32.8L25.01 33.86C24.45 34.05 23.54 34.05 22.99 33.86L19.8 32.8C18.6 32.4 17.62 31.04 17.62 29.77V28.47C17.62 27.68 18.5 27.2 19.16 27.63L21.22 28.97C22.01 29.5 23.01 29.76 24.01 29.76C25.01 29.76 26.01 29.5 26.8 28.97L28.83 27.64Z" fill="#20BB96" />
                <path d="M31.98 18.46L25.99 14.53C24.91 13.82 23.13 13.82 22.05 14.53L16.03 18.46C14.1 19.71 14.1 22.54 16.03 23.8L17.63 24.84L22.05 27.72C23.13 28.43 24.91 28.43 25.99 27.72L30.38 24.84L31.75 23.94V27C31.75 27.41 32.09 27.75 32.5 27.75C32.91 27.75 33.25 27.41 33.25 27V22.08C33.65 20.79 33.24 19.29 31.98 18.46Z" fill="#20BB96" />
            </svg>
            );
        case '/committee':
            return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                <path d="M29.53 19.77C29.46 19.76 29.39 19.76 29.32 19.77C27.77 19.72 26.54 18.45 26.54 16.89C26.54 15.3 27.83 14 29.43 14C31.02 14 32.32 15.29 32.32 16.89C32.31 18.45 31.08 19.72 29.53 19.77Z" fill="#20BB96" />
                <path d="M32.79 26.7C31.67 27.45 30.1 27.73 28.65 27.54C29.03 26.72 29.23 25.81 29.24 24.85C29.24 23.85 29.02 22.9 28.6 22.07C30.08 21.87 31.65 22.15 32.78 22.9C34.36 23.94 34.36 25.65 32.79 26.7Z" fill="#20BB96" />
                <path d="M18.44 19.77C18.51 19.76 18.58 19.76 18.65 19.77C20.2 19.72 21.43 18.45 21.43 16.89C21.43 15.29 20.14 14 18.54 14C16.95 14 15.66 15.29 15.66 16.89C15.66 18.45 16.89 19.72 18.44 19.77Z" fill="#20BB96" />
                <path d="M18.55 24.85C18.55 25.82 18.76 26.74 19.14 27.57C17.73 27.72 16.26 27.42 15.18 26.71C13.6 25.66 13.6 23.95 15.18 22.9C16.25 22.18 17.76 21.89 19.18 22.05C18.77 22.89 18.55 23.84 18.55 24.85Z" fill="#20BB96" />
                <path d="M24.12 27.87C24.04 27.86 23.95 27.86 23.86 27.87C22.02 27.81 20.55 26.3 20.55 24.44C20.56 22.54 22.09 21 24 21C25.9 21 27.44 22.54 27.44 24.44C27.43 26.3 25.97 27.81 24.12 27.87Z" fill="#20BB96" />
                <path d="M20.87 29.94C19.36 30.95 19.36 32.61 20.87 33.61C22.59 34.76 25.41 34.76 27.13 33.61C28.64 32.6 28.64 30.94 27.13 29.94C25.42 28.79 22.6 28.79 20.87 29.94Z" fill="#20BB96" />
            </svg>
            );
        case '/groups':
            return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                <path d="M20.0554 15.0001C19.723 15.0001 19.4041 15.1323 19.1689 15.3674C18.9338 15.6026 18.8017 15.9215 18.8019 16.2541V17.3539H16.254C15.9214 17.3537 15.6024 17.4859 15.3673 17.721C15.1321 17.9563 15 18.2751 15 18.6077V30.8901C15 31.4496 15.2224 31.9863 15.618 32.382C16.0137 32.7776 16.5504 33 17.1099 33H31.9192C32.2517 33 32.5706 32.8678 32.8057 32.6327C33.0408 32.3976 33.173 32.0787 33.173 31.7463V16.254C33.173 15.9214 33.0409 15.6025 32.8058 15.3673C32.5707 15.1322 32.2517 15 31.9192 15L20.0554 15.0001ZM20.8755 17.5124H25.5765V17.5125C25.692 17.5125 25.7855 17.606 25.7855 17.7215V22.374C25.7855 22.4893 25.692 22.5829 25.5765 22.5829H20.8755C20.7602 22.5828 20.6668 22.4893 20.6668 22.374V17.7215C20.6668 17.6061 20.7602 17.5125 20.8755 17.5125V17.5124ZM16.2541 17.7717H18.802V30.8902C18.798 31.4921 18.4746 32.0463 17.9527 32.3461C17.431 32.6458 16.7892 32.6458 16.2674 32.3461C15.7457 32.0463 15.4223 31.4921 15.4183 30.8902V18.6079C15.4183 18.3862 15.5063 18.1735 15.6631 18.0168C15.8198 17.86 16.0325 17.7719 16.2542 17.7719L16.2541 17.7717ZM27.4008 17.7779H30.9799L30.9801 17.778C31.2063 17.7793 31.389 17.9631 31.389 18.1893C31.389 18.4155 31.2063 18.5993 30.9801 18.6006H27.4009C27.1747 18.5993 26.992 18.4155 26.992 18.1893C26.992 17.9631 27.1747 17.7793 27.4009 17.778L27.4008 17.7779ZM27.4008 19.6368H30.9799L30.9801 19.6369C31.2063 19.638 31.3891 19.8218 31.3891 20.0482C31.3891 20.2744 31.2063 20.4582 30.9801 20.4594H27.4009C27.1747 20.4582 26.9919 20.2744 26.9919 20.0482C26.9919 19.8218 27.1747 19.638 27.4009 19.6369L27.4008 19.6368ZM27.4008 21.4955H30.9799L30.9801 21.4957C31.2071 21.4957 31.3913 21.6797 31.3913 21.9069C31.3913 22.1341 31.2071 22.3182 30.9801 22.3182H27.4009C27.1739 22.3182 26.9897 22.1341 26.9897 21.9069C26.9897 21.6797 27.1739 21.4957 27.4009 21.4957L27.4008 21.4955ZM21.0436 23.3544H30.9799C31.207 23.3544 31.3912 23.5386 31.3912 23.7658C31.3912 23.9929 31.207 24.1771 30.9799 24.1771H21.0436C20.8166 24.1771 20.6324 23.9929 20.6324 23.7658C20.6324 23.5386 20.8166 23.3544 21.0436 23.3544ZM21.0436 25.2133H30.9799C31.207 25.2133 31.3912 25.3975 31.3912 25.6246C31.3912 25.8518 31.207 26.0358 30.9799 26.0358H21.0436C20.8166 26.0358 20.6324 25.8518 20.6324 25.6246C20.6324 25.3975 20.8166 25.2133 21.0436 25.2133ZM21.0436 27.0722H24.6228L24.6229 27.072C24.85 27.072 25.0342 27.2562 25.0342 27.4835C25.0342 27.7105 24.85 27.8947 24.6229 27.8947H21.0438C20.8167 27.8947 20.6325 27.7105 20.6325 27.4835C20.6325 27.2562 20.8167 27.072 21.0438 27.072L21.0436 27.0722ZM27.4008 27.0722H30.9799L30.9801 27.072C31.2071 27.072 31.3913 27.2562 31.3913 27.4835C31.3913 27.7105 31.2071 27.8947 30.9801 27.8947H27.4009C27.1739 27.8947 26.9897 27.7105 26.9897 27.4835C26.9897 27.2562 27.1739 27.072 27.4009 27.072L27.4008 27.0722ZM21.0436 28.9311H24.6228L24.6229 28.9309C24.85 28.9309 25.0342 29.1151 25.0342 29.3422C25.0342 29.5694 24.85 29.7535 24.6229 29.7535H21.0438C20.8167 29.7535 20.6325 29.5694 20.6325 29.3422C20.6325 29.1151 20.8167 28.9309 21.0438 28.9309L21.0436 28.9311ZM27.4008 28.9311H30.9799L30.9801 28.9309C31.2071 28.9309 31.3913 29.1151 31.3913 29.3422C31.3913 29.5694 31.2071 29.7535 30.9801 29.7535H27.4009C27.1739 29.7535 26.9897 29.5694 26.9897 29.3422C26.9897 29.1151 27.1739 28.9309 27.4009 28.9309L27.4008 28.9311ZM21.0436 30.79H24.6228L24.6229 30.7898C24.85 30.7898 25.0342 30.9739 25.0342 31.2011C25.0342 31.4282 24.85 31.6124 24.6229 31.6124H21.0438C20.8167 31.6124 20.6325 31.4282 20.6325 31.2011C20.6325 30.9739 20.8167 30.7898 21.0438 30.7898L21.0436 30.79ZM27.4008 30.79H30.9799L30.9801 30.7898C31.2071 30.7898 31.3913 30.9739 31.3913 31.2011C31.3913 31.4282 31.2071 31.6124 30.9801 31.6124H27.4009C27.1739 31.6124 26.9897 31.4282 26.9897 31.2011C26.9897 30.9739 27.1739 30.7898 27.4009 30.7898L27.4008 30.79Z" fill="#20BB96" />
            </svg>
            );
        case '/notifications':
            return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                    <path d="M30 28.75C29.84 28.75 29.69 28.7 29.55 28.6C29.22 28.35 29.15 27.88 29.4 27.55C30.97 25.46 30.97 22.54 29.4 20.45C29.15 20.12 29.22 19.65 29.55 19.4C29.88 19.15 30.35 19.22 30.6 19.55C32.56 22.17 32.56 25.83 30.6 28.45C30.45 28.65 30.23 28.75 30 28.75Z" fill="#20BB96" />
                    <path d="M31.83 31.25C31.67 31.25 31.52 31.2 31.38 31.1C31.05 30.85 30.98 30.38 31.23 30.05C33.9 26.49 33.9 21.51 31.23 17.95C30.98 17.62 31.05 17.15 31.38 16.9C31.71 16.65 32.18 16.72 32.43 17.05C35.5 21.14 35.5 26.86 32.43 30.95C32.29 31.15 32.06 31.25 31.83 31.25Z" fill="#20BB96" />
                    <path d="M26.02 15.78C24.9 15.16 23.47 15.32 22.01 16.23L19.09 18.06C18.89 18.18 18.66 18.25 18.43 18.25H17.5H17C14.58 18.25 13.25 19.58 13.25 22V26C13.25 28.42 14.58 29.75 17 29.75H17.5H18.43C18.66 29.75 18.89 29.82 19.09 29.94L22.01 31.77C22.89 32.32 23.75 32.59 24.55 32.59C25.07 32.59 25.57 32.47 26.02 32.22C27.13 31.6 27.75 30.31 27.75 28.59V19.41C27.75 17.69 27.13 16.4 26.02 15.78Z" fill="#20BB96" />
                </svg>
            );
        case '/publications':
            return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                    <path d="M34 16.8501V28.7401C34 29.7101 33.21 30.6001 32.24 30.7201L31.93 30.7601C30.29 30.9801 27.98 31.6601 26.12 32.4401C25.47 32.7101 24.75 32.2201 24.75 31.5101V17.6001C24.75 17.2301 24.96 16.8901 25.29 16.7101C27.12 15.7201 29.89 14.8401 31.77 14.6801H31.83C33.03 14.6801 34 15.6501 34 16.8501Z" fill="#20BB96" />
                    <path d="M22.71 16.7101C20.88 15.7201 18.11 14.8401 16.23 14.6801H16.16C14.96 14.6801 13.99 15.6501 13.99 16.8501V28.7401C13.99 29.7101 14.78 30.6001 15.75 30.7201L16.06 30.7601C17.7 30.9801 20.01 31.6601 21.87 32.4401C22.52 32.7101 23.24 32.2201 23.24 31.5101V17.6001C23.24 17.2201 23.04 16.8901 22.71 16.7101ZM17 19.7401H19.25C19.66 19.7401 20 20.0801 20 20.4901C20 20.9101 19.66 21.2401 19.25 21.2401H17C16.59 21.2401 16.25 20.9101 16.25 20.4901C16.25 20.0801 16.59 19.7401 17 19.7401ZM20 24.2401H17C16.59 24.2401 16.25 23.9101 16.25 23.4901C16.25 23.0801 16.59 22.7401 17 22.7401H20C20.41 22.7401 20.75 23.0801 20.75 23.4901C20.75 23.9101 20.41 24.2401 20 24.2401Z" fill="#20BB96" />
                </svg>
            )
        case '/contact':
            return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
                <path d="M30.47 28.83L30.86 31.99C30.96 32.82 30.07 33.4 29.36 32.97L25.9 30.91C25.66 30.77 25.6 30.47 25.73 30.23C26.23 29.31 26.5 28.27 26.5 27.23C26.5 23.57 23.36 20.59 19.5 20.59C18.71 20.59 17.94 20.71 17.22 20.95C16.85 21.07 16.49 20.73 16.58 20.35C17.49 16.71 20.99 14 25.17 14C30.05 14 34 17.69 34 22.24C34 24.94 32.61 27.33 30.47 28.83Z" fill="#20BB96" />
                <path d="M25 27.23C25 28.42 24.56 29.52 23.82 30.39C22.83 31.59 21.26 32.36 19.5 32.36L16.89 33.91C16.45 34.18 15.89 33.81 15.95 33.3L16.2 31.33C14.86 30.4 14 28.91 14 27.23C14 25.47 14.94 23.92 16.38 23C17.27 22.42 18.34 22.09 19.5 22.09C22.54 22.09 25 24.39 25 27.23Z" fill="#20BB96" />
            </svg>
            );
        // case '/blood-donation':
        //     return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
        //     </svg>
        //     );
        // case '/serve':
        //     return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <circle cx="24" cy="24" r="24" fill="#DAFFF6" />
        //     </svg>
        //     );

    }
}