
document.querySelector('#app2').innerHTML = `
  <div id="embeddedGame">
    <embed type="text/html" src="/I-cant-stop/index.html" width="100%" height="768px">
  </div>
  <div id="projectBlurb"> 
    <h1>I Can't Stop!</h1>
    <p> 
    A videogame. From a programming perspective, a straightforward project where the biggest engineering challenge was managing states for the playercharacter and boss.
    Motivated after seeing the simplicity of IWBTG custom levels.
    </p>
  </div>
`
/*
setTimeout(() => {
    CDP(async (client) => {
        const {Network, Page, Runtime} = client;

        const requests = new Set(); // <---------- HERE

        Network.requestWillBeSent(({requestId, request}) => {
            if(request.url.indexOf("ct2/results/rpc") != -1){
                console.log(`REQ [${requestId}] ${request.method} ${request.url} \n`);

                requests.add(requestId); // <---------- HERE

            }
        });
        Network.loadingFinished(async ({requestId}) => {

            if (requests.has(requestId)) { // <---------- HERE

                const {body, base64Encoded} = await Network.getResponseBody({requestId});
                console.log(`RES [${requestId}] body: ${body} \n`);
            }
        });
        try {
            await Promise.all([Network.enable(), Page.enable()]);
            await Page.navigate({url: 'https://clinicaltrials.gov/ct2/results?cond=Parents&term=&cntry1=&state1=&Search=Search&recrs=a#wrapper'});
            await Page.loadEventFired();
            await Runtime.evaluate({
                expression: `document.querySelector('.paginate_button.next').click()`
            });
        } catch (err) {
            console.error(err);
        }
    }).on('error', (err) => {
        console.error(err);
    });
}, 1000);
*/