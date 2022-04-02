const parent = document.querySelector('.container');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', function()
{
    const child = document.createElement('div');

    child.textContent = input.value;
    
    child.classList.add('child');

    if(input.value !== '')
    {        
        parent.append(child);
    }

    input.value = '';

})


