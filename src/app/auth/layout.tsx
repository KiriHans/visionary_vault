function AbstractBg({ children }: {
    children: React.ReactNode;
}): JSX.Element {

    return (
        <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(101,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(173,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='8.91'%3E%3Cpath transform='translate(-119.7 12.799999999999999) rotate(4.1 1409 581) scale(0.9754760000000001)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='2.9700000000000006' transform='translate(-123 84) rotate(12.2 800 450) scale(1.015623)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(34 -135) rotate(109 401 736) scale(1.015623)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='2.7'%3E%3Cpath transform='translate(504 -7.6) rotate(1.9 150 345) scale(0.966492)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='5.940000000000001' transform='translate(-193 -223) rotate(115.20000000000002 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-358.4 105.6) rotate(19.199999999999996 1400 132) scale(0.87)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
        }} className="dark:bg-[#060606] bg-white animate-gradient">
            {children}
        </div>
    )

}

export default function AuthLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <AbstractBg>
            <div className="m-auto flex flex-col justify-center items-center h-svh">
                {children}
            </div>
        </AbstractBg>
    )
}
