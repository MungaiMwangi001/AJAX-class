/*<div id="demo">
        <h2>The XmlHttpRequest Object</h2>
        <button type="button" onclick="loadDoc()">Change Content</button>
    </div> */
   
    

function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById('demo').innerHTML =this.responseText;
    }
    xhttp.open('GET', "ajax_info.txt");
    xhttp.send();


}


/*
- new operator creates an instance of the XMLHttpRequest object, making asynchronous request to a server
-.open(method, url): Initializes the request. You specify the HTTP method (e.g., GET, POST) and the URL.
-send(): Sends the request to the server.
-The onload event handler in JavaScript is used to execute a function when a certain resource or element has fully loaded.
*/
   