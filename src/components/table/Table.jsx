import React from 'react';
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 144909,
            product: "Razer Blade 15",
            img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 343489,
            product: "Razer Blade 15",
            img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Pending'
        },
        {
            id: 947816,
            product: "Razer Blade 15",
            img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Pending'
        },
        {
            id: 893459,
            product: "Razer Blade 15",
            img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved'
        },
        {
            id: 362048,
            product: "Razer Blade 15",
            img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Pending'
        },
    ]
    return (
        <TableContainer component={Paper} className={'table'}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={'tableCell'}>Tracking ID</TableCell>
                        <TableCell className={'tableCell'}>Product</TableCell>
                        <TableCell className={'tableCell'}>Customer</TableCell>
                        <TableCell className={'tableCell'}>Date</TableCell>
                        <TableCell className={'tableCell'}>Amount</TableCell>
                        <TableCell className={'tableCell'}>Payment Method</TableCell>
                        <TableCell className={'tableCell'}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className={'tableCell'}>{row.id}</TableCell>
                            <TableCell className={'tableCell'}>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image"/>
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className={'tableCell'}>{row.customer}</TableCell>
                            <TableCell className={'tableCell'}>{row.date}</TableCell>
                            <TableCell className={'tableCell'}>{row.amount}</TableCell>
                            <TableCell className={'tableCell'}>{row.method}</TableCell>
                            <TableCell className={'tableCell'}>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;