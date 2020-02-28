export class HttpClient {
  constructor(method) {
    this.method = method;
  }

  makeRequest(url) {  
    let data;
    const httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function() { 
        if (httpReq.readyState == 4 && httpReq.status == 200) {
          data = JSON.parse(httpReq.responseText);
        }
    }

    httpReq.open( this.method, url, false );            
    httpReq.send();

    return data;
  }
}