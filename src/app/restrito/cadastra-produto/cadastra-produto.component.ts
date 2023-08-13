import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  [x: string]: any;
  public produto: Produto = new Produto(0, "", "", "", 0);
  constructor(private _produtoService: ProdutoService, router: Router) { }
  ngOnInit(): void {
  }
  cadastrar() {
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0, "", "", "", 0);
        alert("Cadastro Efetuado com Sucesso")
      },
      err => {
        alert("erro ao cadastrar")
      }
    );
    this['router'].navigate(["/restrito/lista"]);
  }
}
