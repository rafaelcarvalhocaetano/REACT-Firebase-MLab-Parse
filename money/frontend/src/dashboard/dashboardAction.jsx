import axios from 'axios'

const base_url = 'http:localhost:3003/api'


export function getSummary(){
    const request = axios.get(`${base_url}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
    }
}