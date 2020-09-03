import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestApiService extends ApiServiceService {
private server:string ="http://localhost:59015/Api_v3.1/QuestAdmin/typ/";
private serverList:string ="http://localhost:59015/Api_v3.1/QuestAdminList/typ/";
// private server:string ="http://dev1.barnensbibliotek.se:8080/Api_v3.1/QuestAdmin/typ/";
// private serverList:string ="http://dev1.barnensbibliotek.se:8080/Api_v3.1/QuestAdminList/typ/";
// private server:string ="https://www2.barnensbibliotek.se/Api_v3.1/QuestAdmin/typ/";
// private serverList:string ="https://www2.barnensbibliotek.se/Api_v3.1/QuestAdminList/typ/";
private devkey:string = "/devkey/alf?type=json";

  constructor(Http:HttpClient) { 
    super("",Http);
  }
  getQuestList(typ:any){
    let url:string = this.serverList + typ +"/val/0"+ this.devkey;
    return this.getPosts(url);
  }

  getQuest(questgroupId:any){
    let url:string = this.server +"getQ/val/"+questgroupId + this.devkey;
    return this.getPosts(url);
  }
  postAddQuest(qobj:any){
    let url:string = this.server +"regQ" + this.devkey;
    return this.doPost(url,qobj);
  }
  postEditQuest(qobj:any){
    let url:string = this.server +"editQ" + this.devkey;
    return this.doPost(url,qobj);
  }
  postDelQuest(qobj:any){
    let url:string = this.server +"rmQ" + this.devkey;
    return this.doPost(url,qobj);
  }
  postAddQuestTrigger(qobj:any){
    let url:string = this.server +"addTrigger" + this.devkey;
    return this.doPost(url,qobj);
  }
  postEditQuestTrigger(qobj:any){
    let url:string = this.server +"editTrigger" + this.devkey;
    return this.doPost(url,qobj);
  }  
  postDelQuestTrigger(qobj:any){
    let url:string = this.server +"delTrigger" + this.devkey;
    return this.doPost(url,qobj);
  }

questobj(){
  return {
    "Active": "0",
    "Uppdragsbeskrivning": "",
    "Uppdragsnamn": "",
    "QuestID": "",
    "BadgeSrc": "",
    "AwardOccures": "2",
    "AwardBeskrivning": "",
    "Level": "1",
    "AwardName": "",
    "BibblomoneyEarnedID": "1",
    "TotLevelUp": "1",
    "PointEarned": "0",
    "Occures": "1",
    "Aid": "",
    "AwardGroupId": "",
    "QuestSubQuestList": [],
      "Status": ""
    };
}

}
