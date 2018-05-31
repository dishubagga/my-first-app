import { Component, OnInit } from '@angular/core';
import { VariableAst } from '@angular/compiler';

@Component({
  //selector:[app-servers]as an attribute
  //selector:[.app-servers] as an class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server was created!";
  serverName= "dishu";
  a="";
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus="Server created!";
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
    
    
  }
}
