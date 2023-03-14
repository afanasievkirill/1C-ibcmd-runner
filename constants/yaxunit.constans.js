import {getWorkDirectory} from "../helpers/storage.helper"

const YAXUNIT_CONFIG =  {
    "reportPath": `${await getWorkDirectory()}`,
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

export {YAXUNIT_CONFIG}