import dotenv from 'dotenv';
dotenv.config();
import { fetchAndParseWebsite, webhook } from './functions.js'
import axios from 'axios';


let arrayindex = []

async function send() {
    let textToSend = ""
    let numberVidoe = ""
    let linkToSend = ""

    numberVidoe = await fetchAndParseWebsite('https://www.kore.co.il/category/24','<a href="/viewArticle/','" aria')

    if(!arrayindex.includes(numberVidoe)){
        linkToSend = await fetchAndParseWebsite('https://www.kore.co.il/viewArticle/' + numberVidoe,'video controls="controls" src="','" controlslist="nodo')
        textToSend = await fetchAndParseWebsite('https://www.kore.co.il/viewArticle/' + numberVidoe,'<h1>','</h1>')
        webhook(process.env.VITE_URL_SERVER, textToSend + String.fromCharCode(10) + linkToSend)
        arrayindex.push(numberVidoe)     
    }
    
}
setInterval(() => {
    send();
  }, 60000);
  
  // Initial fetch and send
  console.log('Fetching initial data and sending...');
    
