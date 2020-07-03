//GET
document.getElementById("btnGET").addEventListener('click',getData());//r20 api-client
//POST
const formKlik = document.getElementById('btnSubmit').addEventListener('click', postTask);//r71 api-client
//DELETE
document.body.addEventListener( 'click', function ( event ) 
{
    if( event.srcElement.name == 'btnDEL' ) 
    {
        deleteTask();
    };
});







