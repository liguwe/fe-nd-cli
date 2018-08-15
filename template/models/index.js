/**
 * 具体用法参考https://dvajs.com/api/#model
 * */
export default {
    // model 的命名空间
    namespace: 'test',
    // 初始值
    state: {},

    // 以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。
    reducers: {
        save(state, {payload: {data: list, total, page}}) {
            return {...state, list, total, page};
        },
    },
    // 以 key/value 格式定义 effect。用于处理异步操作和业务逻辑
    effects: {
        * fetch({payload: {page = 1}}, {call, put}) {
            const {data, headers} = yield call(usersService.fetch, {page});
            yield put({
                type: 'save',
                payload: {
                    data,
                    total: parseInt(headers['x-total-count'], 10),
                    page: parseInt(page, 10),
                },
            });
        },
    },
    // subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/users') {
                    dispatch({type: 'fetch', payload: query});
                }
            });
        },
    },
};
