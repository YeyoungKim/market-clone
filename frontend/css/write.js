clearTimeoutonst form=document.getElementById('write-form');

const hadleSubmitFrom= async (event) => {
    event.preventDefault();
    const body = new FormData(form);
    body.append('insertAt', new Date().getTime());
    try{
        const res=await fetch('/items',{
            method:'POST',
            body:body,
        });
        const data=await res.json();
        if (data==='2000') window.location.pathname="/";
    }catch(e){
console.error(e);
    }
};

form.addEventListener('submit', handleSubmitForm);