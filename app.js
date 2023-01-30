const correctAnswers= ['B', 'A', 'B', 'A'];

const form= document.querySelector('.quiz-form')
const span=document.querySelector('span')
const result=document.querySelector('.result')
const body=document.querySelector('body')
const btn=document.querySelector('button')

form.addEventListener('submit', e=>{
    // prevents the submit button from refreshing the page
    e.preventDefault();
    
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    // console.log(userAnswers)

    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score+=1;
        }
    })

    score=(score/4)*100;

    // good way but theres a bette way to update score
    // span.innerText=score+"%";

    result.classList.remove('d-none')
    scrollTo(0,0);
    // to do the same thing
    //body.scrollTop=0

    let scoreOutput=0;
    const timerFunc=setInterval(()=>{
        result.querySelector('span').textContent=`${scoreOutput}%`;
        if(scoreOutput==score){
            clearInterval(timerFunc);
        }else{
            scoreOutput++;
        }
        
    },10);
    
})

btn.addEventListener('click',()=>{
    location.reload()
})