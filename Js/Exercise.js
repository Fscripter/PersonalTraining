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

        this.isImg = false;
        this.End = false;
    }
    Reset(){
        this.actualTime = 0;
        this.porcentaje = 0;
        this.isImg = false;
        this.End = false;
    }
    SetActual(SetPorcentaje){
        if(this.actualTime<this.duration){
            this.actualTime++;
            this.porcentaje = Math.round((this.actualTime*100)/this.duration);
            
            //Draw elements
            document.getElementById(this.BoxTitle).innerHTML = this.title;
            if(this.isImg == false){
                document.getElementById(this.BoxImg).src = this.imgUrl;
                this.isImg = true;
            }
            document.getElementById(this.BoxTime).innerHTML=`${this.actualTime}s`;

            //SetPorcentaje
            SetPorcentaje.SetPorcentaje(this.porcentaje);

            //Cuanto vales en relacion a la serie
        }
        else{
            this.End = true;
        }
    }
}
export {Exercise};