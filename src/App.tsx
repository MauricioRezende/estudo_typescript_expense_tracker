import { useState, useEffect } from 'react'
import { Container, Header, HeaderText, Body} from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { InputArea } from './components/InputArea'

const App = () => {
    const [list, setList] = useState<Item[]>(items)
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth ] = useState(getCurrentMonth())
    const [incomeCount, setIncome] = useState(0)
    const [expenseCount, setExpense] = useState(0)
    
    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth])

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth)
    }

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for(let i in filteredList){
            if(categories[filteredList[i].category].expense){
                expenseCount += filteredList[i].value
            }else{
                incomeCount += filteredList[i].value
            }
        }
        setIncome(incomeCount)
        setExpense(expenseCount)
    }, [filteredList])

    const handleAddItem = (item: Item) => {
        let newList = [...list]
        item.id = newList.length + 1
        newList.push(item)
        setList(newList)
    }

    const handleDeleteItem = (item: Item) => {
        console.log(item)
        let newList = [...list]
        newList = newList.filter(i => i.id !== item.id)
        setList(newList)
    }

    return (
        <Container>
            <Header>
                <HeaderText>Sistema Financeiro</HeaderText>
            </Header>
            <Body>
                <InfoArea 
                currentMonth={currentMonth} 
                onMonthChange={handleMonthChange}
                income={incomeCount}
                expense={expenseCount}
                />
                <InputArea onAdd={handleAddItem}/>
                <TableArea list={filteredList} onDelete={handleDeleteItem}/>
            </Body>
        </Container>
    )
}

export default App