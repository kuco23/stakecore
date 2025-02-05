import { chainUrl, validatorNodeId } from "./constants"

const rpcCall = (rpcUrl, method, params) => `curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "${method}",
    "params": ${params},
    "id": 1
}' -H 'content-type:application/json;' ${rpcUrl}`

export function uptime() {
    return rpcCall(chainUrl + '/ext/bc/P', 'platform.getCurrentValidators', `{"nodeIDs": ["NodeID-${validatorNodeId}"]}`)
}