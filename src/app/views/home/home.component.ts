import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myService =[
    {
      name:"Prototyping",
      caption:"Prototyping improves the quality of the specifications and requirements provided to customers. With prototyping, customers can anticipate higher costs, needed changes and potential project hurdles."
    },
    {
      name:"Scaling Application",
      caption:"Scalability is the ability of your app to handle a growing number of customers, clients and/or users. It also pertains to the ability of your current or future developer to maintain the application."
    },
    {
      name:"Development Strategy      ",
      caption:"Planning ahead means understanding the big picture idea to the software you are writing. By having a clear breakdown of the project,we are able to write code that would make sense together."
    },
    {
      name:"System Architecture",
      caption:"There are many ways to define the value of architecture, not just the capital cost: things such as return on investment, visual beauty, functional space, efficiency and user delight."
    },
    {
      name:"Branding",
      caption:"Brand valuation is the process of estimating the total financial value of a brand. A conflict of interest exists if those who value a brand were also involved in its own creation."
    },
    {
      name:"Consulating",
      caption:"We consult with clients to determine the scope of website development projects, implement SEO strategies to increase traffic flow to websites, maintain websites and applications."
    },
  ]
  myPricing = [
    {
      name:'Starters Pack',
      price:'FREE',
      skill:[
        'Consulating',
        'Development Strategy'
      ]
    },
    {
      name:'Explore Pack',
      price:'-',
      skill:[
        'Consulating',
        'Development Strategy',
        'System Architecture',
        'Prototyping'
      ]
    },
    {
      name:'Startup Pack',
      price:'-',
      skill:[
        'Consulating',
        'Development Strategy',
        'System Architecture',
        'Prototyping',
        'Branding',
        'Scaling Application'
      ]
    },
  ]
  myRecommandation =[
    {
      name:"Bhumika Shah",
      caption:"Prototyping improves the quality of the specifications and requirements provided to customers. With prototyping, customers can anticipate higher costs, needed changes and potential project hurdles."
    },
    {
      name:"Bhumika Shah",
      caption:"Scalability is the ability of your app to handle a growing number of customers, clients and/or users. It also pertains to the ability of your current or future developer to maintain the application."
    },
    {
      name:"Bhumika Shah      ",
      caption:"Planning ahead means understanding the big picture idea to the software you are writing. By having a clear breakdown of the project,we are able to write code that would make sense together."
    }
  ]
  toggleMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
