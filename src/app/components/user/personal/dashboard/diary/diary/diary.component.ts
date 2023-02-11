import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';



defineFullCalendarElement();

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    }
  };

  calendarEvents: any[] = [
    {
      title: 'Event 1',
      start: '2022-25-12',
      end: '2022-28-12'
    },
    {
      title: 'Event 2',
      start: '2022-15-12',
      end: '2022-16-12'
    },
    {
      title: 'Event 3',
      start: '2022-01-09',
      end: '2022-01-10'
    }
  ];

  filteredEvents: any[] = [];

  updateFilter(filter: string) {
    this.filteredEvents = this.calendarEvents.filter(event => event.title.includes(filter));
  }

}
