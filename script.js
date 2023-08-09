

const dummyTodos = document.getElementById("dummyTodos");
const btn = document.getElementById("btn");
const inputs = document.getElementById("inputId")

async function fetchTodos(){
    const inputId = inputs.value;
    console.log(inputId);
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${inputId}`);
    const datas = await url.json();
    console.log(datas);

    const card = document.createElement("div");
    card.className = "card";

    const userId = document.createElement("h1");
    userId.className = "user";
    userId.innerHTML = datas.userId;
    card.appendChild(userId);

    const title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = datas.title;
    card.appendChild(title);

    const completed = document.createElement("p");
    completed.className = "com";
    completed.innerHTML = datas.completed;
    card.appendChild(completed);

    dummyTodos.appendChild(card);
    localStorage.setItem(inputId, JSON.stringify(datas));
    
}



btn.addEventListener("click", ()=>{
    fetchTodos();
})

function getFromLocalStorage(){
    btn.addEventListener("click", async()=>{
            const valueInput = inputs.value;
            const storedTodo = localStorage.getItem(valueInput);
            dummyTodos.innerHTML = "";
            if(storedTodo){
                const parseTodo = JSON.parse(storedTodo);
                const card = document.createElement("div");
                card.className = "card";

                const userId = document.createElement("h1");
                userId.className = "user";
                userId.innerHTML = parseTodo.userId;
                card.appendChild(userId);

                const title = document.createElement("h2");
                title.className = "title";
                title.innerHTML = parseTodo.title;
                card.appendChild(title);

                const completed = document.createElement("p");
                completed.className = "com";
                completed.innerHTML = parseTodo.completed;
                card.appendChild(completed);

                dummyTodos.appendChild(card);
            }else{
                await fetchTodos();

            }
        
    })
}

getFromLocalStorage();