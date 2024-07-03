const loadData = id =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(data=> displayVidoes(data.data))
}
const displayVidoes = data =>{
    console.log(data);
}