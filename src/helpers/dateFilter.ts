import { Item } from '../types/Item'

export const getCurrentMonth = (): string => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() === parseInt(month)-1){
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    // let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    // let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    
    let month = addZeroToDate(date.getMonth()+1)
    let day = addZeroToDate(date.getDate())

    return `${day}/${month}/${year}`
}

const addZeroToDate = (n: number): string => {
    if(n < 10){
        return `0${n}`
    }else{
        return `${n}`
    }
}

export const FormatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    let months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro']

    return `${months[parseInt(month) -1]} de ${year}`

}

export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }