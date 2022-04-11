export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70
    },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return(
                <div className={'cellWithImg'}>
                    <img className={'cellImg'} src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100},
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        },
    },
]
export const userRows = [
    {
        id: 1,
        username: "Lannister",
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        email: '32snow@gmailc.com',
        status: 'active',
        age: 45
    },
    {
        id: 2,
        username: "Lannister",
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        email: '32snow@gmailc.com',
        status: 'active',
        age: 45
    },
    {
        id: 3,
        username: "Lannister",
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        email: '32snow@gmailc.com',
        status: 'passive',
        age: 45
    },
    {
        id: 4,
        username: "Lannister",
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        email: '32snow@gmailc.com',
        status: 'pending',
        age: 45
    },
    {
        id: 5,
        username: "Lannister",
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        email: '32snow@gmailc.com',
        status: 'pending',
        age: 45
    },
    {
        id: 6,
        username: "Lannister",
        img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
        email: '32snow@gmailc.com',
        status: 'active',
        age: 45
    },
]