import {config as baseConfig} from "../wdio.conf"
export const config = Object.assign(baseConfig, {
    //all test env specifi key val pairs 
    environment: "TEST",
    ATSURL: "https://automationteststore.com/"
})