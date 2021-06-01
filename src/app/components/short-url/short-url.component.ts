import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent implements OnInit {

  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  mostrarError: boolean;
  nombreError: string;


  constructor(private _shortUrlServie: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.nombreError = '';
   }

  ngOnInit(): void {
  }

  procesarUrl(){

    //validar si la url esta vacia
    if (this.nombreUrl === '') {
      this.error('Por favor ingrese una URL');

      return;
    }

    this.urlProcesada = false;
    this.loading = true;

    setTimeout(() => {
      this.obtenerUrlShort();
    }, 2000);
  }

  obtenerUrlShort(){
    this._shortUrlServie.getUrlShort(this.nombreUrl).subscribe(data =>{
      this.loading = false;
      this.urlProcesada = true;
      this.urlShort = data.link;
    }, error =>{
      this.loading = false;
      this.nombreUrl = '';
      if (error.error.description === 'The value provided is invalid.') {
        this.error('La URL ingresada no es valida');
      }
    })
  }

  error(valor: string){
    this.mostrarError = true;
    this.nombreError = valor;
    
    //mostrar error por 4 segundos
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }

}
