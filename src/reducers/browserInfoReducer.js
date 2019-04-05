import Bowser from "bowser"
const browser = Bowser.getParser(window.navigator.userAgent).getBrowser();
const { name: browserName, version: browserVersion } = browser

const initState = { browserName, browserVersion };

const browserInfoReducer = ( state = initState ) => state;

export default browserInfoReducer
