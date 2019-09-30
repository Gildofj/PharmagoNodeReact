module.exports = mail => {
    return `
    <html>  
        <div>
            <h3>Seu ticket foi aberto conosco!</h3>
            <p>Já estamos avaliando seu caso referente ao ticket abaixo:</p>
            <p>${mail.corpoEmail}</p>
            <p>Caso deseje entrar em contato novamente basta ligar no número (48) 9 9133-3748 
            ou abrir um novo chamado no link abaixo</p>
            <div>
                <a href="http://localhost:3000/suporte>Contato</a>
            </div>
        </div>
    </html>
    `;
};