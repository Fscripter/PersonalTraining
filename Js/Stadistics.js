class Graph{
    constructor(IDtext = String, IDEjer = String){
        this.Porcentaje = 0;
        this.Grades = -180;
        this.Text = IDtext;
        this.Box = IDEjer;

        this.UpdateElements();
    }
    SetPorcentaje(Porcentaje = int){
        this.Porcentaje = Porcentaje.toFixed(1);
        this.PorcentajeToGrades();
        this.UpdateElements();
    }
    PorcentajeToGrades(){
        var Gx = 180/100;
        this.Grades = (this.Porcentaje*Gx)-180;
    }
    UpdateElements(){
        document.getElementById(this.Text).innerHTML=`${this.Porcentaje}%`;
        document.getElementById(this.Box).style.transform=`rotate(${this.Grades}deg)`;
    }
}
export {Graph};