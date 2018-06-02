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
  serverName= "";
  serverCreated=false;
  servers=["testserver" ,"testserver1"]
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server created! and Server name is " +this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
    
    
  }
}
