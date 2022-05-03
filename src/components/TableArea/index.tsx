import { Table, TableHeadColumn } from './styles'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[],
    onDelete: (item : Item) => void
}

export const TableArea = ( { list, onDelete }: Props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100}>Data</TableHeadColumn>
                    <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                    <TableHeadColumn>Título</TableHeadColumn>
                    <TableHeadColumn width={150}>Valor</TableHeadColumn>
                    <TableHeadColumn width={80}></TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} onDelete={onDelete}/>
                ) )
                }
            </tbody>
        </Table>
    )
}