let taskinput = document.getElementById('taskinput');
let addbtn = document.getElementById('addbtn');
let notasks = document.getElementById('notasks');
let alltasks = document.getElementById('alltasks');
let invaliddata = document.getElementById('invaliddata');
let closeinvalid = document.querySelector('#invaliddata .close');
let show = document.getElementById('show');
let model = document.getElementById('model');
let light = document.querySelector('.light');
let body = document.querySelector('body');
let head = document.getElementById('heading');

light.addEventListener('click',function(){
    if(light.classList.contains('btn-warning')){
        light.classList.remove('btn-warning');
        light.classList.add('btn-dark');
        light.innerText ='dark';
        body.classList.add('backmode');
        head.classList.add('mode');
       
    }else{
            light.classList.remove('btn-dark');
            light.classList.add('btn-warning');
            light.innerText ='light';
            body.classList.remove('backmode');
            head.classList.remove('mode');
    }
})

let showmodel= ()=>{
    model.classList.toggle('block');
}
show.addEventListener('click',showmodel);


let notasksfun = ()=>{
    if(alltasks.childElementCount==0){
        notasks.classList.remove('none');
    }
}


let closeinvalidfunction =  ()=> {
    invaliddata.classList.add('none');
}

let addtask = ()=> {
   
  let  taskdata = taskinput.value;

    if (taskinput.value ==""){
        invaliddata.classList.remove('none');
        }else {
        notasks.classList.add('none');
        alltasks.innerHTML += `<div class=" task alert alert-info">
        ${taskdata}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi delete bi-trash-fill float-right" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg>
        </div>`;
        taskinput.value="";
        alltasks.addEventListener('click',function(e){
            if(e.target.classList.contains('task')){
                e.target.classList.toggle('checked');

            }
        })

        showmodel();
    }



}
addbtn.addEventListener('click',addtask);
closeinvalid.addEventListener('click', closeinvalidfunction);

document.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        notasksfun();
    }
});
