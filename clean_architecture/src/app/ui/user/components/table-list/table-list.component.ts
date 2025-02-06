import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  standalone: false,
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];



  constructor(){}







  ngOnInit(): void {
      
  }

}
