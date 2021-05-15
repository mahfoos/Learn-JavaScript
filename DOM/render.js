// const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText += ' Mahfoos ahamed'; // apend with before one

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);

// content.innerHTML = '<h2>This is new H@@@@@@</h2>'; // appear in page

// const peaople = ['Mahfoos','Ahamed','Umar'];

// peaople.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });


// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.mahfoos.com');
// link.innerText = 'Mahfoos Blog';  

// const title = document.querySelector('h1');

// console.log(title.style);

// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'red';
// title.style.fontSize = '60px';

// const content = document.querySelector('p');

// console.log(content.classList); // only error claas

// content.classList.add('error');

// content.classList.remove('error');

// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }

    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
})