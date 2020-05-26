class Logic{
    constructor(arr = new Array(),a,b,c){
        this.MaxSerie = 5;
        this.ActualSerie = 1;
        this.ActualSeriePorcentaje = 0;
        this.Serie = arr;


        this.CantidadItem = this.Serie.length;
        this.ActualItem = 0;

        //Logic Pause
        this.Pause = true;
        this.Exit = false;

       //Stadistics
        this.a = a;
        this.b = b;
        this.c = c;

        //Time
        this.Time = 0;

        this.AumentoItem = false;
        this.AumentoSerie = false;

        this.serieUnitario = 1/this.CantidadItem;
        this.totalUnitario = 1/this.MaxSerie;

        //FirstSerie,SecondSeri,FirstTotal,SecondTotal
        this.FirstSerie = 0;
        this.SecondSerie = 0;
        this.FirstTotal = 0;
        this.SecondTotal = 0;
    }
    AddEvent(){
        document.getElementById('TimeBtn').addEventListener('click', ()=>{
            this.ChangePause();
        })
    }
    ChangePause(){
        if(this.Pause == false){
            this.Pause = true;
            document.getElementById('TimeBtnImg').src='Img/play-button.png';
            document.getElementById('StateTime').innerHTML='Paused';
        }
        else{
            this.Pause = false;
            document.getElementById('TimeBtnImg').src='Img/pause.png';
            document.getElementById('StateTime').innerHTML='Running';
        }
    }
    SetActualItem(){
        if(this.ActualItem < this.CantidadItem){
            this.ActualItem++;
            console.log('Aumento item');
            this.AumentoItem = true;
            this.SecondSerie = this.FirstSerie;
        }
    }
    ChangeTime(){
        document.getElementById('TimeGlobal').innerHTML=`${this.Time}s`;
    }
    Loop(){
        this.Looper = setInterval(()=>{
            if(this.Exit == true){
                clearInterval(this.Looper);
            }
            if(this.Pause == false){
                this.Time++;
                this.ChangeTime();
                if(this.ActualSerie < this.MaxSerie){
                    if(this.ActualItem < this.CantidadItem){
                        this.Serie[this.ActualItem].SetActual(this.a,this);

                        //Actualizacion segundo a segundo de todo

                        /*Primero actualizamos item */
                        if(this.AumentoItem == false){
                            //Usamos el first serie
                            this.FirstSerie = this.Serie[this.ActualItem].porcentaje * this.serieUnitario;
                            this.b.SetPorcentaje(this.FirstSerie);
                        }
                        else{
                            var x = this.Serie[this.ActualItem].porcentaje * this.serieUnitario;
                            this.LastSerie = this.SecondSerie+x;
                            this.b.SetPorcentaje(this.SecondSerie+x);
                        }

                        /*Actualizamos las series*/
                        if(this.AumentoSerie == false){
                            //Usamos el first total
                            if(this.AumentoItem == false){
                                this.TotalPre = this.FirstSerie * this.totalUnitario;
                            }
                            else{
                                this.TotalPre = this.LastSerie *this.totalUnitario;
                            }
                            this.c.SetPorcentaje(this.TotalPre);
                            this.TotalPos = this.TotalPre;
                        }
                        else{
                            if(this.AumentoItem == false){
                                this.TotalPre = this.FirstSerie * this.totalUnitario;
                                this.TotalPos+this.TotalPre;
                            }
                            else{
                                this.TotalPre = this.LastSerie *this.totalUnitario;
                                this.TotalPos+this.TotalPre;
                            }
                            this.TotalTotal = this.TotalPos+this.TotalPre;
                            this.c.SetPorcentaje(this.TotalTotal);
                        }
                    }
                    else{                   
                        //Aumento Serie

                        //resteo de Second serie
                        this.AumentoItem = false;
                        this.SecondSerie = 0;
                        this.TotalPos = this.TotalPre;
                        console.log(this.TotalPos);
                        this.AumentoSerie = true;
                        
                        for(var i = 0; i < this.CantidadItem; i++){
                            this.Serie[i].Reset();
                        }
                        this.ActualSerie++;
                        document.getElementById('SerieGlobal').innerHTML=`🔥 Serie ${this.ActualSerie}`;
                        this.ActualItem = 0;
                    }
                }
                else{
                    console.log('Nice');
                    this.Pause = true;
                }
            }
            else{
                console.log('Toy Paused we');
            }
        },1000);
    }
}
export {Logic};