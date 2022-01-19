import httpService from "./http.service"
const todosEndepoint = "todos/"

const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
                _sort: 'id',
                _order: 'desc',
            },
        })
        return data
    },
    create: async (content) => {
        const { data } = await httpService.post(todosEndepoint, content)
        return data
    }
}

export default todosService
