//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 8;
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt (prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} porfavor`));
    console.log(numeroSecreto);
    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos fue verdadera la condición
    alert (`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if (numeroUsuario > numeroSecreto) {alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //incrementamos el contador cuando no acierta
        //intentos = intentos +1;
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplio
    alert('Lo siento, no acertaste el número');
    }
}