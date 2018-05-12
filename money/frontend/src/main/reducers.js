import { combineReducers } from 'redux'
import Dashboardreducer from '../dashboard/dashboardreducer'

const rootReducer = combineReducers({
    //dashboard: () => ({summary:{ credit: 100, debt: 50 }})
    dashboard: Dashboardreducer
})

export default rootReducer