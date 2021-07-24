import React from 'react'
import './index.scss'
import {useTable, useSortBy} from 'react-table'

export default function ArrayData() {

    const data = React.useMemo(
        () => [
            {
                ecole: <><span className="title">Université de paris</span><br/>85 rue de la paix<br/>75001, Paris</>,
                distrib: <><span className="bold">34</span><br/>sur 36</>,
                vente: <><span className="bold">245</span></>,
                revenu: <><span className="bold">435€</span></>,
                somme: <><span className="bold">349€</span><br/>54% plein</>,
                statut: <>OK</>,
            },
            {
                ecole: <><span className="title">Lycée Jean Moulin</span><br/>34 rue de la paix<br/>75001, Paris</>,
                distrib: <><span className="bold">34</span><br/>sur 36</>,
                vente: <><span className="bold">245</span></>,
                revenu: <><span className="bold">435€</span></>,
                somme: <><span className="bold">349€</span><br/>54% plein</>,
                statut: <>OK</>,
            },
            {
                ecole: <><span className="title">Paris Descartes</span><br/>34 rue de la paix<br/>75001, Paris</>,
                distrib: <><span className="bold">34</span><br/>sur 36</>,
                vente: <><span className="bold">245</span></>,
                revenu: <><span className="bold">435€</span></>,
                somme: <><span className="bold">349€</span><br/>54% plein</>,
                statut: <>OK</>,
            },
            {
                ecole: <><span className="title">École Montreuil</span><br/>34 rue de la paix<br/>75001, Paris</>,
                distrib: <><span className="bold">34</span><br/>sur 36</>,
                vente: <><span className="bold">245</span></>,
                revenu: <><span className="bold">435€</span></>,
                somme: <><span className="bold">349€</span><br/>54% plein</>,
                statut: <>OK</>,
            },
            {
                ecole: <><span className="title">HETIC</span><br/>34 rue de la paix<br/>75001, Paris</>,
                distrib: <><span className="bold">34</span><br/>sur 36</>,
                vente: <><span className="bold">245</span></>,
                revenu: <><span className="bold">435€</span></>,
                somme: <><span className="bold">349€</span><br/>54% plein</>,
                statut: <>OK</>,
            }
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'École',
                accessor: 'ecole', // accessor is the "key" in the data
            },
            {
                Header: 'Distrib. fonctionnels',
                accessor: 'distrib',
            },
            {
                Header: 'Ventes /7 jours',
                accessor: 'vente',
            },
            {
                Header: 'Revenus /7 jours',
                accessor: 'revenu',
            },
            {
                Header: 'Somme présente',
                accessor: 'somme',
            },
            {
                Header: 'Statut',
                accessor: 'statut',
            },
        ],
        []
    )

    const tableInstance = useTable({columns, data}, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <div className="arrayData box-default">
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {
                                            column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? ' (A-Z)' : ' (Z-A)') : ''}</span>
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
