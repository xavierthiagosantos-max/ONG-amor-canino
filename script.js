document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-cadastro');
    
    if (!form) {
        console.error("Erro: Elemento com ID 'form-cadastro' não encontrado no HTML.");
        return; 
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        this.reset();

        let camposvalidos = true;
        
        let campos = this.querySelectorAll('input, select');
        campos.forEach(function(campo) {
            if (!campo.value.trim()) { 
                camposvalidos = false;
            }
        });
      
        if (!camposvalidos) {
            const msgDiv = document.querySelector('#mensagemSucesso');
            msgDiv.style.display = 'block';
            return;
        }


        const nome = document.getElementById('ncompleto').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const email = document.getElementById('email').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const cep = document.getElementById('cep').value.trim();
        const cidade = document.getElementById('cidade').value.trim();
        const estado = document.getElementById('estado').value.trim();

        let isValid = true;

        if (ncompleto.length < 10) {
            alert('Por favor, insira um nome válido (o nome completo deve ter pelo menos 10 caracteres).');
            isValid = false;
        } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
            alert('Por favor, insira um CPF válido no formato 000.000.000-00.');
            isValid = false;
        } else if (telefone && !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
            alert('Por favor, insira um número de telefone válido no formato (00) 00000-0000.');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            isValid = false;
        } else if (!/^\d{5}-\d{3}$/.test(cep)) {
            alert('Por favor, insira um CEP válido no formato 00000-000.');
            isValid = false;
        } else if (cidade.length < 3) {
            alert('Por favor, insira uma cidade válida (pelo menos 3 caracteres).');
            isValid = false;
        } else if (estado.length !== 2) {
            alert('Por favor, insira um estado válido (sigla de 2 caracteres).');
            isValid = false;
        }
        
        if (isValid) {
           const msgDiv = document.querySelector('#mensagemSucesso'); 
           msgDiv.style.display = 'block';
            setTimeout(function() {
               const msgDiv = document.querySelector('#mensagemSucesso'); 
               msgDiv.style.display = 'none';
                form.reset(); 
            }, 3000); 
        }
    });
    
    function menuShow(){
        const menu = document.querySelector('.mobile-menu');
        menu.classList.toggle('active');
    }
});