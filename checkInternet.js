var internetAvailable = require("internet-available");

// Set a timeout and a limit of attempts to check for connection
/*internetAvailable({
    timeout: 4000,
    retries: 10,
}).then(function(){
    console.log("Internet available");
}).catch(function(){
    console.log("No internet");
});*/

/*internetAvailable().then(function(){
    console.log("Internet available");
}).catch(function(){
    console.log("No internet");
});*/

var connectivity = require('connectivity')

//----log
const log4js = require('log4js');
log4js.configure({
  appenders: { applog: { type: 'file', filename: 'applog.log' } },
  categories: { default: { appenders: ['applog'], level: 'error' } }
});
 
const logger = log4js.getLogger('applog');
/*logger.trace('something to trace');
logger.debug('something to debug');
logger.info('something info');
logger.warn('something warm msg');
logger.error('something error msg');
logger.fatal('something fatal msg');*/


//----
 
connectivity(function (online) {
	setInterval(function(){
  		console.log('test');
		if (online) {
   		 console.log('connected to the internet!')
		 logger.error('connected to the internet!');
  		} else {
   			 console.error('sorry, not connected!')
			logger.error('sorry, not connected!');
 		 }


	}, 5000);

  
})

