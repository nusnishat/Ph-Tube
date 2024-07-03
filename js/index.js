const loadData = id =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(data=> displayVidoes(data.data))
}
const displayVidoes = vidoes =>{
    vidoes.sort((a, b)=> a.others.view - b.others.view)

    const vidoesContainer = document.getElementById('vidoes-container');
    vidoesContainer.textContent = '';
    const novideoContainer = document.getElementById('no-video');
    novideoContainer.textContent = '';
    
    if(vidoes.length==0)
        {
            const div = document.createElement('div');
            div.classList.add('my-12');
            div.innerHTML = `
            <img class="mx-auto text-center"
            src="/images/Icon.png"
            />
            <h1 class="text-xl flex justify-center font-semibold">Oops!! Sorry, There is no content here</h1>
            `  
            novideoContainer.appendChild(div);
        }
    vidoes.forEach(video=>{
        const div = document.createElement('div');
        div.classList.add('card', 'bg-base-100', 'shadow-lg');

        div.innerHTML = `
        <figure class="h-56">
            <img class="h-56"
            src=${video.thumbnail}
            />
        </figure>
        <div class="p-4 space-y-2">
            <div class="flex">
              <img
               src=${video.authors[0].profile_picture}
               class="w-8 h-8 me-2 rounded-full"
               />
               <h2 class="text-xl font-semibold">
                ${video.title}
                </h2>
            </div>
            <span class="text-slate-600 ms-10 text-sm">${video.authors[0].profile_name}</span>
            <span id="verified" class="ms-2 hidden font-semibold text-blue-700">Verified</span>
            <p class="text-slate-600 ms-10 text-sm">${video.others.views}</p>
            </div>
        </div>
        `
        const verified = document.getElementById('verified');
        if(video.authors[0].verified)
            {
                verified.classList.remove('hidden')
            }  
        vidoesContainer.appendChild(div);

    })
}

loadData(1000);