//Inicializando as variáveis do tempo 
let segundos = 0; 
let minutos = 0; 
let horas = 0;

// Inicializando o cronometro e a variável do setInterval 
let cronometro = 0;
let interval;

//Funcao que irá iniciar o cronometro
function iniciarCronometro() {

    //Desabilitando button iniciar, para evitar erro. 
    disabledButton('iniciar', true);

    //Iniciando o setInterval para inserir os segundos. 
    interval = setInterval(() => {
            cronometro += 1000; 

            //Chamando função responsável pela modificação na tela inicial. 
            formatoDeHora(cronometro);
    }, 1000); 
}


//Função para pausar o cronômetro; 
function pausarCronometro() {
    clearInterval(interval);
    disabledButton('iniciar', false);
}

//Função para zerar o cronômetro
function zerarCronometro() {
    clearInterval(interval);
    reset();
    formatoDeHora(cronometro);
    disabledButton('iniciar', false);
}

//Função que reseta todos os valores das variáveis
function reset(){
    segundos = 0; 
    minutos = 0; 
    horas = 0;
    cronometro = 0;
}

//Função para disabilitar button
function disabledButton(button, disabled){
    let botaoIniciar = document.getElementById(button);
    botaoIniciar.disabled = disabled;
}

//Função para formatar a hora. 
function formatoDeHora(cronometro) { 

    //Pegando as divs para serem modificadas com os valores. 
    let horasDom = document.querySelector('#hora');
    let minutosDom = document.querySelector('#minutos');
    let segundosDom = document.querySelector('#segundos');
    
    //Fazendo calculo de segundos
    segundos = (cronometro / 1000) % 60;

    //Enviando pelo dom a modificação no tempo
    if(segundos < 10){
        segundosDom.innerHTML = '0' + segundos; 
    }else{
        segundosDom.innerHTML =  segundos; 
    }

    if(minutos < 10){
        minutosDom.innerHTML = '0' + minutos; 
    }else{
        minutosDom.innerHTML =  minutos; 
    }
    
    if(horas < 10){
        horasDom.innerHTML = '0' + horas; 
    }else{
        horasDom.innerHTML =  horas; 
    }

    //Modificando o minuto e horas de acordo com os segundos. 
    if(segundos === 59){
        segundos = 0; 
        minutos += 1;
    }

    if(minutos === 60){
        minutos = 0; 
        horas += 1;
    }
}