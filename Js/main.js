//Import all
import {Graph} from './Stadistics.js';
import {Exercise} from './Exercise.js';
import {Logic} from './Loop.js';


var Ejercicio = new Graph('EjercicioText','EjercicioPre');
var Serie = new Graph('SerieText','SeriePre');
var Total = new Graph('TotalText','TotalPre');

var Exercises = new Array();

Exercises[0] = new Exercise('Calentamiento',60,'Img/Exercises/Calentamiento.png');
Exercises[1] = new Exercise('Cardio',30,'Img/Exercises/Cardio.gif');
Exercises[2] = new Exercise('Sentadillas',60,'Img/Exercises/Sentadillas.png');
Exercises[3] = new Exercise('Sentadillas con salto',30,'Img/Exercises/SentadillasConSalto.gif');
Exercises[4] = new Exercise('Abdominales',60,'Img/Exercises/Abdominales.png');
Exercises[5] = new Exercise('Hidratacion',45,'Img/Exercises/Descanso.png');
Exercises[6] = new Exercise('Abdominales Crunch',60,'Img/Exercises/AbdominalesCrunch.gif');
Exercises[7] = new Exercise('Abdominales Escaladas',60,'Img/Exercises/AbdominalesEscaladas.gif');
Exercises[8] = new Exercise('Abdominales V',60,'Img/Exercises/AbdominalesV.gif');
Exercises[9] = new Exercise('Descanso',60,'Img/Exercises/Descanso.png');
//This will be a good train
Exercises[10] = new Exercise('Cardio',30,'Img/Exercises/Cardio.gif');
Exercises[11] = new Exercise('Flexion de Pecho',30,'Img/Exercises/FlexionPecho.gif');
Exercises[12] = new Exercise('Burpes',30,'Img/Exercises/Burpes.gif');
Exercises[13] = new Exercise('Fondos',90,'Img/Exercises/Fondos.gif');
Exercises[14] = new Exercise('Superman',60,'Img/Exercises/Superman.png');
Exercises[15] = new Exercise('Hidratacion',45,'Img/Exercises/Hidratacion.png');
Exercises[16] = new Exercise('Pararse de manos',15,'Img/Exercises/SobreManos.png');
Exercises[17] = new Exercise('Abdominales Escaladas',60,'Img/Exercises/AbdominalesEscaladas.gif');
Exercises[18] = new Exercise('Fin Serie, Descansa',30,'Img/Exercises/Descanso.png');

var Logica = new Logic(Exercises,Ejercicio,Serie,Total);

window.addEventListener('load', ()=>{
    Logica.AddEvent();
    Logica.Loop();
});