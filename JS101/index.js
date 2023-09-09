
async function getData(number){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users/"+number)
    ).json();

    const posts= await(await fetch("https://jsonplaceholder.typicode.com/posts?userId="+number)
    ).json();

    console.log("users",users);
    console.log("Posts",posts);
}
getData(2);