class Logic{
    constructor(arr = new Array(),parcial,serie,total){
        this.TotalPorcentaje = 0;
        this.SeriesPorcentaje = [0,0,0,0];
        this.SerieActualPorcentaje = 0;

        this.CambioSerie = 0;
        this.CambioItem = 0;

        this.Pause = false;
        this.TimeLooper = 1;

        this.Time = 0;

        this.SerieArr = arr;
        this.IndiceSerie = 0;
        this.MaxSerie = 4;
        this.IndiceItem = 0;
        this.MaxItem = this.SerieArr.length;

        this.Parcial = parcial;
        this.Serie = serie;
        this.Total = total;

        this.ValorItemParaSerie = 1/this.MaxItem;
        this.ValorSerieParaTotal = 1/this.MaxSerie;
    }
    secondsToString(seconds) {
        var hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return hour + ' h : ' + minute + ' m : ' + second + 's';
    }
    UpdateTime(){
        this.Time++;
        var Text = this.secondsToString(this.Time);
        document.getElementById('TimeGlobal').innerHTML=`${Text}`;
    }
    UpdatePause(){
        if(this.Pause == false){
            this.Pause = true;
            document.getElementById('TimeBtnImg').src = 'Img/pause.png';
        }
        else{
            this.Pause = false;
            document.getElementById('TimeBtnImg').src = 'Img/play-button.png';
        }
    }
    UpdateSerie(x = false){
        if(x == false){
            document.getElementById('SerieGlobal').innerHTML=`🔥 Serie ${this.IndiceSerie+1}`;
        }
        else{
            document.getElementById('SerieGlobal').innerHTML=`🔥 Sos el mejor`;
        }
        
    }
    AddEvent(){
        document.getElementById('TimeBtn').addEventListener('click', ()=>{
           this.UpdatePause(); 
        });
    }
    Loop(){
        this.Looper = setInterval(()=>{
            if(this.Pause == false){
                //Update Time
                this.UpdateTime();

             if(this.IndiceSerie < this.MaxSerie){

                if(this.IndiceItem < this.MaxItem) {
                    //Miro Si ya he cambiado de item
                    if(this.CambioItem == false){
                        //Cambio su porcentaje
                        this.SerieArr[this.IndiceItem].SetActual(this.Parcial);

                        //Verifico para saber si termino o no
                        if(this.SerieArr[this.IndiceItem].End == true){
                            this.SeriesPorcentaje[this.IndiceSerie] = this.SerieArr[this.IndiceItem].porcentaje * this.ValorItemParaSerie;
                            this.CambioItem = true; //Le digo que cambio el item

                            //Aumento item indice
                            this.IndiceItem++;

                            this.Serie.SetPorcentaje(this.SeriesPorcentaje[this.IndiceSerie]);


                            //Calculo el valor de la serie para el total
                            if(this.CambioSerie == false){
                                this.TotalPorcentaje = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal;
                                this.Total.SetPorcentaje(this.TotalPorcentaje);
                            }
                            else{
                                var rx = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal; //Calculo el valor actual de la serie
                                
                                var ry = 0;
                                for(var i = 0; i < this.IndiceSerie; i++){
                                    ry+= this.SeriesPorcentaje[i];
                                }
                                var rrx = rx + (ry * this.ValorSerieParaTotal);

                                this.Total.SetPorcentaje(rrx);
                            }
                        }
                        else{
                            //Verifico su porcentaje Actual
                            this.SeriesPorcentaje[this.IndiceSerie] = this.SerieArr[this.IndiceItem].porcentaje * this.ValorItemParaSerie; //Le digo que su primer valor va a ser igual a eso


                            //Paso el valor de la serie

                            this.Serie.SetPorcentaje(this.SeriesPorcentaje[this.IndiceSerie]);

                            if(this.CambioSerie == false){
                                this.TotalPorcentaje = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal;

                                this.Total.SetPorcentaje(this.TotalPorcentaje);
                            }
                            else{
                                var rx = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal; //Calculo el valor actual de la serie
                                
                                var ry = 0;
                                for(var i = 0; i < this.IndiceSerie; i++){
                                    ry+= this.SeriesPorcentaje[i];
                                }
                                var rrx = rx + (ry * this.ValorSerieParaTotal);

                                this.Total.SetPorcentaje(rrx);
                            }
                        }
                    }
                    else{
                        this.SerieArr[this.IndiceItem].SetActual(this.Parcial);

                        //Verifico para saber si termino o no
                        if(this.SerieArr[this.IndiceItem].End == true){

                            this.SeriesPorcentaje[this.IndiceSerie] = this.SeriesPorcentaje[this.IndiceSerie] + this.SerieArr[this.IndiceItem].porcentaje * this.ValorItemParaSerie; //Aumento el valor del array

                            this.CambioItem = true; //Le digo que cambio el item

                            //Aumento item indice
                            this.IndiceItem++;

                            this.Serie.SetPorcentaje(this.SeriesPorcentaje[this.IndiceSerie]);

                            if(this.CambioSerie == false){
                                this.TotalPorcentaje = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal;
                                this.Total.SetPorcentaje(this.TotalPorcentaje);
                            }
                            else{
                                var rx = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal; //Calculo el valor actual de la serie
                                
                                var ry = 0;
                                for(var i = 0; i < this.IndiceSerie; i++){
                                    ry+= this.SeriesPorcentaje[i];
                                }
                                var rrx = rx + (ry * this.ValorSerieParaTotal);

                                this.Total.SetPorcentaje(rrx);
                            }
                        }
                        else{
                            var rx = this.SerieArr[this.IndiceItem].porcentaje * this.ValorItemParaSerie; //Valor que cambia


                            this.Serie.SetPorcentaje(this.SeriesPorcentaje[this.IndiceSerie]+rx);

                            if(this.CambioSerie == false){
                                this.TotalPorcentaje = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal;
                                this.Total.SetPorcentaje(this.TotalPorcentaje);
                            }
                            else{
                                var rx = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal; //Calculo el valor actual de la serie
                                
                                var ry = 0;
                                for(var i = 0; i < this.IndiceSerie; i++){
                                    ry+= this.SeriesPorcentaje[i];
                                }
                                var rrx = rx + (ry * this.ValorSerieParaTotal);

                                this.Total.SetPorcentaje(rrx);
                            }
                            if(this.CambioSerie == false){
                                this.TotalPorcentaje = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal;
                            }
                            else{
                                var rx = this.SeriesPorcentaje[this.IndiceSerie] * this.ValorSerieParaTotal; //Calculo el valor actual de la serie
                                
                                var ry = 0;
                                for(var i = 0; i < this.IndiceSerie; i++){
                                    ry+= this.SeriesPorcentaje[i];
                                }
                                var rrx = rx + (ry * this.ValorSerieParaTotal);

                                this.Total.SetPorcentaje(rrx);
                            }
                        }
                    }
                }
                else{
                    console.log(`Se acabao la serie ${this.IndiceSerie}`);

                    //Seteo los items a cero
                    this.IndiceItem = 0;

                    for(var i = 0; i < this.MaxItem; i++){
                        this.SerieArr[i].Reset();
                    }

                    //Aumento el indice del array
                    this.IndiceSerie++;

                    //Digo que aumento la serie

                    this.CambioSerie = true;
                    this.UpdateSerie();
                }
             }  
             else{
                 console.log('Se acabaron las series');
                 this.UpdateSerie(true);
                 this.Pause = true;
                 this.Quit = true;
             }
            }
            else{
                if(this.Quit == true){
                    clearInterval(this.Looper);
                }
                console.log('Estoy paused');
            }
        },this.TimeLooper);
    }
}

export{Logic};