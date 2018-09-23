import { getTodos } from "./createTODO"

export default ( async function showForm(value) {
    window.alert("Объект сохранен")

    getTodos(value)
})