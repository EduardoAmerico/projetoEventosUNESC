import { Injectable } from '@angular/core';
import { Banner } from './banner';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private link = "https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2018/03/Organizando-eventos-as-principais-etapas-de-um-projeto-e-o-que-fazer-em-cada-uma-1.png";
  private link2 ="http://unesc.net/portal/";
  private banner: any[] = [
    { id: 1, titulo: 'Alunos 01',imagem: this.link, link: this.link2 },
    { id: 2, titulo: 'Alunos 02',imagem: this.link, link: this.link2 },
    { id: 3, titulo: 'Alunos 03',imagem: this.link, link: this.link2 },
    { id: 4, titulo: 'Alunos 04',imagem: this.link, link: this.link2 },
  ];

  constructor() { 
    
  }
  getBanners(){
    
    console.log(this.banner)
    return this.banner;
    
  }
}
