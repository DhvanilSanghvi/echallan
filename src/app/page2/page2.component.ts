import { Component, OnInit } from '@angular/core';
import { DatapoliceidService } from '../datapoliceid.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  policelist: Policemen[];
  
  constructor(private data : DatapoliceidService) {
    this.policelist = [
      {policeid:'1', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'2', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'3', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'4', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'5', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'6', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'7', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'8', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'9', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'10',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'11', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'12', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'13', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'14', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'15', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'16', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'17', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'18', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'19', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'20',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'21', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'22', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'23', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'24', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'25', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'26', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'27', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'28', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'29',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'30', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'31', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'32', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'33', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'34', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'35', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'36', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'37', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'38', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'39', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'40',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'41', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'42', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'43', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'44', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'45', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'46', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'47', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'48', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'49', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'50',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'51', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'52', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'53', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'54', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'55', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'56', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'57', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'58', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'59', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'60',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'61', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'62', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'63', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'64', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'65', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'66', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'67', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'68', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'69', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'70',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'71', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'72', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'73', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'74', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'75', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'76', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'77', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'78', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'79', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'80',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'81', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'82', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'83', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'84', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'85', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'86', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'87', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'88', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'89', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'90',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'},
      {policeid:'91', name: 'Magan Chaurasiya',policeStation: 'Sanand'},
      {policeid:'92', name: 'Lagan Chaurasiya',policeStation: 'Sarkhej'},
      {policeid:'93', name: 'Dagan Chaurasiya',policeStation: 'Ambawadi'},
      {policeid:'94', name: 'Fagan Chaurasiya',policeStation: 'Paldi'},
      {policeid:'95', name: 'Chhagan Chaurasiya',policeStation: 'Bopal'},
      {policeid:'96', name: 'Gagan Chaurasiya',policeStation: 'Chandkheda'},
      {policeid:'97', name: 'Ragan Chaurasiya',policeStation: 'Satellite'},
      {policeid:'98', name: 'Hagan Chaurasiya',policeStation: 'Vastrapur'},
      {policeid:'99', name: 'Kagan Chaurasiya',policeStation: 'Bodakdev'},
      {policeid:'100',name: 'Pagan Chaurasiya',policeStation: 'Ghuma'}
     ];   
   }
   importedidvalue: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.importedidvalue = message);

  }

}

export class Policemen {
  policeid: String;
  name: String;
  policeStation: String;
}

