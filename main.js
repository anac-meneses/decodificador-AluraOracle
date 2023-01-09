function cripto() {
     let text = document.querySelector('textarea').value;
     if (text !== '') {
          textCripto = text
               .replace(/a/g, 'ai')
               .replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
          document.getElementById('msgCripto').style.display = 'none';
          document.getElementById('msg').style.display = 'inline';
          document.getElementById('msg').value = textCripto;
          document.getElementById('copiar').style.display = 'block';

     }
}

function descripto() {
     let text = document.querySelector('textarea').value;
     if (text !== '') {
          textCripto = text
               .replace(/ai/g, 'a')
               .replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
          document.getElementById('msgCripto').style.display = 'none';
          document.getElementById('msg').style.display = 'inline';
          document.getElementById('msg').value = textCripto;

     }
}

function copiar() {
     let copia = document.getElementById('msg');
     copia.select();
     document.execCommand("copy");
     alert('o texto foi copiado!');
}