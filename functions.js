import axios from 'axios';
import { parse } from 'node-html-parser';

export async function fetchAndParseWebsite(url, before, after) {
    
    try {
      // Fetch the HTML content of the website
      const response = await axios.get(url);
  
      // Parse the HTML content
      const root = parse(response.data);
      let alltext = root.toString()
      let startfleshindex = 0
      let finelfleshindex = 0
      let texttochaek = ""
      let bul1 = true
      let index = 0
      const beforeLen = before.length
      const afterLen = after.length
      const lenallstring = alltext.length
    
      while(bul1){
          texttochaek = alltext.slice(index,index + beforeLen)
          if (texttochaek === before){
              bul1 = false
              startfleshindex = index + beforeLen
          }
          index ++
          if (index === lenallstring - 10){
            bul1 = false
          }
      }
      bul1 = true
      

      while(bul1){
        texttochaek = alltext.slice(index,index + afterLen)
        if (texttochaek === after){
            bul1 = false
            finelfleshindex = index
        }
        index ++
        }
        
        
        return alltext.slice(startfleshindex,finelfleshindex);

    } catch (error) {
        console.error('Error:', error);
      }
    }



    export async function webhook(url, text){
    
        const webhookURL = url
      
        const data = JSON.stringify({
          'text':text,
        });
        let resp;
        fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: data,
        }).then((response) => {
          resp = response;
          
        });
        return resp;
      }
    
