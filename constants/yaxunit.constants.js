import {getWorkDirectory} from '../services/storage.service.js'

const YAXUNIT_CONFIG = async () =>{ 
    const path = await getWorkDirectory()
     return {
    "reportPath": `${path}`,
    "reportFormat": "jUnit",
    "showReport": false,
    "closeAfterTests": true, 
    "filter": { 
        "extensions": [ 
            "YAXUNIT"
        ],
    },
    "settings":{
        "ВТранзакции": true
    }
}
}

export {YAXUNIT_CONFIG}