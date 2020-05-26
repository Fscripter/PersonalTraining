class Exercise{
    constructor(title = String,duration = int,img = String){
        this.porcentaje = 0;//Porcentaje
        this.duration = duration;//Total Duration
        this.title = title;//Titulo ejercicio
        this.imgUrl = img; //Img url
        this.actualTime = 0; //Time

        this.BoxTitle ='ExerciseTitle';
        this.BoxImg = 'ExerciseImg';
        this.BoxTime = 'ExerciseTimeSpan';
    }
    Reset(){
        this.actualTime = 0;
        this.porcentaje = 0;
    }
    SetActual(SetPorcentaje,end){
        if(this.actualTime<this.duration){
            this.actualTime++;
            this.porcentaje = Math.round((this.actualTime*100)/this.duration);
            
            //Draw elements
            document.getElementById(this.BoxTitle).innerHTML = this.title;
            document.getElementById(this.BoxImg).src = this.imgUrl;
            document.getElementById(this.BoxTime).innerHTML=`${this.actualTime}s`;

            //SetPorcentaje
            SetPorcentaje.SetPorcentaje(this.porcentaje);

            //Cuanto vales en relacion a la serie
        }
        else{
            end.SetActualItem();
        }
    }
}
export {Exercise};