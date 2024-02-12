document.getElementById('delete').addEventListener('click', function(){
  const para=document.getElementById('deleteBtn');
  para.style.display='none';
  document.getElementById('deleteMsg').value=''
})

document.getElementById('deleteMsg').addEventListener("keyup",function(){
  if(this.value==='delete'){
    document.getElementById('delete').removeAttribute('disabled');
  }else{
    document.getElementById('delete').setAttribute('disabled', true);
  }
})