//functie voor maken van delete knop(pen)
const makeDeleteButtons = async function(hash)
{
  try
  {
    const btn       = document.createElement("button");
    btn.id          = hash;
    btn.name        ="btnDEL";
    btn.className   ="btnDEL"
    btn.innerText   ="Delete";
    const lijst     = document.getElementById("lijst");
    lijst.appendChild(btn);
  }
  catch(err)
  {
    console.log(err)
  }
}
//GET
const someAPICallToGetAllTasks = async () => 
{
  try 
  {
    const apiUrl = "https://wincacademydatabase.firebaseio.com/wulfert/tasks.json";
    let res = await fetch(apiUrl, { method: "GET" });
    let resUrl = await res.json();
    return resUrl;
  } 
  catch (err) 
  {
    console.log(err);
  }
};
const getData = async function () 
{
  try 
  {
    const result = await someAPICallToGetAllTasks();
    let tasks = Object.keys(result).map((key) => (
      {
        id: key,
        description: result[key].description,
        done: result[key].done,
      }
    ));
    tasks.forEach(function(item, index)
    {
      const id      = index+1;
      const desc    = item.description;
      const hash    = item.id;
      const lijst   = document.getElementById("lijst");
      const li      = document.createElement("li");
      const trashicon = document.createElement("img");
      trashicon.src ="img/trash-delete-icon.jpg";
      trashicon.height=20;
      li.innerHTML  = id + " " + desc;
      li.appendChild(trashicon);
      lijst.appendChild(li);
      makeDeleteButtons(hash);
    })
  } 
  catch (err) 
  {
    console.log(err);
  }
}
//POST
const postTask = async function () 
{
  const input = document.getElementById("inpAdd").value;
  try 
  {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      alert(`${input} wordt toegevoegd aan takenlijst`);
      const raw = JSON.stringify({"description":input,"done":false});
      const requestOptions = 
      {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      const apiUrl = "https://wincacademydatabase.firebaseio.com/wulfert/tasks.json";
      let res = await fetch(apiUrl, requestOptions);
      response => response.text();
      result => console.log(result);
  } 
  catch (err) 
  {
    alert(err);
  }
  location.reload();
}
//DELETE
const deleteTask = async function ()
{
  try
  {
  const requestOptions = 
  {
    method: 'DELETE',
    redirect: 'follow'
  };
  fetch(`https://wincacademydatabase.firebaseio.com/wulfert/tasks/${event.target.id}.json`, requestOptions)
  response => response.text();
  result => alert(result);
  }
  catch (err) 
  {
    alert(err);
  }
}
