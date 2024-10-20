$(document).ready(function(){
    // Máscara para telefone
    $("#telefone").mask("(00)00000-0000");

    // Validação do formulário
    $('#formulario').validate({
        rules:{
            telefone:{
                required: true,
                minlength: 15,
                maxlength: 15
            }
        },
        messages: {
            telefone: {
                required:"O Telefone é obrigatório",
                minlength:"Informe o telefone no formato (XX)XXXXX-XXXX",
                maxlength:"Informe o telefone no formato (XX)XXXXX-XXXX"
            }
        }
    });
});